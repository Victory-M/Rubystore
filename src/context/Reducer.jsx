export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const tempstate = state.filter(
        (product) => action.payload.id === product.id
      );
      if (tempstate.length > 0) {
        return state;
      } else {
        return [...state, action.payload];
      }

    case "INCREASE":
      const increment = state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      });
      return increment;

    case "DECREASE":
      const tempstate2 = state.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });
      return tempstate2;

    case "REMOVE":
      const remove = state.filter(
        (product) => product.id !== action.payload.id
      );
      return remove;

    default:
      return state;
  }
};
