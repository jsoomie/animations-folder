import { useState, Fragment } from "react";
import { Home } from "pages";
import { Header, Base, Toppings, Order, Modal } from "components";
import { Route, Routes, useLocation } from "react-router-dom";
import { IPizzaState } from "interfaces";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
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
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Routes location={location} key={location.pathname}>
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          />
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          />
          <Route
            path="/order"
            element={<Order pizza={pizza} setShowModal={setShowModal} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;
