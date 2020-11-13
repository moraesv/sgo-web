import styled from 'styled-components'

export const LabelStyle = styled.label`
  margin: 0;
  font-family: ${({ font }) => font};
  font-size: 18px;
  color: ${({ color }) => color};
  line-height: 22px;
  min-height: 22px;
  margin-bottom: 5px;
`
