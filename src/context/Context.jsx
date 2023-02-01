import { createContext, useReducer } from "react";
import { cartReducer } from "./Reducer";

export const Cart = createContext();

export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

// export default Context;

// export const CartState = () => {
//   return useContext(Cart);
// };
