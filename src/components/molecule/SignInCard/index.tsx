import { FormEvent, useState, MouseEvent, ChangeEvent  } from "react";
import Base from "../../atom/Base"
import BaseInput from "../../atom/BaseInput";
import BaseText from "../../atom/BaseText"
import BaseButton from "../../atom/BaseButton";
import { Link, useNavigate } from "react-router-dom";
import BaseImage from "../../atom/BaseImage";
import logo from "../../../assets/fishnet-logo.png";
import handleUserRegister from "./handleUserRegister";

const SignInCard = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [selectedButton, setSelectedButton] = useState<string>("");

    const navigate = useNavigate()

    const handleRegister = async (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", username);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("isVendor", selectedButton === "vendedor" ? "true" : "false");

        if (image) {
            formData.append("profilePicture", image);
        }

        const register = await handleUserRegister(formData);
        if (register) {
            navigate("/login");
        }
    };

    const handleImage = (e : ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const clickSendFile = (event: FormEvent) =>{
        event.preventDefault();
        document.getElementById("findArchiveButton")?.click();
    }
    const changeSelectedButton=(buttonType: 'vendedor' | 'cliente',  event: MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        setSelectedButton(buttonType)
    }

    return (
        <form onSubmit={handleRegister}>
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

                <Base $flexDirection="row" $gap={2} $alignItems="center" $justifyContent="space-between">
                    <BaseText $fontSize={20} >Icone: </BaseText>
                    <BaseButton $width="19.7rem" $height="3rem" $background="#fff" $color="#000" $border="2px solid #ffaaff" type="button" onClick={clickSendFile}>Enviar Arquivo</BaseButton>
                    <BaseInput id="findArchiveButton" type="file" hidden onChange={handleImage} />
                </Base>

                <Base $flexDirection="row" $gap={0} $alignItems="center">
                    <BaseButton $width="50%" $height="3rem" $background="#fff" $selected={selectedButton==='vendedor'} $color="#000" $border="1" $borderRadius="12px 0px 0px 12px" $padding="0" onClick={(event) => changeSelectedButton('vendedor', event)}>Vendedor</BaseButton>
                    <BaseButton $width="50%" $height="3rem" $background="#fff" $selected={selectedButton==='cliente'} $color="#000" $border="1" $padding="0" $borderRadius="0px 12px 12px 0px" onClick={(event) => changeSelectedButton('cliente', event)}>Cliente</BaseButton>
                </Base>

                <Base $flexDirection="row" $gap={1} $justifyContent="center">
                    <BaseText>Já possui uma conta?</BaseText>
                    <Link to="/login">
                        <BaseText $fontWeight="bold">Logue aqui</BaseText>
                    </Link>
                </Base>
                <BaseButton type="submit">Enviar</BaseButton>
            </Base>
        </form>
    )
}

export default SignInCard