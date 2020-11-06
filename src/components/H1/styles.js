import styled from 'styled-components'

export const H1Style = styled.h1`
  margin: 0;
  font-family: ${({ font }) => font};
  font-size: 36px;
  color: ${({ color }) => color};
  line-height: 40px;
  min-height: 40px;
`
