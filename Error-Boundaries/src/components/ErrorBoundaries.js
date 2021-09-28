import React from 'react'
//componentDidCatch catches the error present in the components children tree
class ErrorBoundaries extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            errorInfo: null
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }
    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>Some error occured</h2>
                    <details>
                        {this.state.error && <h3>{this.state.error.toString()}</h3>}
                        <p>Error Info</p>
                        {this.state.errorInfo && <h4>{this.state.errorInfo.componentStack}</h4>}
                    </details>
                </div>
            )
        }
        return this.props.children
    }
}
export default ErrorBoundaries