import React from "react";
import './Categoryproduct.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// List of category products after home page of category product of single product category


function Categoryproduct() {

  let {productcategory} = useParams();

  const [products, setProducts] = useState([]);


  useEffect(() => {
    try {
        fetch(`https://dummyjson.com/products/category/${productcategory}`)
        .then((response) => response.json())
        .then((data) => setProducts(data.products))
        .catch((error) => console.log("fetching :", error));
    } catch (error) {
      console.log("fetching error :", error);
    }
  }, []);
  console.log(products)

  return (
    <div>
      <div className="product">
        {products.map((product, i) => (
        
        <Link to={`/item/${product.id}`} className="link"><div>
             <div className="title">
            <img src= {product.images[0]} alt="" width={200} />
           
            <p>Ratings : {product.rating}</p>
            <p>{product.brand}</p>
            <p>{product.title}</p>
            <p>Price : ₹{product.price}</p>
            <button>Buy</button>
            </div>
          </div></Link>
        ))}
      </div>
    </div>
  );
}

export default Categoryproduct;
