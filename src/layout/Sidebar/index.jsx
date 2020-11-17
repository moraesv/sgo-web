import React, { useRef, useState } from 'react'

import {
  LogoStyle,
  SidebarHeaderStyle,
  SidebarStyle,
  SideBarButtonStyle,
  SidebarContentStyle,
  LinkStyle,
} from './styles'
import Logo from '../../assets/images/logo-guarda.png'
import { H2, H5 } from '../../components'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
import useOutsideClick from '../../hooks/useOutsideClick'

import DashboardIcon from '../../assets/icons/dash.svg'
import ChartIcon from '../../assets/icons/chart.svg'
import DescriptionIcon from '../../assets/icons/description.svg'
import OutIcon from '../../assets/icons/out.svg'
import PasteIcon from '../../assets/icons/paste.svg'
import AddIcon from '../../assets/icons/add.svg'

function SidebarLink({ isOpen, icon, children, ...props }) {
  return (
    <LinkStyle {...props} className="mt-2">
      <img src={icon} alt="" className="mr-1" />
      {children}
    </LinkStyle>
  )
}

function Sidebar() {
  const [isOpen, setOpen] = useState(false)
  const sidebarRef = useRef(null)

  useOutsideClick(sidebarRef, () => setOpen(false))

  return (
    <SidebarStyle isOpen={isOpen} ref={sidebarRef}>
      <SidebarHeaderStyle>
        <LogoStyle src={Logo} alt="" />
        {isOpen ? (
          <div className="ml-1 ">
            <H2 color={colors.light} font={fonts.ubuntuBold} className="mt-3">
              SGO
            </H2>
            <H5 color={colors.light} font={fonts.ubuntuBold}>
              Sistema de Gerenciamento de Ocorrências
            </H5>
          </div>
        ) : null}
      </SidebarHeaderStyle>
      <SidebarContentStyle>
        <SideBarButtonStyle onClick={() => setOpen(!isOpen)} type="button" />

        <div>
          <SidebarLink icon={DashboardIcon} to="/avisos">
            Avisos
          </SidebarLink>
          <SidebarLink icon={AddIcon} to="/cadastros">
            Cadastros
          </SidebarLink>
          <SidebarLink icon={DescriptionIcon} to="/registros">
            Registros
          </SidebarLink>
          <SidebarLink icon={PasteIcon} to="/relatorios">
            Relatórios
          </SidebarLink>
          <SidebarLink icon={ChartIcon} to="/estatisticas">
            Estatísticas
          </SidebarLink>
        </div>
        <div>
          <SidebarLink icon={OutIcon} to="/login">
            Sair
          </SidebarLink>
        </div>
      </SidebarContentStyle>
    </SidebarStyle>
  )
}

export default Sidebar
