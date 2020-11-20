import React from 'react'
import PropTypes from 'prop-types'

import { BoxStyle } from './styles'

function Box(props) {
  return <BoxStyle {...props} />
}

Box.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

Box.defaultProps = {
  className: '',
  style: {},
}

export default Box
