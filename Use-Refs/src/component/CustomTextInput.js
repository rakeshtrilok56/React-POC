import React from 'react'
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.setInputRef = this.setInputRef.bind(this)
        this.focusTextInput = this.focusTextInput.bind(this)
        this.inputRef = null
    }

    setInputRef(element) {
        console.log({ element })
        this.inputRef = element
    }
    focusTextInput() {
        this.inputRef.focus()
    }
    render() {
        return (
            <React.Fragment>
                <input ref={this.setInputRef}></input>
                <button onClick={this.focusTextInput}>Click Me</button>
            </React.Fragment>
        )
    }
}
export default CustomTextInput