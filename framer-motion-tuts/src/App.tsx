import { useState } from "react";
import { Home } from "pages";
import { Header, Base, Toppings, Order } from "components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IPizzaState } from "interfaces";

function App() {
  const [pizza, setPizza] = useState<IPizzaState>({
    base: "",
    toppings: [],
  });

  const addBase = (base: string) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping: string) => {
    let newToppings: string[];
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/base"
          element={<Base addBase={addBase} pizza={pizza} />}
        />
        <Route
          path="/toppings"
          element={<Toppings addTopping={addTopping} pizza={pizza} />}
        />
        <Route path="/order" element={<Order pizza={pizza} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
