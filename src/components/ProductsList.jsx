import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const ProductsList = ({ product }) => {
  return (
    <Card className="product-item  center">
      <div className="">
        <Card.Img
          className="pt-4 "
          style={{ width: "9rem", height: "150px" }}
          variant="top"
          src={product.image}
        />

        <Card.Body>
          <Card.Title>{product.title.slice(0, 20)}</Card.Title>
          <Card.Text>{product.price} </Card.Text>
          <NavLink to={`/products/${product.id}`}>
            <Button variant="success">Buy Now</Button>
          </NavLink>
        </Card.Body>
      </div>
    </Card>
  );
};

export default ProductsList;
