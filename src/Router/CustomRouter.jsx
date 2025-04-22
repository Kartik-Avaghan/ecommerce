import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Categorymain from '../Pages/Categorymain'
import Contactus from '../Pages/Contactus'
import Home from '../Pages/Home'
import Login from'../Pages/Login'
import Buynow from '../Pages/Buynow'
import Categoryproduct from '../Components/Productcategory/Categoryproduct'
import ForgotPassword from '../Pages/ForgotPassword'
import Items from '../Components/Beautyitems/Items'
import Orderdetails from '../Pages/Orderdetails'
import Checkout from '../Pages/Checkout'
import Search from '../Pages/Search'
import Beauty from '../Pcomponents/Beauty'

function CustomRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category' element={<Categorymain/>}/>
            <Route path='/contact' element={<Contactus/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/buy' element={<Buynow/>}/>
            <Route path='/category/:productcategory' element={<Categoryproduct/>}/>
            <Route path='/item/:id' element={<Beauty/>}/>
            <Route path='/forgotpassword' element={<ForgotPassword/>}/>
            <Route path='/orderdetails' element={<Orderdetails/>}/>
            <Route path='/checkout/:id' element={<Checkout/>}/>
            <Route path='/search' element={<Search/>}/>
            
        </Routes>
    </div>
  )
}

export default CustomRouter;