import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductsList from "./ProductsList";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import HeroImg from "../assets/glassLady.png";
import Splash from "../assets/yellow splash.png";
import Ipad from "../assets/ipad.jpg";
import RedLady from "../assets/redLady.jpg";
import Sneakers from "../assets/sneakers.jpg";
import Phone from "../assets/phone.jpg";
import Exquisite from "../assets/exquisite.jpg";

const Home = ({ data, setData }) => {
  const [additions, setAdditions] = useState([
    {
      id: 1,
      img: RedLady,
      name: "Trendy Hoodie",
    },
    {
      id: 2,
      img: Phone,
      name: "Sleek Phone",
    },
    {
      id: 3,
      img: Ipad,
      name: "Foldable Ipad",
    },
    {
      id: 4,
      img: Sneakers,
      name: "Trendy Sneakers",
    },
    {
      id: 5,
      img: Exquisite,
      name: "Exquisite",
    },
  ]);

  return (
    <div>
      <div className="hero ">
        <div className="hero-text">
          <p className="fs-5 text-uppercase "> welcome to Rubystore </p>
          <h1 className=" mb-4  "> Home of Exquisite items </h1>
          <Link to="/Products">
            <Button variant="danger" className="  text-capitalize ">
              see more{" "}
            </Button>
          </Link>
        </div>
        <div className="p-3">
          <div className="hero-img">
            <img src={HeroImg} alt="hero img" className="main-img" />
            <img src={Splash} alt="hero img" className="bg-img" />
          </div>
        </div>
      </div>

      <div className="new-additions ">
        <h2 className="mb-5"> New Arrivals</h2>
        <div className="additions-container">
          {additions.map((addition) => {
            return (
              <Card style={{ width: "15rem" }} key={addition.id}>
                <Card.Img
                  style={{ width: "15rem", height: "150px" }}
                  variant="top"
                  src={addition.img}
                />
                <Card.Body>
                  <Card.Title>{addition.name}</Card.Title>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="my-5">
        <div className="d-flex justify-content-between px-5 mb-5">
          <h2> Trendy Products </h2>
          <Link to="/Products">
            <Button className="button fw-bold" variant="success">
              See more...
            </Button>
          </Link>
        </div>
        <hr />
        <div className="products center">
          {data.map((product) => (
            <ProductsList
              key={product.id}
              product={product}
              data={data}
              setData={setData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
