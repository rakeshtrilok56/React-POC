import React from 'react'
import withCounter from './withCounter'
const HoverCounter = (props) => {
    const { hoverCount, onHoverHandler } = props
    return (
        <h1 onMouseOver={onHoverHandler}>Hovered {hoverCount} times</h1>
    )
}
export default withCounter(HoverCounter)