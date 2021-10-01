import React from 'react'
import ComponentB from './ComponentB'
class ComponentA extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<>
            <h1>Welcome Component A</h1>
            <ComponentB />
        </>

        )
    }
}
export default ComponentA