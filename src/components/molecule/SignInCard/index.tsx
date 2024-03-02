import { FormEvent, useState } from "react";
import Base from "../../atom/Base"
import BaseInput from "../../atom/BaseInput";
import BaseText from "../../atom/BaseText"
import BaseButton from "../../atom/BaseButton";
import { Link } from "react-router-dom";

const SignInCard = () => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleRegister = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <form>
            <Base $width="26rem" $alignItems="center" $borderRadius={16} $padding="2rem" $gap={2} $boxShadow>
                <BaseText $fontSize={24} $fontWeight="bold">Registre-se</BaseText>
                <Base $flexDirection="row" $gap={2} $alignItems="center">
                    <BaseText $fontSize={20} >Nome: </BaseText>
                    <BaseInput $width="100%" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Nome de usuário" />
                </Base>
                <Base $flexDirection="row" $gap={2} $alignItems="center">
                    <BaseText $fontSize={20} >Email: </BaseText>
                    <BaseInput $width="100%" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                </Base>
                <Base $flexDirection="row" $gap={2} $alignItems="center">
                    <BaseText $fontSize={20}>Senha: </BaseText>
                    <BaseInput $width="100%" placeholder="Senha" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </Base>
                <Base $flexDirection="row" $gap={2} $alignItems="center">
                    <BaseText $fontSize={20} >Icone: </BaseText>
                    <BaseInput type="file" />
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
                <BaseButton type="submit" onSubmit={(event) => {handleRegister(event)}}><BaseText $userSelect="none" $color="#fff" $fontSize={24} $fontWeight="bold">Enviar</BaseText></BaseButton>
            </Base>
        </form>
    )
}

export default SignInCard