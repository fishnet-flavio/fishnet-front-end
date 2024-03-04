import { useParams } from "react-router"
import Base from "../../components/atom/Base"
import BaseInput from "../../components/atom/BaseInput"
import BaseText from "../../components/atom/BaseText"
import BaseButton from "../../components/atom/BaseButton"
import { SyntheticEvent } from "react"
import handleProductRegister from "./handleProductRegister"
import { z } from "zod"

const ProductRegisterPage = () => {
    const params = useParams()

    const createProductFormSchema = z.object({
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
            <Base $boxShadow $borderRadius={12} $gap={2} $alignItems="center" $padding="1rem 2rem" $width="max-content">
                <BaseText $fontSize={24} $fontWeight="bold">Registro de Produto</BaseText>
                <form onSubmit={handleSubmit}>
                    <label>
                        <BaseText>Nome do produto: </BaseText>
                    </label>
                        <BaseInput $width="90%" placeholder="Nome do produto"/>
                    <label>
                        <BaseText>Preço do produto: </BaseText>
                    </label>
                        <BaseInput $width="90%" type="number" placeholder="Preço do produto"/>
                    <label>
                        <BaseText>Descrição do produto: </BaseText>
                    </label>
                        <BaseInput $width="90%" placeholder="Descrição do produto"/>
                    <label>
                        <BaseText>Estoque: </BaseText>
                    </label>
                        <BaseInput $width="90%" type="number" placeholder="Estoque"/>
                    <label>
                        <BaseText>Imagem do Produto: </BaseText>
                        <BaseInput $width="90%" type="file" accept="image/png, image/jpeg"/>
                    </label>
                    <BaseButton type="submit"><BaseText $color="#fff" $fontWeight="bold" $fontSize={24}>Enviar</BaseText></BaseButton>
                </form>
            </Base>
        </Base>
    )
}

export default ProductRegisterPage