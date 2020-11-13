import React from 'react'
import PropTypes from 'prop-types'

/* import fonts from '../../utils/fonts'
import colors from '../../utils/colors' */

import { ButtonStyle } from './styles'

function Button(props) {
  return <ButtonStyle {...props} />
}

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  outlined: PropTypes.bool,
  variant: PropTypes.oneOf(['purple', 'blue', 'light', 'gray']),
}

Button.defaultProps = {
  className: '',
  style: {},
  outlined: false,
  variant: 'purple',
}

export default Button
