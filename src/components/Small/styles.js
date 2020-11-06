import styled from 'styled-components'

export const SmallStyle = styled.small`
  margin: 0;
  font-family: ${({ font }) => font};
  font-size: 10px;
  color: ${({ color }) => color};
  line-height: 14px;
  min-height: 14px;
`
