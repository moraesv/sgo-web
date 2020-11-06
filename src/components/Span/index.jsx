import React from 'react'
import PropTypes from 'prop-types'

import fonts from '../../utils/fonts'
import colors from '../../utils/colors'

import { SpanStyle } from './styles'

function Span(props) {
  return <SpanStyle {...props} />
}

Span.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  font: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  height: PropTypes.number,
}

Span.defaultProps = {
  className: '',
  style: {},
  font: fonts.ubuntuRegular,
  color: colors.dark,
  size: 16,
  height: 20,
}

export default Span
