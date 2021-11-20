import "./App.css";
import { Home } from "pages";
import { Menu, Traversy } from "components";
function App() {
  return (
    <div className="App">
      <Home />
      <Traversy />
      <header className="App-header">
        <Menu />
      </header>
    </div>
  );
}

export default App;
