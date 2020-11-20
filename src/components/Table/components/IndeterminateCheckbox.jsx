import React, { forwardRef, useRef, useEffect } from 'react'
import Checkbox from '../../Checkbox'

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef()
  const resolvedRef = ref || defaultRef

  useEffect(() => {
    if (resolvedRef && resolvedRef.current) {
      resolvedRef.current.indeterminate = indeterminate
    }
  }, [resolvedRef, indeterminate])

  return (
    <Checkbox
      aria-label="Selecionar linha"
      innerRef={resolvedRef}
      dark
      {...rest}
    />
  )
})

export default IndeterminateCheckbox
