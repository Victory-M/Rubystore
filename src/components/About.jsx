import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Vector1 from "../assets/vector1.png"
import Vector2 from "../assets/vector2.png"
import Vector3 from "../assets/vector3.png"
import Makeup from "../assets/make-up.jpg"
import Bracelet from "../assets/bracelet.jpg"
import Earrings from "../assets/modelearrings.jpg"
import Sneakers from "../assets/sneakers.jpg"


const About = () => {
  return (
    <div >
      <div className="about-hero d-flex justify-content-center align-items-center">
        <h1 className="text-center fw-bold text-uppercase h2">about Us</h1>
      </div>
      
      <div className="about-info p-4 ">
        <h1 className="text-center text-capitalize">What we do</h1>
         <div className="p-1 iconImg d-flex flex-wrap mx-auto align-items-center justify-content-around">
           <img src={Vector1} alt="" />
           <img src={Vector2} alt="" />
           <img src={Vector3} alt="" />
         </div>
      </div>

      <div className="about my-5 p-4">
        <div className="about-img ">
           <img src={Earrings} alt="earrings" />
           <img src={Makeup} alt="make-up" />
           <img src={Bracelet} alt="sneakers" />
           <img src={Sneakers} alt="bracelet" />
        </div>

        <div className="about-text ">
         <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis accusamus vitae adipisci numquam itaque debitis atque tempora, illum, qui nobis sint nisi aut ducimus molestias, quis harum beatae. Corporis, cupiditate tempore. Temporibus eveniet deleniti vitae delectus commodi laboriosam neque, quod facilis natus corporis voluptatem voluptatum ducimus ipsa unde harum. Eum sed aspernatur repellendus perspiciatis ullam velit non dolore quisquam illo beatae, atque libero et commodi obcaecati cupiditate fuga aliquid quis!</p>
          <Link to="/Contact" >
            <Button variant="danger" className="  text-capitalize px-3 py-2 mt-3  ">see more </Button></Link>
        </div>
      </div>

    </div>
  )
}

export default About