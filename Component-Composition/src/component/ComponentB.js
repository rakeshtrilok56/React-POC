import React from 'react'
function ComponentB(props) {
    return (
        <>
            <h2>Component B</h2>
            {props.children}
        </>
    )
}
export default ComponentB