import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/colors'

import MenuIcon from '../../assets/icons/menu.svg'

export const SidebarStyle = styled.div`
  background: ${colors.primary};
  width: ${({ isOpen }) => (isOpen ? '270px' : '90px')};
  top: 0;
  color: ${colors.light};

  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
`

export const SidebarHeaderStyle = styled.div`
  background: ${colors.primary};
  height: 102px;
  width: 100%;
  color: ${colors.light};
  border-bottom: 2px solid ${colors.light};
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 5px;
`

export const LogoStyle = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 24px;
`

export const SidebarContentStyle = styled.div`
  position: relative;
  height: calc(100% - 102px);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SideBarButtonStyle = styled.button`
  height: 40px;
  width: 40px;
  margin-top: 24px;
  position: absolute;
  top: 25px;
  right: -20px;
  background: ${colors.light};
  border: 2px solid ${colors.primaryLight};
  border-radius: 50%;
  background-image: url(${MenuIcon});
  background-position: center center;
  background-repeat: no-repeat;
`

export const LinkStyle = styled(Link)`
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${colors.light};
  font-size: 18px;

  &:hover {
    color: ${colors.light};
    text-decoration: none;
  }
`
