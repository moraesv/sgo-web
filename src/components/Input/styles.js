import styled from 'styled-components'
import colors from '../../utils/colors'

export const InputStyle = styled.input`
  outline: 0;
  min-height: 40px;
  padding: 9px;
  font-size: 16px;
  line-height: 22px;
  width: 100%;

  border-bottom: 2px solid ${colors.gray};

  &.focus,
  &:focus,
  &:hover {
    border-color: ${colors.tertiary};
  }
  &.success {
    border-color: ${colors.success};
  }
  &.error {
    border-color: ${colors.danger};
  }

  &:disabled,
  &:disabled:hover {
    opacity: 0.8;
    color: ${colors.darkLight};
    background: ${colors.grayLight};
    border-color: ${colors.grayDark};
  }
`
