import { Link } from "react-router-dom"
import Base from "../../atom/Base"
import BaseButton from "../../atom/BaseButton"
import BaseInput from "../../atom/BaseInput"
import BaseText from "../../atom/BaseText"
import { FormEvent, useState } from "react"
import logo from "../../../assets/fishnet-logo.png"
import BaseImage from "../../atom/BaseImage"

const LoginCard = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <form>
            <Base $width="26rem" $alignItems="center" $borderRadius={16} $padding="2rem" $gap={2} >
                <Link to="/">
                        <BaseImage src={logo} $width="12rem" $height="10rem" />
                </Link>
                <BaseText $fontSize={24} $fontWeight="bold">Login</BaseText>
                <Base $flexDirection="row" $gap={2} $alignItems="center" $justifyContent="space-between">
                    <BaseText $fontSize={20} >Email: </BaseText>
                    <BaseInput $width="17.5rem" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                </Base>
                <Base $flexDirection="row" $gap={2} $alignItems="center" $justifyContent="space-between">
                    <BaseText $fontSize={20}>Senha: </BaseText>
                    <BaseInput $width="17.5rem" placeholder="Senha" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </Base>
                <Base $flexDirection="row" $gap={1} $justifyContent="center">
                    <BaseText>Não possui conta?</BaseText>
                    <Link to="/signin">
                        <BaseText $fontWeight="bold">Crie aqui</BaseText>
                    </Link>
                </Base>
                <BaseButton type="submit" onSubmit={(event) => {handleLogin(event)}}>Enviar</BaseButton>
            </Base>
        </form>
    )
}

export default LoginCard