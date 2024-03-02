import { Link } from "react-router-dom"
import Base from "../../atom/Base"
import BaseButton from "../../atom/BaseButton"
import BaseInput from "../../atom/BaseInput"
import BaseText from "../../atom/BaseText"
import { FormEvent, useState } from "react"

const LoginCard = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <form>
            <Base $width="26rem" $alignItems="center" $borderRadius={16} $padding="2rem" $gap={2} $boxShadow>
                <BaseText $fontSize={24} $fontWeight="bold">Login</BaseText>
                <Base $flexDirection="row" $gap={2} $alignItems="center">
                    <BaseText $fontSize={20} >Email: </BaseText>
                    <BaseInput $width="100%" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Nome de email" />
                </Base>
                <Base $flexDirection="row" $gap={2} $alignItems="center">
                    <BaseText $fontSize={20}>Senha: </BaseText>
                    <BaseInput $width="100%" placeholder="Senha" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </Base>
                <Base $flexDirection="row" $gap={1} $justifyContent="center">
                    <BaseText>Não possui conta?</BaseText>
                    <Link to="/signin">
                        <BaseText $fontWeight="bold">Crie aqui</BaseText>
                    </Link>
                </Base>
                <BaseButton type="submit" onSubmit={(event) => {handleLogin(event)}}><BaseText $userSelect="none" $color="#fff" $fontSize={24} $fontWeight="bold">Enviar</BaseText></BaseButton>
            </Base>
        </form>
    )
}

export default LoginCard