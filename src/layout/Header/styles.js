import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/colors'

export const HeaderStyle = styled.div`
  height: 102px;
  border-bottom: 2px solid ${colors.dark};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ProfileButton = styled(Link)`
  height: 50px;
  min-width: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  color: ${colors.dark};
  width: fit-content;

  &:hover {
    color: ${colors.dark};
    text-decoration: none;
  }
`
