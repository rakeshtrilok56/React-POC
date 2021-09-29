import React from 'react'
import ComponentD from './ComponentD'
const ComponentC = React.forwardRef((props, ref) => {

    return (
        <ComponentD ref={ref} />
    )
})
export default ComponentC