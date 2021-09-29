import React from 'react'
const ComponentD = React.forwardRef((props, ref) => {

    return (
        <input type="text" ref={ref} />
    )
})
export default ComponentD