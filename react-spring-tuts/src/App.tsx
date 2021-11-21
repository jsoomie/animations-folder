import "./App.css";
import { Home } from "pages";
import { Menu, Traversy, Junk } from "components";
function App() {
  return (
    <div className="App">
      <Home />
      {/* <Traversy /> */}
      <Junk />
      <header className="App-header">
        <Menu />
      </header>
    </div>
  );
}

export default App;
