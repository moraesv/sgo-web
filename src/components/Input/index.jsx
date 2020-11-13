import React from 'react'
import PropTypes from 'prop-types'

import { InputStyle } from './styles'

function Input(props) {
  return <InputStyle {...props} />
}

Input.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

Input.defaultProps = {
  className: '',
  style: {},
}

export default Input
