import './App.css';
import React from 'react'
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';
function App() {
  const greeting = "welcome"
  return (
    <div className="App">
      <ComponentA  >
        <ComponentB>
          <>
            <h3>{greeting} Component C</h3>
          </>
        </ComponentB>
      </ComponentA>
    </div>
  )
}

export default App;
