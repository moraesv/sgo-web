import React from 'react'
import PropTypes from 'prop-types'

import fonts from '../../utils/fonts'
import colors from '../../utils/colors'

import { PStyle } from './styles'

function P(props) {
  return <PStyle {...props} />
}

P.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  font: PropTypes.string,
  color: PropTypes.string,
}

P.defaultProps = {
  className: '',
  style: {},
  font: fonts.ubuntuRegular,
  color: colors.dark,
}

export default P
