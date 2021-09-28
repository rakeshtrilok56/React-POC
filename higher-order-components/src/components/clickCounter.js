import React from 'react'
import withCounter from './withCounter'
class ClickCounter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <button onClick={this.props.onClickHandler}>clicked {this.props.clickCount} times</button>
        )
    }
}
export default withCounter(ClickCounter)