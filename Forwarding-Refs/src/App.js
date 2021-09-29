import logo from './logo.svg';
import './App.css';
import ComponentC from './components/ComponentC';
import React, { useRef } from 'react'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  render() {
    return (
      <div className="App">
        <ComponentC ref={this.inputRef} />
        <button onClick={() => { this.inputRef.current.focus() }}>Click Me</button>
      </div>
    );
  }
}

export default App;
