import React from 'react'
import PropTypes from 'prop-types'

import { SelectStyle } from './styles'

function Select(props) {
  return <SelectStyle {...props} />
}

Select.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}

Select.defaultProps = {
  className: '',
  style: {},
}

export default Select
