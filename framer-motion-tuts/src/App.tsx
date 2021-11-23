import { useState, Fragment } from "react";
import { Home } from "pages";
import { Header, Base, Toppings, Order } from "components";
import { Route, Routes, useLocation } from "react-router-dom";
import { IPizzaState } from "interfaces";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
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
    <Fragment>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
