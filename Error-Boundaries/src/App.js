import logo from './logo.svg';
import './App.css';
import ErrorBoundaries from './components/ErrorBoundaries';
import BuggyCounter from './components/BuggyCounter';
function App() {
  return (
    <div className="App">
      <h2>An Error will be generated on clicking the button for 5 times and an fallback UI will be rendered</h2>
      <h3>Both the Counters will be removed and fallback UI will be rendered even if one component generates an error</h3>
      <ErrorBoundaries>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundaries>
      <h3>Only the counter which reaches 5 clicks is removed and another one will stay</h3>
      <ErrorBoundaries>
        <BuggyCounter />
      </ErrorBoundaries>
      <ErrorBoundaries>
        <BuggyCounter />
      </ErrorBoundaries>
    </div>
  );
}

export default App;
