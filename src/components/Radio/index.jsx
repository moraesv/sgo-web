import React from 'react'
import PropTypes from 'prop-types'

import { RadioStyle } from './styles'

function Radio({ id, className, style, label, ...props }) {
  return (
    <RadioStyle style={style} className={className}>
      <input {...props} id={id} type="radio" />
      <label htmlFor={id}>{label}</label>
    </RadioStyle>
  )
}

Radio.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  label: PropTypes.string,
}

Radio.defaultProps = {
  className: '',
  style: {},
  label: '',
}

export default Radio
