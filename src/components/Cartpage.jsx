import Button from "react-bootstrap/Button";
import { Cart } from "../context/Context";
import { useContext } from "react";

const Cartpage = () => {
  const CartState = useContext(Cart);
  const dispatch = CartState.dispatch;
  const state = CartState.state;
  console.log(state, dispatch);

  const total = state.reduce((total, product) => {
    return total + product.price + product.quantity;
  }, 0);

  return (
    <div className="cart-container">
      {state.map((product, index) => {
        return (
          <div key={index} className="cart py-5">
            <div className="img-container">
              <div className="center">
                <img
                  src={product.image}
                  alt="product img"
                  height="200px"
                  width="180px"
                  className="center"
                />
              </div>
              <h3 className="center mt-3">{product.title.slice(0, 28)}</h3>
            </div>

            <h3 className="fw-bold center ">
              ${product.quantity * product.price}
            </h3>
            <div className="cart-btn-container">
              <Button
                className="cart-btn"
                onClick={() => dispatch({ type: "INCREASE", payload: product })}
                style={{ backgroundColor: "#033644", textAlign: "center" }}
              >
                {" "}
                +{" "}
              </Button>
              <div className="center mx-3">{product.quantity}</div>

              <Button
                className="cart-btn"
                onClick={() => {
                  if (product.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: product });
                  } else {
                    dispatch({ type: "REMOVE", payload: product });
                  }
                }}
                style={{ backgroundColor: "#033644", textAlign: "center" }}
              >
                -
              </Button>
            </div>
            <h2
              className="center"
              onClick={() => dispatch({ type: "REMOVE", payload: product })}
            >
              X
            </h2>
          </div>
        );
      })}
      <hr />
      {state.length > 0 && (
        <div className="total center mt-5">
          <h2>Total =</h2>
          <h1>${total}</h1>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
