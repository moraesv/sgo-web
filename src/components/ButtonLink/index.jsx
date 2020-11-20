import React from 'react'
import PropTypes from 'prop-types'

/* import fonts from '../../utils/fonts'
import colors from '../../utils/colors' */

import { ButtonLinkStyle } from './styles'

function ButtonLink(props) {
  return <ButtonLinkStyle {...props} outlined={props.outlined ? 'true' : ''} />
}

ButtonLink.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  outlined: PropTypes.bool,
  variant: PropTypes.oneOf(['purple', 'blue', 'light', 'gray']),
}

ButtonLink.defaultProps = {
  className: '',
  style: {},
  outlined: false,
  variant: 'purple',
  type: 'button',
}

export default ButtonLink
