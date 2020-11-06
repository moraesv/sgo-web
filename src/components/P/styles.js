import styled from 'styled-components'

export const PStyle = styled.p`
  margin: 0;
  font-family: ${({ font }) => font};
  font-size: 16px;
  color: ${({ color }) => color};
  line-height: 20px;
  min-height: 20px;
`
