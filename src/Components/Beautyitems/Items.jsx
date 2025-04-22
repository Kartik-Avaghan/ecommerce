import React from "react";
import "./Items.css";
import { Link } from "react-router-dom";
import S0 from "../Assets/S0.png";
import S1 from "../Assets/S1.png";
import S2 from "../Assets/S2.png";
import S3 from "../Assets/S3.png";
import S4 from "../Assets/S4.png";
import S5 from "../Assets/S5.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Items() {
  let { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setItems(data))
        .catch((error) => console.log("fteching problem", error));
    } catch (error) {
      console.log("error", error);
    }
  }, [id]);

  const handleRating = (rating) => {
    switch (rating) {
      case 1:
        return S0;

      case 2:
        return S1;

      case 3:
        return S2;

      case 4:
        return S3;

      case 5:
        return S4;

      case 6:
        return S5;
    }
  };
  return (
    // <div className="main_div">
  
    <div className="item">
        <span className="items_img">
          <img
            src={items.images ? items.images[0] : items.images}
            alt={items.title}
            width={300}
          />
        </span>
        <div className="title_1">
          <p>Title : {items.title}</p>
          <p> Tags : {items.tags}</p>
          
          <p>Discription : {items.description}</p>

          {/* <div className="rating_stars"> */}
            <span className="star_image">
              <img
              src={handleRating(Math.round(items.rating))}
              alt="ratings"
              height={40} />
            <p >{items.rating} rating</p></span>
          {/* </div> */}
          <p> Price : ₹ {items.price}</p>
          
          <Link to={`/checkout/${items.id}`}>
          <button className="btn"> Buy</button></Link>
        
        </div>
      </div>
  );
}

export default Items;
