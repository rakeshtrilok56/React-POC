import React from 'react'
import withCounter from './withCounter'
class HoverCounter extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <h1 onMouseOver={this.props.onHoverHandler}>Hovered {this.props.hoverCount} times</h1>
        )
    }
}
export default withCounter(HoverCounter)