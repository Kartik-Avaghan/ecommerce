import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contactus'>
        <div className='contact_details'>
            <h2> CONTACT US :</h2>
            <h3>Feel free to contact us at any time.We will get back to you as soon as we can!</h3>
            <input type="text" placeholder='Name'/>
            <input type="e-mail" placeholder='e-Mail' />
            <input type="text" placeholder='Message' />
            {/* <textarea placeholder='Message'></textarea> */}
            <button>SEND</button>
        </div>
    </div>
  )
}

export default Contact