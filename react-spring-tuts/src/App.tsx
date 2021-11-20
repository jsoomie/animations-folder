import "./App.css";
import { Home } from "pages";
import { Menu } from "components";
function App() {
  return (
    <div className="App">
      <Home />
      <header className="App-header">
        <Menu />
      </header>
    </div>
  );
}

export default App;
