import React from 'react'
import PropTypes from 'prop-types'

import { CheckboxStyle } from './styles'

function Checkbox({ id, className, style, label, ...props }) {
  return (
    <CheckboxStyle style={style} className={className}>
      <input {...props} id={id} type="checkbox" />
      <label htmlFor={id}>{label}</label>
    </CheckboxStyle>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
}

Checkbox.defaultProps = {
  className: '',
  style: {},
  label: '',
}

export default Checkbox
