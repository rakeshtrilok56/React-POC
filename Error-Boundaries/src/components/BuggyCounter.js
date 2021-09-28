import React from 'react'

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
        if (this.state.count === 5) {
            throw new Error('The count has reached 5')
        }
        return (
            <button onClick={() => {
                this.setState((state) => {
                    return {
                        count: state.count + 1
                    }
                })
            }}>Clicked {this.state.count} times </button>
        )
    }
}
export default BuggyCounter