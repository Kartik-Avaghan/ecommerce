import React, { useEffect } from "react";
import "./Checkout1.css";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import S0 from "../Assets/S0.png";
import S1 from "../Assets/S1.png";
import S2 from "../Assets/S2.png";
import S3 from "../Assets/S3.png";
import S4 from "../Assets/S4.png";
import S5 from "../Assets/S5.png";
import Expressdelivery from '../Assets/Expressdelivery.png'
import { useParams } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
// import Orderdetails1 from "../Orderdaetails/Orderdetails1";

function Checkout() {

  // section of call parameter from the beauty/intems.jsx using id 
  const {id}=useParams();
  
  

  // section of item image and data fetch by useState and useEffect method 
  const [items, setItems] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setItems(data))
        .catch((error) => console.log("fetching ", error));
    } catch (error) {
      console.log("fetching ", error);
    }
  }, []);
  console.log(items);

  const handleRating = (rating) => {
    switch (rating) {
      case 0:
        return S0;
      case 1:
        return S1;
      case 2:
        return S2;
      case 3:
        return S3;
      case 4:
        return S4;
      case 5:
        return S5;
    }
  };
  
  // section of checkout form data to store using state and useNavigate
  const [formData, setFormData] = useState({
    firstName :"",
    lastName :"",
    phone :"",
    email :"",
    store :"",
    delivery :"",
    deliveryDate :"",
    convinientTime:"",
    city: "",
    address :"",
    pincode :"",

  });

  const navigate = useNavigate();

  
  const handleChanges = (e) => {
    const { name,value}=e.target;
     setFormData((prevData)=>({
      ...prevData, [name]:value
    }))
  }

    
  const handleSubmit = () => {
    navigate("/orderdetails", { state: { formData } });
  };




  return (
    <div className="main">
      <section >
        <div className="container">
          <p>Checkout</p>

          <section>
            <div className="checkout">
              <div>
                <span id="infm" style={{ fontWeight: "bold" }}>
                  1.Contact Information{" "}
                </span>

                <div className="flex">
                  <div className="name">
                    <label for="name">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Name"
                      id="name"
                      value={formData.firstName}
                      onChange={handleChanges}
                    />
                  </div>
                  <div className="name">
                    <label for="last_name">Last Name</label>
                    <input type="text" placeholder="Surname"  name="lastName" id="last_name"  value={formData.lastName} onChange={handleChanges}/>
                  </div>
                </div>

                <div className="flex_2">
                  <div className="phone_details">
                    <label for="phone">Phone</label>
                    <input type="text" placeholder="phone" name="phone" id="name" value={formData.phone} onChange={handleChanges} />
                  </div>
                  <div className="phone_details">
                    <label for="email">E-mail</label>
                    <input type="email" placeholder="e-mail" name="email" id="email"  value={formData.email} onChange={handleChanges}/>
                  </div>
                </div>

                <span id="infm_2">2.Delivery Method</span>
                <div className="flex_3">
                  <div className="delivery">
                    <input type="text" placeholder="store"  name="store" value={formData.store} onChange={handleChanges}/>
                    <input type="text" placeholder="Delivery"  name="delivery" value={formData.delivery} onChange={handleChanges} />
                  </div>
                </div>

                <div className="flex_4">
                  <div className="delivery_date">
                    <label for="date">Delivery Date</label>
                    <input type="date" name="deliveryDate" id="date"  value={formData.deliveryDate} onChange={handleChanges}/>
                  </div>
                  <div className="delivery_date">
                    <label for="time">Convinient Time</label>
                    <input type="time" id="time"  name="convinientTime" value={formData.convinientTime} onChange={handleChanges}  />
                  </div>
                </div>

                <div className="flex_5">
                  <div className="address">
                    <label for="city">City</label>
                    <select name="city"    id="city" value={formData.city} onChange={handleChanges}>
                      <option value="">--Choose--</option>
                      <option value="haveri">Haveri</option>
                      <option value="mysuru">Mysuru</option>
                      <option value="bengakuru">Bengaluru</option>
                    </select>
                  </div>
                  <div className="address">
                    <label for="address">Address</label>
                    {/* <input type="text" placeholder="adress"  id="address"/> */}
                    <textarea
                      name="address"
                      id="address"
                      placeholder="address"
                      cols={50}
                     value={formData.address} onChange={handleChanges}></textarea>
                  </div>
                  <div className="address">
                    <label for="pincode">Pin-Code</label>
                    <input type="text" name="pincode" placeholder="pin-code" id="pincode" value={formData.pincode} onChange={handleChanges} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <Link to={'/orderdetails'}><span className="checkout_btn" onClick={handleSubmit}><button> Buy Now</button></span></Link> */}
          <span className="checkout_btn" onClick={handleSubmit}>
            <button>Buy Now</button>
          </span>
        </div>
      </section >

      <section>
        <div className="main_item">
          <span></span>
        <div className="items">
          <img
            src={items.images ? items.images[0] : items.images}
            alt=""
            width={200}
            className="item_image"
          />
          <span className="brand_title">
            <p>{items.brand}</p>
            <p> | {items.title}</p>
          </span>
          <div className="titles">
            <p className="description">{items.description}</p>
            <span className="item_rating">
              <img
                src={handleRating(Math.round(items.rating))}
                alt=""
                height={30}
              />
              {items.rating}
            </span>
            <span className="discount_price">
              <p> Discount :↓{items.discountPercentage}%</p>
              <p> ₹ {items.price}</p>
            </span>
            
            <span className="shipping_image">
              <img src={Expressdelivery} alt=""  width={30}/>             
               <p> Express Delivery </p>
              </span>
              <span className="shipping_item"><p>{items.shippingInformation}</p></span>

              <span className="total_price"><p>Total Price : ₹{items.price}</p></span>

          </div>

         
        </div>
        </div>
      </section >
    </div>
  );
}

export default Checkout;




