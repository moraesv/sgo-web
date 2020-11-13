import React from 'react'
import PropTypes from 'prop-types'

import fonts from '../../utils/fonts'
import colors from '../../utils/colors'

import { LabelStyle } from './styles'

function Label(props) {
  return <LabelStyle {...props} />
}

Label.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  font: PropTypes.string,
  color: PropTypes.string,
}

Label.defaultProps = {
  className: '',
  style: {},
  font: fonts.ubuntuRegular,
  color: colors.dark,
}

export default Label
