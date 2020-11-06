import styled from 'styled-components'

export const H2Style = styled.h2`
  margin: 0;
  font-family: ${({ font }) => font};
  font-size: 30px;
  color: ${({ color }) => color};
  line-height: 34px;
  min-height: 34px;
`
