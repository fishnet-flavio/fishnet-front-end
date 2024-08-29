import { redirect, useParams } from "react-router"
import Base from "../../components/atom/Base"
import BaseInput from "../../components/atom/BaseInput"
import BaseText from "../../components/atom/BaseText"
import BaseButton from "../../components/atom/BaseButton"
import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react"
import {FormEvent} from "react";
import getProfile from "../UserProfilePage/getProfile"
import handleProductRegister from "./handleProductRegister"

interface User {
    id: number;
    username: string;
    email: string;
    vendor?: Vendor;
}

interface Vendor {
    id: number;
    rating: number;
}

const ProductRegisterPage = () => {
    const params = useParams()

    const [user, setUser] = useState<User | null>(null);

    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [stock, setStock] = useState<number>(0);
    const [image, setImage] = useState<File | null>(null);

    useEffect(() => {
        const getUser = async () => {
            const fUser = await getProfile();
            if (!fUser.vendor) {
                redirect("/");
            }
            setUser(fUser);
        }
        getUser();
    }, [])

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        if (!user) {
            redirect("/login");
            return;
        }

        const form = new FormData();
        form.append("price", price);
        form.append("name", name);
        form.append("stock", stock.toString());
        form.append("description", description);
        if (image) {
            form.append("image", image);
        }
        form.append("vendorId", user.id.toString());
        console.log(Object.fromEntries(form));

        const submitProduct = await handleProductRegister(form);
        if (submitProduct) {
            redirect("/");
        }
    }
    const clickSendFile = (event: FormEvent) =>{
        event.preventDefault();
        document.getElementById("findArchiveButton")?.click();
    }

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^[0-9]*[.,]?[0-9]*$/.test(value)) {
            setPrice(value.replace(",", "."));
        }
    };

    const handleImage = (e : ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    return (
        <Base $alignItems="center" $background="transparent">
            <Base $borderRadius={12} $gap={2} $alignItems="center" $padding="1rem 2rem" $width="40%">
                <BaseText $fontSize={24} $fontWeight="bold">Registro de Produto</BaseText>
                <form onSubmit={handleSubmit}>
                    <label>
                        <BaseText>Nome: </BaseText>
                    </label>
                        <BaseInput $width="90%" $margin=".5rem 0" placeholder="Nome do produto" onChange={(e) => setName(e.target.value)}/>
                    <label>
                        <BaseText>Preço: </BaseText>
                    </label>
                        <BaseInput $width="90%" $margin=".5rem 0" inputMode="decimal" placeholder="Preço do produto" onChange={handlePriceChange}/>
                    <label>
                        <BaseText>Descrição: </BaseText>
                    </label>
                        <BaseInput $width="90%" $margin=".5rem 0" placeholder="Descrição do produto" onChange={(e) => setDescription(e.target.value)}/>
                    <label>
                        <BaseText>Estoque: </BaseText>
                    </label>
                        <BaseInput $width="90%" $margin=".5rem 0" type="number" placeholder="Estoque" onChange={(e) => setStock(Number(e.target.value))}/>
                    <label>
                        <Base $flexDirection="row" $gap={2} $alignItems="center" $justifyContent="space-between">
                            <BaseText $fontSize={20} >Icone: </BaseText>
                            <BaseButton $width="19.7rem" $height="3rem" $background="#fff" $color="#000" $border="2px solid #ffaaff" type="button" onClick={clickSendFile}>Escolher Imagem</BaseButton>
                            <BaseInput id="findArchiveButton" type="file" hidden onChange={handleImage} />
                        </Base>
                    </label>
                    <BaseButton type="submit" $padding="50px">Enviar</BaseButton>
                </form>
            </Base>
        </Base>
    )
}

export default ProductRegisterPage