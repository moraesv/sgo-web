import React from 'react'
import PropTypes from 'prop-types'

import fonts from '../../utils/fonts'
import colors from '../../utils/colors'

import { H6Style } from './styles'

function H6(props) {
  return <H6Style {...props} />
}

H6.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  font: PropTypes.string,
  color: PropTypes.string,
}

H6.defaultProps = {
  className: '',
  style: {},
  font: fonts.ubuntuRegular,
  color: colors.dark,
}

export default H6
