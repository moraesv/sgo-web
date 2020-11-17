import React, { useState } from 'react'
import { Container } from 'reactstrap'
import { Button, Input, Label } from '../../components'
import login from './services/requests'
import { LoginContainer } from './styles'

import Logo from '../../assets/images/logo-guarda.png'

function Login({ history }) {
  const [nomeUsuario, setNomeUsuario] = useState('')
  const [senha, setSenha] = useState('')

  async function submit(e) {
    e.preventDefault()
    const response = await login({ nomeUsuario, senha })

    if (response) {
      history.push('/avisos')
    }
  }
  return (
    <>
      <Container>
        <LoginContainer>
          <form onSubmit={submit}>
            <img src={Logo} alt="logo" />
            <div className="mt-5" style={{ maxWidth: '250px' }}>
              <Label>Login</Label>
              <Input
                value={nomeUsuario}
                onChange={(e) => setNomeUsuario(e.target.value)}
                placeholder="Nome de usuário"
              />
            </div>
            <div className="mt-4" style={{ maxWidth: '250px' }}>
              <Label>Senha</Label>
              <Input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Senha"
              />
            </div>
            <div className="mt-5">
              <Button style={{ minWidth: '200px' }} onClick={submit}>
                Entrar
              </Button>
            </div>
          </form>
        </LoginContainer>
      </Container>
    </>
  )
}

export default Login
