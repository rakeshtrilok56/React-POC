import React from 'react'
import withCounter from './withCounter'
const ClickCounter = (props) => {
    let { clickCount, onClickHandler } = props
    return (
        <button onClick={onClickHandler}>clicked {clickCount} times</button>
    )
}
export default withCounter(ClickCounter)