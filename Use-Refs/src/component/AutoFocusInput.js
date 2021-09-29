import React from 'react'
import CustomTextInput from './CustomTextInput'
class AutoFocusInput extends React.Component {

    constructor(props) {
        super(props)
        this.inputRef = null
        this.setInputRef = this.setInputRef.bind(this)
        this.textInputRef = React.createRef()
    }
    setInputRef(element) {
        this.inputRef = element
    }
    componentDidMount() {
        this.inputRef.focusTextInput()
    }
    render() {
        return (
            <React.Fragment>
                <CustomTextInput ref={this.setInputRef} />
                <br />
                <br />
                <input type="text" ref={this.textInputRef}></input>
                <button onClick={() => { this.textInputRef.current.focus() }}>ClickMe</button>
            </React.Fragment>
        )
    }
}
export default AutoFocusInput