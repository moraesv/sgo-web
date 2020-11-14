import styled from 'styled-components'
import colors from '../../utils/colors'

export const HeaderStyle = styled.div`
  height: 104px;
  border-bottom: 2px solid ${colors.dark};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ProfileButton = styled.button`
  height: 50px;
  min-width: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;

  width: fit-content;
`
