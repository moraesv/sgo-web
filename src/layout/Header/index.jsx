import React, { useCallback, useEffect } from 'react'

import { Container } from 'reactstrap'

import { H1 } from '../../components'
import fonts from '../../utils/fonts'

import Avatar from '../../assets/images/avatar.png'

import { HeaderStyle, ProfileButton } from './styles'
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector'
import { getProfile } from './services/requests'
import { setProfile } from '../../store/profile/actions'

function Header({ pageName, ...props }) {
  const profile = useShallowEqualSelector((state) => state.profile.profile)

  const loadProfile = useCallback(async () => {
    const response = await getProfile()

    setProfile(response)
  }, [])

  useEffect(() => {
    if (!profile) {
      loadProfile()
    }
  }, [profile, loadProfile])

  return (
    <Container>
      <HeaderStyle {...props}>
        <H1 font={fonts.ubuntuBold}>{pageName}</H1>
        <ProfileButton to="/perfil">
          <img src={Avatar} alt="avatar" />
          {profile ? profile.nomeOficial : ''}
        </ProfileButton>
      </HeaderStyle>
    </Container>
  )
}

export default Header
