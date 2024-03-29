import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/cartContext'
import '../index.css'




function Recieptpage() {
  const { carts, setCarts } = useContext(CartContext)
  const [price, setPrice] = useState([])
  
   
  const totalAll = price.reduce(function(acc, curr) {
    return acc + curr;
  }, 0);
 
 
 useEffect(()=>{
  carts.map((item) =>{
    const price = item.total;
    setPrice(prev =>[...prev, price])
   
      
    
   })
 },[])
  

  return (
    <>
      <div style={{ border: ' 2px solid  #E0E1E4', background: ' #E0E1E4', margin: 'auto', width: '400px' }}>
        <div style={{ margin: '30px', textAlign: 'center' }}>
          <h1>RECEIPT</h1>
          <h2 style={{ color: 'green' }}>Payment Success!</h2>
        </div>

        <div style={{display: 'flex', gap: '40px', padding: '10px 0px 0px 50px'}}>
        <h4>Order</h4>
        <h4>Quantity</h4>
        <h4>Unit</h4>
        <h4>Total</h4>
         
              
        </div>
        {
          
          carts.map((item, index) => (
            <div key={index} style={{display: 'flex', gap: '40px', padding: '10px 0px 0px 30px'}}>
              <h5>{item.title}</h5>
              <h5>{item.quantity}</h5>
              <h5>{item.price}</h5>
              <h5>{item.total}</h5>

            </div>



          ))
        }

        <div style={{gap: '250px', display:'flex', padding:'10px'}}>
          <h2>Total</h2>
          <h2 style={{color:'green'}}>{totalAll}</h2>
        </div>
        <div style={{fontSize:'0.4rem', textAlign:'center'}}><a href="http://localhost:5173/reciept"><h1>download receipt</h1></a></div>
        
      </div>
    </>


  )
}

export default Recieptpage