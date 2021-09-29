import React from 'react'
class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 0
        }
        this.clearTimer = this.clearTimer.bind(this)
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((state) => {
                return {
                    timer: state.timer + 1
                }
            })
        }, 1000)
    }
    clearTimer() {
        clearInterval(this.interval)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {
        return (
            <React.Fragment>
                <p>TImer {this.state.timer}</p>
                <button onClick={this.clearTimer}>Clear Timer</button>
            </React.Fragment>
        )
    }
}
export default Timer