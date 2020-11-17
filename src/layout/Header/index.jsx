import React from 'react'

import { Container } from 'reactstrap'

import { H1 } from '../../components'
import fonts from '../../utils/fonts'

import Avatar from '../../assets/images/avatar.png'

import { HeaderStyle, ProfileButton } from './styles'

function Header({ pageName, ...props }) {
  return (
    <Container>
      <HeaderStyle {...props}>
        <H1 font={fonts.ubuntuBold}>{pageName}</H1>
        <ProfileButton to="/perfil">
          <img src={Avatar} alt="avatar" />
          Nome
        </ProfileButton>
      </HeaderStyle>
    </Container>
  )
}

export default Header
