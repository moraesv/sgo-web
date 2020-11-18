import React from 'react'
import PropTypes from 'prop-types'

import fonts from '../../utils/fonts'
import colors from '../../utils/colors'

import { AddIconStyle, PagelinkStyle } from './styles'

import AddIcon from '../../assets/icons/add-yellow.svg'

function Pagelink({ children, ...props }) {
  return (
    <PagelinkStyle {...props}>
      {children}
      <AddIconStyle src={AddIcon} alt="" />
    </PagelinkStyle>
  )
}

Pagelink.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  font: PropTypes.string,
  color: PropTypes.string,
}

Pagelink.defaultProps = {
  className: '',
  style: {},
  font: fonts.ubuntuRegular,
  color: colors.dark,
}

export default Pagelink
