import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/colors'

export const PagelinkStyle = styled(Link)`
  position: relative;
  display: flex;
  background: ${colors.primary};
  color: ${colors.white};
  font-size: 24px;
  line-height: 28px;
  height: 160px;
  width: 160px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;

  &:hover {
    color: ${colors.white};
    text-decoration: none;
  }
`

export const AddIconStyle = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
`
