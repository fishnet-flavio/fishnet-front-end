import { useParams } from "react-router"
import Base from "../../components/atom/Base"
import BaseInput from "../../components/atom/BaseInput"
import BaseText from "../../components/atom/BaseText"
import BaseButton from "../../components/atom/BaseButton"
import { SyntheticEvent } from "react"
import handleProductRegister from "./handleProductRegister"
import { z } from "zod"
import { useForm } from "react-hook-form"

const ProductRegisterPage = () => {
    const params = useParams()

    const { register } = useForm();

    const productFormSchema = z.object({
        name: z
        .string()
        .min(1, "Nome não pode ser vazio"),

        price: z
        .number()
        .positive("Preço não pode ser um valor negativo"),

        description: z
        .string()
        .min(1, "Descrição não pode ser vazia"),

        stock: z
        .number()
        .nonnegative("Estoque não pode ser um valor negativo")
    });

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const vendorId = params.vendorId
    }


    return (
        <Base $alignItems="center" $background="transparent">
            <Base $borderRadius={12} $gap={2} $alignItems="center" $padding="1rem 2rem" $width="40%">
                <BaseText $fontSize={24} $fontWeight="bold">Registro de Produto</BaseText>
                <form onSubmit={handleSubmit}>
                    <label>
                        <BaseText>Nome: </BaseText>
                    </label>
                        <BaseInput $width="90%" $margin=".5rem 0" placeholder="Nome do produto" {...register("name")}/>
                    <label>
                        <BaseText>Preço: </BaseText>
                    </label>
                        <BaseInput $width="90%" $margin=".5rem 0" type="number" placeholder="Preço do produto" {...register("price")}/>
                    <label>
                        <BaseText>Descrição: </BaseText>
                    </label>
                        <BaseInput $width="90%" $margin=".5rem 0" placeholder="Descrição do produto" {...register("description")}/>
                    <label>
                        <BaseText>Estoque: </BaseText>
                    </label>
                        <BaseInput $width="90%" $margin=".5rem 0" type="number" placeholder="Estoque" {...register("stock")}/>
                    <label>
                        <BaseText>Imagem: </BaseText>
                        <BaseInput $width="90%" $margin=".5rem 0" type="file" accept="image/png, image/jpeg" {...register("image")}/>
                    </label>
                    <BaseButton type="submit">Enviar</BaseButton>
                </form>
            </Base>
        </Base>
    )
}

export default ProductRegisterPage