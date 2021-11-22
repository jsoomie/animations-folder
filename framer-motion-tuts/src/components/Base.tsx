import { Link } from "react-router-dom";
import { IProps } from "interfaces";

export const Base = ({ addBase, pizza }: IProps) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust", "Cheese Crust"];

  return (
    <div className="base container">
      <h3>Step 1: Choose your base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase!(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <div className="next">
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};
