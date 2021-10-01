import React from 'react'
import ComponentC from './ComponentC'
class ComponentB extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <h1>Welcome Component B</h1>
                <ComponentC />
            </>

        )
    }
}
export default ComponentB