import React from 'react'
import PropTypes from 'prop-types'

import fonts from '../../utils/fonts'
import colors from '../../utils/colors'

import { H1Style } from './styles'

function H1(props) {
  return <H1Style {...props} />
}

H1.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  font: PropTypes.string,
  color: PropTypes.string,
}

H1.defaultProps = {
  className: '',
  style: {},
  font: fonts.ubuntuRegular,
  color: colors.dark,
}

export default H1
