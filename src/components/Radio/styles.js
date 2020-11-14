import styled from 'styled-components'
import colors from '../../utils/colors'

import RadioSelect from '../../assets/images/radio-select.png'

export const RadioStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  height: 40px;

  input {
    -webkit-appearance: none;
    width: 40px;
    height: 40px;
    flex-shrink: 0;

    border: 2px solid ${colors.gray};
    border-radius: 50%;
  }
  label {
    font-size: 16px;
    line-height: 20px;
    min-height: 20px;
    margin-bottom: 0px;
    margin-left: 10px;
  }

  input:focus,
  input:hover {
    border-color: ${colors.tertiary};
  }

  input:checked {
    border-color: ${colors.tertiary};
    background: ${colors.tertiaryLight};
    background-image: url(${RadioSelect});
    background-repeat: no-repeat;
    background-position: center center;
  }

  &.focus {
    input {
      border-color: ${colors.tertiary};
    }
  }
  &.success {
    input {
      border-color: ${colors.success};
    }
  }
  &.error {
    input {
      border-color: ${colors.danger};
    }
  }

  input:disabled,
  input:disabled:hover {
    background: ${colors.grayLight};
    border-color: ${colors.grayDark};
  }
  input:disabled:checked {
    background: ${colors.grayLight};
    border-color: ${colors.grayDark};
    background-image: url(${RadioSelect});
    background-repeat: no-repeat;
    background-position: center center;
  }
`
