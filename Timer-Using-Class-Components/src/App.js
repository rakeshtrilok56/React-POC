import './App.css';
import React from 'react'
import Timer from './components/Timer'
class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App" >
          <Timer />
      </div>
    )
  }
}

export default App;
