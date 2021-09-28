import React, { useState } from 'react'
const withCounter = (WrappedComponent) => {
    return (props) => {
        const [clickCount, setClickCount] = useState(0)
        const [hoverCount, setHoverCount] = useState(0)
        return (
            <WrappedComponent clickCount={clickCount} onClickHandler={() => {
                setClickCount(clickCount + 1)
            }} hoverCount={hoverCount} onHoverHandler={() => { setHoverCount(hoverCount + 1) }}
            />
        )
    }
}
export default withCounter