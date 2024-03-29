import React from 'react'

 import  '../../App.css'



function Navbar(props) {
    
  return (

    <div className='navigation-Wrapper'>
        <div  className='done'><span className='call' title='Locate Us'> <i class="fa-solid fa-address-book"></i> Contacts:</span> 12 lagos street,<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;lagos State</div>
        <div className='nav'><h1 className='nav-list' title='WELCOME'> Akin's Shopper</h1>
        <p>shop with us today and have the best experience </p></div>
        <div  className='made'><span className='dave' title='Reach Us'> <i class="fa-solid fa-phone"></i> Tel:</span  > 0706972422 &nbsp; &nbsp; &nbsp; &nbsp; <a style={{color: 'white', textDecoration:'none'}} href="http://localhost:5173/cartlist"><i id='cart' class="fa-solid fa-cart-shopping"></i> {props.list}</a> </div>
    </div>
  )
}

export default Navbar

