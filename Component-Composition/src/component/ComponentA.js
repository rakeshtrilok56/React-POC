import React from 'react'
function ComponentA(props) {
    return (
        <React.Fragment>
            <h1>{props.greeting}Component A</h1>
            {props.children}
        </React.Fragment>
    )
}
export default ComponentA