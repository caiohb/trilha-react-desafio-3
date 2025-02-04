import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPersonPin } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, SubtitleDoLogin, SubtitleDoLogin2, RowDown, CriarText, Row, Wrapper } from './styles';

const Register = () => {

    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            navigate('/feed')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPersonPin />} name="nome"  control={control} />
                    {errors.nome && <span>Nome completo é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <SubtitleDoLogin>
                        Ao clicar em "criar minha conta grátis", declaro que aceitos as Políticas de Privacidade e os Termos
                        de Uso da DIO.
                    </SubtitleDoLogin>
                </Row>
                <RowDown>
                    <SubtitleDoLogin2>já tenho conta.</SubtitleDoLogin2>
                    <CriarText  onClick={handleClickSignIn}>Fazer login</CriarText>
                </RowDown>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Register }