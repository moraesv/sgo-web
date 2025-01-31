import styled from 'styled-components'
import colors from '../../utils/colors'

export const TextareaStyle = styled.textarea`
  outline: 0;
  min-height: 100px;
  padding: 9px;
  font-size: 16px;
  line-height: 22px;
  width: 100%;

  border: 2px solid ${colors.gray};
  border-radius: 5px;

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
