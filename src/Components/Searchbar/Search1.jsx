import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Search.css'



function Search(){

    const[query,setQuery]=useState("");
    const[products,setProducts]=useState([]);
    const[filter,setFilter]=useState([]);

    useEffect(()=>{
        try{
        fetch(`https://dummyjson.com/products`)
        .then((response)=>response.json())
        .then((data)=>{
            setProducts(data.products)
        })
        .catch((error)=>console.log("fetching :",error))
    }
    catch(error){
        console.log("fetching error :",error)
    }
    },[])
    console.log(products)

    const handleChanges=(e)=>{
        const searchQuery=e.target.vlaue.toLowerCase();
        setQuery(searchQuery)

        const filtered=products.filter((product)=>
        product.title.toLowerCase().includes(searchQuery))
        setFilter(filtered)
    }
    const items=query.length > 0 ? filter : products
    
    return(
        <div className="search_bar">
            <input type="text" placeholder="search here" value={query} onChange={handleChanges}  className="search"/>
               {
                filter.length > 0 ? (
                    items.map((product)=>(
                    <div className="product_list">
                        {product.title}
                        </div>
                ))
            ):( <p>Product not found</p> )}

        </div>
    )
}
export default Search