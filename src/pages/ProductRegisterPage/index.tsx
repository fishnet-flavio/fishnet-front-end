import { useParams } from "react-router"
import Base from "../../components/atom/Base"
import BaseInput from "../../components/atom/BaseInput"
import BaseText from "../../components/atom/BaseText"
import BaseButton from "../../components/atom/BaseButton"

const ProductRegisterPage = () => {
    const params = useParams()

    return (
        <Base $alignItems="center" $background="transparent">
            <Base $boxShadow $borderRadius={12} $gap={2} $alignItems="center" $padding="1rem 2rem" $width="max-content">
                <BaseText $fontSize={24} $fontWeight="bold">Registro de Produto</BaseText>
                <form>
                    <label>
                        <BaseText>Nome do produto: </BaseText>
                        <BaseInput $width="90%" placeholder="Nome do produto"/>
                    </label>
                    <label>
                        <BaseText>Preço do produto: </BaseText>
                        <BaseInput $width="90%" type="number" placeholder="Preço do produto"/>
                    </label>
                    <label>
                        <BaseText>Descrição do produto: </BaseText>
                        <BaseInput $width="90%" placeholder="Descrição do produto"/>
                    </label>
                    <label>
                        <BaseText>Estoque: </BaseText>
                        <BaseInput $width="90%" type="number" placeholder="Estoque"/>
                    </label>
                    <label>
                        <BaseText>Imagem do Produto: </BaseText>
                        <BaseInput $width="90%" type="file" placeholder="Imagem" accept="image/png, image/jpeg"/>
                    </label>
                    <BaseButton type="submit"><BaseText $color="#fff" $fontWeight="bold" $fontSize={24}>Enviar</BaseText></BaseButton>
                </form>
            </Base>
        </Base>
    )
}

export default ProductRegisterPage