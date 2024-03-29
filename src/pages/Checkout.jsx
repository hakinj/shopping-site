import React, { useReducer, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/narbar/Navbar';
import '../App.css';
import { CartContext } from '../context/cartContext';




function Checkout() {
    const [disable, setDisable] = useState(true)
    const navigate = useNavigate()
    
    const { carts, setCarts } = useContext(CartContext)
    const reducer = (state, action) => {
       
        switch (action.type) {
            case "CARDNUMBER":
                return { ...state, CardNumber: action.payload };

            case "EXPMONTH":
                return { ...state, ExpMonth: action.payload };
            
            case "EXPYEAR":
                    return { ...state, ExpYear: action.payload };    

            case "CVV":
                return { ...state, cvv: action.payload };
            case "RESET":
                return { ...state, CardNumber: '', ExpDate: '' };
            default:
                throw new Error("invalid")


        }
    }
   
    const [state, dispatch] = useReducer(reducer, { CardNumber: '', ExpMonth: '', ExpYear: '', cvv: '' })

    
    

    useEffect(()=>{
  

        if(state.cvv.length === 3 && state.CardNumber.length <= 16 && state.ExpYear.length === 4 ){
            setDisable(false) 
        }else{setDisable(true)}
    


    },[state])

    const recieptGen = (e)=>{
        e.preventDefault();
        navigate('/reciept');
        console.log(state)


    
     }



    
    return (

        <>
         <div>
                <Navbar
                    list={carts.length}
                />
            </div>
        <div> 
            <h1 style={{marginTop: '100px'}}>CheckOut</h1>
            <form onSubmit={recieptGen} style={{ display: 'flex', flexDirection: "column", gap: ".1rem", width: "50%", textAlign: 'left', alignItems:'center', margin:'auto' , border:'2px solid #000', width: '350px', height: '400px', padding: '20px', borderRadius: '5px', background: '#FAF9F6',  borderColor: '#FAF9F6'}}>
            <div style={{fontSize: '2rem'}}>
              <i class="fa fa-cc-visa" style={{color:"navy"}}></i>&nbsp;&nbsp;
              <i class="fa fa-cc-amex" style={{color:"blue"}}></i>&nbsp;&nbsp;
              <i class="fa fa-cc-mastercard" style={{color:"red"}}></i>&nbsp;&nbsp;
              <i class="fa fa-cc-discover" style={{color:"orange"}}></i>
            </div>
                <label style={{fontSize: '1.2em'}} htmlFor="CardNumber">CardNumber:</label>
                <input style={{borderRadius: '10px', padding:'8px', width:'200px'}} type="text" placeholder='CardNumber'
                    onChange={(e) => dispatch({ type: "CARDNUMBER", payload: e.target.value })} />
                <br />
                <label style={{fontSize: '1.2em'}} htmlFor="ExpMonth">Exp-Month:</label>
                <input style={{borderRadius: '10px', padding:'8px', width:'200px'}} type="text" placeholder='month'
                    onChange={(e) => dispatch({ type: "EXPMONTH", payload: e.target.value })} />
                <br/>    
                <label style={{fontSize: '1.2em'}} htmlFor="ExpYear">Exp-Year:</label>    
                <input style={{borderRadius: '10px', padding:'8px', width:'200px'}} type="number" placeholder='year'
                    onChange={(e) => dispatch({ type: "EXPYEAR", payload: e.target.value })} />    
                <br />
                <label style={{fontSize: '1.2em'}} htmlFor="cvv">cvv:</label>
                <input style={{borderRadius: '10px', padding:'8px', width:'200px'}} type="number" placeholder='cvv'
                    onChange={(e) => dispatch({ type: "CVV", payload: e.target.value })} />
                <br />
                <button style={{border: '1px solid #000', background: 'blue', color: 'white', borderRadius: '10px', width: '150px', fontSize: '1rem', padding:'5px', borderColor:'blue'}} disabled={disable} type='submit' >Click to Pay</button>
            </form>

        </div>
        </>
    )
}

export default Checkout