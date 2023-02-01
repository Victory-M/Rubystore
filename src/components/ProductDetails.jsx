import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Cart } from "../context/Context";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const CartState = useContext(Cart);
  const dispatch = CartState.dispatch;
  console.log(dispatch);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  if (loading) return "Loading...";
  product.quantity = product.quantity = 1;
  return (
    <div className="pro-details">
      <div className="pro-img ">
        <img
          src={product.image}
          alt={product.title}
          className="col-md-6"
          width="400px"
          height="400px"
        />
      </div>
      <div className="pro-text">
        <p className="text-uppercase text-black-50">{product.category}</p>
        <h1 className="display-5">{product.name}</h1>
        <p className="lead fw-bolder">
          {product.rating && product.rating.rate}
        </p>
        <h2 className="display-6 fw-bold my-4">{product.price}</h2>
        <p className="lead">{product.description}</p>
        <div className="pro-btns">
          <Button
            variant="primary"
            onClick={() => {
              dispatch({ type: "ADD", payload: product });
            }}
          >
            Add to cart
          </Button>
          <Link to="/cartpage">
            <Button variant="primary">Go to cart</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
