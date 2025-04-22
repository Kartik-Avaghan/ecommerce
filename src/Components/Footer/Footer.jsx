import React from "react";
import  './Footer.css'
import Cart from "../Assets/Cart.png"
import Instagram from "../Assets/Instagram.png"
import facebook from "../Assets/facebook.png"
import linkedin from '../Assets/linkedin.png'


function Footer(){

    return(
        <div className="main_footer">
            <div className="footer">
                 <div  className="collection_footer">
                <h2>Collections </h2>
                    <p>Furnitures</p>
                    <p>Kitchen Accessories/Groceries</p>
                    <p>Laptops/Smart Phonesz</p>
                    <p>Men's Shirts/Shoes</p>
                    <p>Women's Accessories</p>
                    <p></p>
                </div>

                <div className="information_footer">
                    <h2>Information</h2>
                        <p>Our Story</p>
                        <p>FAQ</p>
                        <p>Contact Us</p>
                        
            <span className="footer_image"><img src={Instagram} alt="instagram"  width={30}/>
                        <img src={linkedin} alt="linkedin" width={30} />
                        <img src={facebook} alt="facebook"  width={30}/></span>

                </div>

                <div className="keepshopping">
                <h2>Have a nice day</h2>
                
                <span className="cart_img">
                <p>Keep Shopping...</p>
                <img src={Cart} alt="" width={200} /></span>
                   </div> 
                   </div>

                   <div>
                    
                   </div>
            </div>
            
           
    
    )
}

export default Footer;
