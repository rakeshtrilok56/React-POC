import React from 'react'
import ComponentD from './ComponentD'
class ComponentC extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <h1>Welcome Component C</h1>
                <ComponentD />
            </>
        )
    }
}
export default ComponentC