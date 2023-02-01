import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const ProductsList = ({ product }) => {
  return (
    <div className="product-item  center">
      <div className="">
        <Card.Img
          className="pt-4 "
          style={{ width: "9rem", height: "150px" }}
          variant="top"
          src={product.image}
        />

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price} </Card.Text>
          <NavLink to={`/products/${product.id}`}>
            <Button variant="success">Buy Now</Button>
          </NavLink>
        </Card.Body>
      </div>
    </div>
  );
};

export default ProductsList;
