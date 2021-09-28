import React from 'react'
//withCounter is a higher ordercomponent which takes the component as a input and returns the enhanced component
const withCounter = (WrappedComponent) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clickCount: 0,
            hoverCount: 0
        }
        this.onClickHandler = this.onClickHandler.bind(this)
        this.onHoverHandler = this.onHoverHandler.bind(this)
    }
    onClickHandler() {
        this.setState((state) => {
            return {
                clickCount: state.clickCount + 1
            }
        })
    }
    onHoverHandler() {
        this.setState((state) => {
            return {
                hoverCount: state.hoverCount + 1
            }
        })
    }
    render() {
        return (
            <WrappedComponent clickCount={this.state.clickCount} hoverCount={this.state.hoverCount} onClickHandler={this.onClickHandler} onHoverHandler={this.onHoverHandler} />
        )
    }

}
export default withCounter