import styled from 'styled-components'

export const SpanStyle = styled.span`
  margin: 0;
  font-family: ${({ font }) => font};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => color};
  line-height: ${({ height }) => `${height}px`};
  min-height: ${({ height }) => `${height}px`};
`
