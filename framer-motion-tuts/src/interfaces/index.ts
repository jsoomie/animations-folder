export interface IPizzaState {
  base: string;
  toppings: string[];
}

export interface IProps {
  addBase?: Function;
  addTopping?: Function;
  pizza: IPizzaState;
}

export interface IModal {
  showModal: boolean;
  setShowModal: Function;
}
