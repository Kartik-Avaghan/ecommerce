import React from "react";
import './Category.css'
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";


//  It is a category of Home page next Category 

const Category = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://dummyjson.com/products/categories`, { method: "GET" })
        .then((response) => response.json())
        .then((data) => setCollections(data))
        .catch((error) => console.log("fetching problem", error));
    } catch (error) {
      console.log("fetching :", error);
    }
  }, []);
  console.log(collections);

  return (
    <div>
      <p>CATEGORIES</p>
      <hr />
      
      <div className="item">
        {collections.map((collection, i) => (
          <div>
            <div className="collection">
              <Link to={`/category/${collection.slug}`} className="link"><h3>{collection.name}</h3></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
