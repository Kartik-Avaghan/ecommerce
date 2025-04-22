import "./Hero.css";
import herosec from "../Assets/herosec.jpg";
import { Link } from "react-router-dom";
import S0 from '../Assets/S0.png'
import S1 from '../Assets/S1.png'
import S2 from '../Assets/S2.png'
import S3 from '../Assets/S3.png'
import S4 from '../Assets/S4.png'
import S5 from '../Assets/S5.png'
import { useEffect, useState } from "react";
import Cart from '../Assets/Cart.png'

const Hero = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://dummyjson.com/products?limit=20&skip=79`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => setProducts(data.products))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("fetching problem :", error);
    }
  }, []);

  // const ratingColor=()=>{

  // }



 const handleRating=(stars)=>{
  switch(stars){
    case 0:
      return S0
    case 1: 
      return S1

    case 2 :
      return S2

    case 3: 
      return S3
    
    case 4:
        return S4
    
    case 5:
       return S5
        
  }
 }



  return (
    <div>
      <div className="hero">
        <img src={herosec} alt="" />
      </div>
      <div className="heroleft">
        <p>Well Come To e-Commerce</p>
        {/* <Link to={"/buy"}>
          <button>Buy Now →</button>
        </Link> */}
      </div>

      <section>
        <div className="hero_categories">
          <h2>Categories</h2>
          <hr />
        </div>
        <div className="hero_category_products">
          {products.map((product, i) => (
           <Link to={`/item/${product.id}`} className="link"> <div key={product.i} className="hero_item">
              <img src={product.images ? product.images[0] : ""}alt="name" width={300} className="product_img"/>
              <span className="hero_brand">
              <h4> {product.brand}</h4>
              <h4> | {product.category}</h4>
              </span>
              <span className="hero_subbrand">
              <h5>Ratings : {product.rating}</h5>
              <img src={handleRating(Math.round(product.rating))} alt="stars" height={20} />
              <h5>Price : {product.price}</h5>
               <button>
                  Buy
                </button>
              </span>
             
            </div></Link>
          ))}
        </div>
        
      </section>
    </div>
  );
};

export default Hero;
