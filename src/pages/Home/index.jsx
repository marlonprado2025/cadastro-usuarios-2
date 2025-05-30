
import api from '../../services/api'
import { useRef } from 'react'

import { Container, ToBackground, Form, Title, Input, ContainerInput, Button, InputLabel } from './style';

import UsersImage from '../../assets/users.png';

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function registerNewUser() {
   const data = await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),//usada para converter uma string em um número inteiro.
      email: inputEmail.current.value
    })
    console.log(data)
  }

  return (
    <Container>
      <ToBackground>
        <img src={UsersImage} alt='Users-image' />
      </ToBackground>
      <Form>
        <Title> Cadastro de Usuários </Title>=
        <ContainerInput>

          <div>
            <InputLabel> Nome<span> * </span></InputLabel>
            <Input type='text' placeholder='Nome' ref={inputName} />
          </div>

          <div>
            <InputLabel> Idade<span> * </span></InputLabel>
            <Input type='number' placeholder='Idade' ref={inputAge} />
          </div>

        </ContainerInput>

        <div style={{ width: '100%' }}>
          <InputLabel> E-mail<span> * </span></InputLabel>
          <Input type='email' placeholder='Email' ref={inputEmail} />
        </div>

        <Button type='button' onClick={registerNewUser}>Cadastrar Usuários</Button>

      </Form>
    </Container>
  )
}

export default Home
