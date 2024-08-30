import { useNavigate, useParams } from "react-router";
import Base from "../../components/atom/Base"
import BaseText from "../../components/atom/BaseText";
import shopImage from "../../assets/pirarucu.jpg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import BaseImage from "../../components/atom/BaseImage";
import BaseButton from "../../components/atom/BaseButton";
import { format } from "date-fns";
import VendorCard from "../../components/molecule/VendorCard";
import Card from "../../components/molecule/Card";
import { styled } from "styled-components";
import fetchProductImage from "./fetchProductImage";
import Modal from "../../components/molecule/Modal";
import { HandleAddToCart } from "../../components/molecule/Card/handleAddToCart";
import getProfile from "../UserProfilePage/getProfile";


interface User {
    id: number;
    name: string;
}

interface Vendor {
    id:number;
    user: User;
    rating: number;
}

interface ProductInfo {
    id: number;
    price: number;
    name: string;
    stock: number;
    description: string;
    announcedAt: string;
    updatedAt: string;
    vendor: Vendor;
    rating?: number;
}

const ProductsBase = styled.div`
    display: flex;
    flex-direction: row; 
    gap: 4rem;
    margin: 0 2rem; 
    padding: 2rem 0 1rem 2rem;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

`

const TextSeparator = styled.h2`
    text-align: center;
    font-weight: bold;
    font-size: 24px;

    &::after {
        content: "";
        display: block;
        background: #000;
        height: 4px;
        border-radius: 2px;
        margin: 2rem auto 0 auto;
        width: 90%;
    }
`

const ProductPage = () => {
    const params = useParams();

    const [user, setUser] = useState<User>({ id: 1, name: "test" });
    const [profilePicture, setProfilePicture] = useState<string>("");
    const [product, setProduct] = useState<ProductInfo>();
    const [productImage, setProductImage] = useState<string>("");
    const [otherProducts, setOtherProducts] = useState<ProductInfo[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

    const navigate = useNavigate();


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const profile = await getProfile();
                if (profile && profile.id) {
                    setUser(profile);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        try {
            const getData = async () => {
                const fetchProducts = async () => {
                    const response = await api.get(`product/${params.productId}`);
                    setProduct(response.data);
                }
                await fetchProducts();
                const fetchUserProducts = async () => {
                    const response = (await api.get(`product/user/${params.vendorId}`)).data as ProductInfo[];
                    const products = response.filter(p => p.id !== product?.id)
                    setOtherProducts(products);
                }
                await fetchUserProducts();
            }
                getData();
                
            } catch (e) {
                toast.error("Erro ao carregar os dados.", {
                    position: "top-right"
                });
            }
        }, [params.productId, params.vendorId])
    
    useEffect(() => {
        try {
            const getData = async () => {
                const fetchUserProducts = async () => {
                    const response = (await api.get(`product/user/${params.vendorId}`)).data as ProductInfo[];
                    const products = response.filter(p => p.id !== product?.id)
                    setOtherProducts(products);
                }
                await fetchUserProducts();
            }
                getData();
            } catch (e) {
                toast.error("Erro ao carregar os dados.", {
                    position: "top-right"
                });
            }
    }, [product])


    useEffect (() => {
        const getData = async () => {
            const fetchProfilePicture = async () => {
                const response = await api.get(`/user/${params.vendorId}/profile-picture`,
                {
                    responseType: "arraybuffer"
            });
                const imageBlob = new Blob([response.data], { type: "image/jpeg" });
                const imageUrl = URL.createObjectURL(imageBlob);
                setProfilePicture(imageUrl);
            }
            await fetchProfilePicture();
        }
        getData();
    }, [params.vendorId]
    );

    useEffect(() => {
        const getProductImage = async () => {
            const image = await fetchProductImage(Number(params.productId));
            if (image) {
                setProductImage(image);
            }
        }
        getProductImage();
    }, [params.productId, params.vendorId]);

    if (!product) {
        return (
            <BaseText>Não há informações neste produto</BaseText>
        );
    }

    const handleCart = () => {
        setIsModalOpen(true);
    }

    const handleConfirm = (quantity: number) => {
        setSelectedQuantity(quantity);
        createCart();
    }

    const createCart = async () => {
        const cart = await HandleAddToCart(user.id, product.id, selectedQuantity);
        if (cart) {
            navigate(`/${user.id}/shopping-cart`);
        }
    }

    return (
        <Base $gap={2} $background="transparent" $zIndex={1}>
            <Base $borderRadius={12} $height="fit-content" $padding="2rem 6rem 8rem 2rem" $width="full">
                <Base $justifyContent="space-between" $flexDirection="row">
                    <Base $alignItems="center" $width="50%" $gap={4} $justifyContent="space-between">
                        <BaseText $fontSize={24} $fontWeight="bold">{product.name}</BaseText>
                        <BaseText>{product.description}</BaseText>
                        <BaseButton onClick={handleCart}>Comprar</BaseButton>
                    </Base>
                    <Base $width="fit-content" $alignItems="center" $gap={1.5}>
                        <BaseImage src={productImage ? productImage : shopImage} $width="24rem" $height="18rem"/>
                        <VendorCard vendorName={product.vendor.user.name} vendorImageUrl={profilePicture} />
                        <BaseText>Anunciado em: {format(new Date(product.announcedAt), "dd/MM/yyyy")}</BaseText>
                    </Base>
                </Base>
            </Base>
            {
            otherProducts.length > 0 ?
            <Base $borderRadius={12} $height="fit-content" $padding="4rem 2rem 16rem 2rem" $width="full" $gap={8} $zIndex={1} >
                <TextSeparator>Mais do mesmo vendedor:</TextSeparator>
                    <ProductsBase> 
                        {otherProducts.map(p => 
                            <Card 
                                key={p.id}
                                id={p.id}
                                name={p.name}
                                description={p.description}
                                price={p.price}
                                stock={p.stock}
                                vendor={p.vendor}
                                mini={true}
                                imageUrl=""
                            />)}
                    </ProductsBase>
            </Base> : ""
            }
            
            <Modal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirm}
            />
        </Base>
    )
}

export default ProductPage