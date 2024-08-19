import { FormEvent, useState } from "react";
import Base from "../../atom/Base"
import BaseInput from "../../atom/BaseInput";
import BaseText from "../../atom/BaseText"
import BaseButton from "../../atom/BaseButton";
import { Link } from "react-router-dom";
import BaseImage from "../../atom/BaseImage";
import logo from "../../../assets/fishnet-logo.png";

const SignInCard = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleRegister = (event: FormEvent) => {
        event.preventDefault()
    }

    const clickSendFile = () =>{
        document.getElementById("findArchiveButton")?.click();
    }

    return (
        <form>
            <Base $width="26rem" $alignItems="center" $borderRadius={16} $padding="2rem" $gap={2} >
                <Link to="/">
                    <BaseImage src={logo} $width="12rem" $height="10rem" />
                </Link>
                <BaseText $fontSize={24} $fontWeight="bold">Registre-se</BaseText>
                <Base $flexDirection="row" $gap={2} $alignItems="center" $justifyContent="space-between">
                    <BaseText $fontSize={20} >Nome: </BaseText>
                    <BaseInput $width="17.5rem" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Nome de usuário" />
                </Base>
                <Base $flexDirection="row" $gap={2} $alignItems="center" $justifyContent="space-between">
                    <BaseText $fontSize={20} style={{justifySelf: "start", backgroundColor:""}}>Email: </BaseText>
                    <BaseInput $width="17.5rem"  value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                </Base>
                <Base $flexDirection="row" $gap={2} $alignItems="center" $justifyContent="space-between">
                    <BaseText $fontSize={20}>Senha: </BaseText>
                    <BaseInput $width="17.5rem" placeholder="Senha" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </Base>

                <Base $flexDirection="row" $gap={2} $alignItems="center">
                    <BaseText $fontSize={20} >Icone: </BaseText>
                    <BaseButton $width="17.5rem" $height="3rem" $background="#fff" $color="#000" $border="2px solid #ffaaff" $padding="1rem 1 rem" type="button" onClick={clickSendFile}>Enviar Arquivo</BaseButton>
                    <BaseInput id="findArchiveButton" type="file" hidden />
                </Base>
                <Base $flexDirection="row" $gap={2} $alignItems="center">
                    <BaseText $fontSize={20}>Vendedor: </BaseText>
                    <BaseInput type="checkbox"/>
                </Base>
                <Base $flexDirection="row" $gap={1} $justifyContent="center">
                    <BaseText>Já possui uma conta?</BaseText>
                    <Link to="/login">
                        <BaseText $fontWeight="bold">Logue aqui</BaseText>
                    </Link>
                </Base>
                <BaseButton type="submit" onSubmit={(event) => {handleRegister(event)}}>Enviar</BaseButton>
            </Base>
        </form>
    )
}

export default SignInCard