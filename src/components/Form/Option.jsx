import React from 'react'

const Option = ({children, ...rest}) => {
  return (
    <option {...rest}>{children}</option>
  )
}

export default Option
