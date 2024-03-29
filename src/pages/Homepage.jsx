import React from 'react';
import gadgetsample from '../image/gadgetsample.jpg'

function Homepage() {
  return (
    <>
    <div style={{backgroundImage:`url("${gadgetsample}")`, height:'100vh'}}>
      <div className='real' > 
        <h1>WELCOME TO THE SHOPPING SITE FOR YOUR BEST PRODUCTS!!!</h1> <br />
        <br />
        <br />
        <a href="/shoppingpage"><button>Click here to Shop!!!</button></a>
      </div>

    </div>
    </>
  )
}

export default Homepage