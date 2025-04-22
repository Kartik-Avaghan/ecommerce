import React from 'react'
import './Orderdetails1.css'
import { useLocation} from 'react-router-dom'

function Orderdetails1() {

  const location=useLocation();
  const  data  = location.state?.formData || "not provided";
  return (
    <div className='main_order'> 
    <div className='order'>
    <span className='confirm_order'><p> Confirm The Order Detail's</p></span>
          
          <span className='data'>         
         <p>Name : {data.firstName} {data.lastName}</p>
         <span className='phone_email'>
          <p>Phone : {data.phone}</p>
          <p>E-mail : {data.email}</p>
          </span>
          <span className='store_delivery'>
          <p>Store : {data.store}</p>
          <p>Delivery : {data.delivery}</p>
          </span>
          <span className='delivery_time'>
          <p>Delivery Date : {data.deliveryDate}</p>
          <p>Convinient-Time : {data.convinientTime}</p>
          </span>
          <span className='city_address'>
          <p>City : {data.city}</p>
          <p>Adress : {data.address}</p>
          </span>
          <p>Pin-Code : {data.pincode}</p>
          </span>

          <span className='order_btn'><button>Order Confirmed</button></span>
          </div>


      
    </div>
  )
}

export default Orderdetails1




