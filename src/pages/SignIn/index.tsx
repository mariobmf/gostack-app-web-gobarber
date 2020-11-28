import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';
import Input from '../../components/Input';

import { Container, Content, AnimationContainer, Background } from './styles';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>
            <Input name="email" icon={FiMail} />
            <Input name="password" icon={FiLock} />
            <Button type="submit">Entrar</Button>
            <a href="forgot">Esqueci minha senha</a>
          </Form>
          <a href="/signup">
            <FiLogIn />
            Criar Conta
          </a>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
