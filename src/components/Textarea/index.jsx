import React from 'react'
import PropTypes from 'prop-types'

import { TextareaStyle } from './styles'

function Textarea(props) {
  return <TextareaStyle {...props} />
}

Textarea.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

Textarea.defaultProps = {
  className: '',
  style: {},
}

export default Textarea
