import React, { useEffect, useState } from "react";
import Logo from "../Assets/Logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  const[query,setQuery]=useState("")
  const[products,setProducts]=useState([])
  const[filter,setFilter]=useState([])

  useEffect(()=>{
    try{
    fetch(`https://dummyjson.com/products`)
    .then((response)=>response.json())
    .then((data)=>setProducts(data.products))
    .catch((error)=>console.log(error));
  }
  catch(error){
    console.log(error);
  }
  },[])

  const handleChanges=(e)=>{
    const searchQuery=e.target.value.toLowerCase();
    setQuery(searchQuery)

    const filterd=products.filter((product)=>
    product.title.toLowerCase().includes(searchQuery))
    setFilter(filterd)
    // setProducts(products)
  }

  const items=query.length > 0 ? filter : products



return (
    <div>
      <nav>
        <div className="navbar">
          <div className="nav_logo">
            <Link to={"/"}><img src={Logo} alt="" style={{marginTop:"12px"}}width={30} height={40} /></Link>
            <h2>Online Shop</h2>
           </div>
          <div className="search-results">
          <input  type="text" placeholder="Type To Search" value={query} onChange={handleChanges}/>
          {
            // query.length > 0 &&                 for alternate we can use items.length > 0 ? to print value in search bar
            filter.length > 0 ? (
              items.map((product,i)=>(
                <div key={product.i} className="search-item">
                  {product.title}
                </div>
              ))
            )
            :( " " )
          }
        
          </div>
          <div className="nav_menu">
            <ul>
             <Link to={"/"}  className="link"> <li >Home  </li></Link>
              <Link to={"/category"} className="link"> <li>Category</li> </Link>
              <Link to={"/contact"} className="link"><li> Contact Us </li></Link>
            </ul>
          
          <span className="btn">
            <Link to={"/login"} className="link"><button >Login</button></Link>
          </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
