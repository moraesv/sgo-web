import React from 'react'
import PropTypes from 'prop-types'

import fonts from '../../utils/fonts'
import colors from '../../utils/colors'

import { H3Style } from './styles'

function H3(props) {
  return <H3Style {...props} />
}

H3.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  font: PropTypes.string,
  color: PropTypes.string,
}

H3.defaultProps = {
  className: '',
  style: {},
  font: fonts.ubuntuRegular,
  color: colors.dark,
}

export default H3
