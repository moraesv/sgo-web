import { Link } from 'react-router-dom'
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

    &:focus,
    &:hover {
      color: ${colors.light};
    }

    ${({ outlined }) =>
      outlined &&
      `
      color: ${colors.dark};
      background: ${colors.transparent};
      border: 2px solid ${colors.primary};

      &:focus,
      &:hover {
        color: ${colors.dark};
      }
    `}
  `,
  blue: css`
    background: ${colors.tertiary};
    color: ${colors.light};

    &:disabled {
      opacity: 70%;
    }

    &:focus,
    &:hover {
      color: ${colors.light};
    }

    ${({ outlined }) =>
      outlined &&
      `
      color: ${colors.dark};
      background: ${colors.transparent};
      border: 2px solid ${colors.tertiary};

      &:focus,
      &:hover {
        color: ${colors.dark};
      }
    `}
  `,
  light: css`
    background: ${colors.light};
    color: ${colors.dark};

    &:disabled {
      opacity: 70%;
    }

    &:focus,
    &:hover {
      color: ${colors.dark};
    }
  `,
  gray: css`
    background: ${colors.gray};
    color: ${colors.dark};

    &:disabled {
      opacity: 70%;
    }

    &:focus,
    &:hover {
      color: ${colors.dark};
    }

    ${({ outlined }) =>
      outlined &&
      `
      background: ${colors.transparent};
      border: 2px solid ${colors.gray};

      &:focus,
      &:hover {
        color: ${colors.dark};
      }
    `}
  `,
}

export const ButtonLinkStyle = styled(Link)`
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
    text-decoration: none;
  }

  ${({ variant }) => variants[variant]}
`
