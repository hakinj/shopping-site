import React, { useState, useEffect, useContext, useMemo } from "react";
import Navbar from '../components/narbar/Navbar'
import { CartContext } from '../context/cartContext'
import productStyle from '../style/productStyle'
import { addAbortListener } from "events";



function Cartlist() {
    
    const { carts, setCarts } = useContext(CartContext)
    const { CartContainer, cart, cartImageStyle, cart2, cart3, wrapper, imgh1, tags } = productStyle()
    const [price, setPrice] = useState([])
    
      


    const handleDelete = (id) => {
        setCarts((prev) => prev.filter(item => item.id !== id))
      
      };

      const Increase= (id) =>{
        setCarts((prev)=>{return prev.map((item)=>{
           if(item.id===id){
            return {...item, quantity: item.quantity +1, total: ((item.quantity +1) * item.price  ) } 
           }else return item
        })})
      }
      

      const decrease = (id)=> {
        setCarts((prev)=>{return prev.map((item)=>{
            if(item.id===id){
             return {...item, quantity: item.quantity <= 1 ? 1 : item.quantity -1, total: (item.price * (item.quantity <= 1 ? 1 : item.quantity -1))} 
            }else return item
         })})
      }
   

      const totalAll = price.reduce(function(acc, curr) {
        return acc + curr;
      }, 0);
      console.log(price)

      
     console.log(price)
     useEffect(()=>{
     const allTotal = carts.map((item) =>{  return item.total});
     setPrice(allTotal)
       
    
      
     },[carts])
 
        
        

        

      

    return (
        <>
            <div>
                <Navbar
                    list={carts.length}
                />
            </div>
            <div style={wrapper} >
            <div className="cart-container" style={CartContainer}>
                {
                    carts.map((item, index) => (
                        
                            <div style={cart} key={index}>
                                <div style={imgh1}>
                                    <div><img style={cartImageStyle} src={item.images[0]} alt="" /></div>
                                    <div style={tags}>
                                    <h1 >{item.title}</h1>
                                    <h2 >Price: {item.price}</h2>
                                    <button style={{background:'red'}} onClick={()=>{handleDelete(item.id)}}>Remove</button>
                                    </div>
                                </div>
                                <div style={cart2}>
                                    <p>Total:{item.total}</p>
                                    <p>Quantity:{item.quantity}</p>
                                    <button onClick={()=>{Increase(item.id)}}>+</button>
                                    <button onClick={()=>{decrease(item.id)}}>-</button>
                                    {/* <label htmlFor="Quantity">Quantity: </label>
                                    <input type="number" value={item.quantity} /> */}
                                </div>

                                
                            </div>
                              

                    )  )
                    
    
                }

            </div>
            <div style={cart3}>
                <h2 style={{textAlign:'center', marginTop: '40px'}} >SubTotal:{totalAll}</h2>
                <a id="btn" href="http://localhost:5173/checkoutpayment"><button style={{margin:'90px 0px 0px 100px', width:'200px', height:'50px', borderRadius:'10px', background:'blue', color: 'white', borderColor: 'blue'}}>Check Out</button></a>

                </div>
            
            </div>
            
           
        </>
    )
}

export default Cartlist