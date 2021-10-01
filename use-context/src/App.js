import logo from './logo.svg';
import './App.css';
import ComponentA from './components/ComponentA';
import { userContext, themeContext, UserProvider, ThemeProvider } from './components/UseContext'
function App() {
  return (
    <UserProvider value="Rakesh">
      <ThemeProvider value="dark" >
        <div className="App">
          <ComponentA />
        </div>
      </ThemeProvider>
    </UserProvider>

  );
}

export default App;
