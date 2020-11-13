import styled, { css } from 'styled-components'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

const variants = {
  purple: css`
    background: ${colors.primary};
    color: ${colors.light};

    &:disabled {
      opacity: 70%;
    }

    ${({ outlined }) =>
      outlined &&
      `
      color: ${colors.dark};
      background: ${colors.transparent};
      border: 2px solid ${colors.primary};
    `}
  `,
  blue: css`
    background: ${colors.tertiary};
    color: ${colors.light};

    &:disabled {
      opacity: 70%;
    }

    ${({ outlined }) =>
      outlined &&
      `
      color: ${colors.dark};
      background: ${colors.transparent};
      border: 2px solid ${colors.tertiary};
    `}
  `,
  light: css`
    background: ${colors.light};
    color: ${colors.dark};

    &:disabled {
      opacity: 70%;
    }
  `,
  gray: css`
    background: ${colors.gray};
    color: ${colors.dark};

    &:disabled {
      opacity: 70%;
    }

    ${({ outlined }) =>
      outlined &&
      `
      background: ${colors.transparent};
      border: 2px solid ${colors.gray};
    `}
  `,
}

export const ButtonStyle = styled.button`
  outline: 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  min-height: 40px;
  width: 100%;
  text-align: center;
  padding: 9px;
  font-size: 18px;
  line-height: 22px;
  font-family: ${fonts.ubuntuBold};

  &:focus,
  &:hover {
    outline: 0;
    transform: translateY(-2px);
  }

  ${({ variant }) => variants[variant]}
`
