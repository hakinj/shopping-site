import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import '../App.css'
import Navbar from '../components/narbar/Navbar'
import productStyle from '../style/productStyle'
import { CartContext } from '../context/cartContext'




function Shoppingpage() {
    const { carts, setCarts } = useContext(CartContext)
    
    const [product, setProduct] = useState(null);
  const { prodStyle, prodStyle2, imageStyle } = productStyle()
   


    const addToCart = (id, items) => {
        setCarts((prev) => {
            const itemExit = prev.findIndex((item) => item.id === id);
            if (itemExit < 0) {
                return [...prev, { ...items, quantity: 1, total:items.price }]
                
            } else {items
                alert('product  already in cart');
                return [...prev];
            }

        });

    };

    console.log(carts.length)









    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const prod = await axios.get('https://dummyjson.com/products', {
                    headers: {
                        'Content-Type': 'text/jsx'
                    }

                })
                const data = prod.data.products
                setProduct(data)
                console.log(prod)
                console.log(data)

            } catch (error) {
                console.log(error.message)
            }

        }; fetchProduct()

       



    }, [carts])
    console.log(product)


    return (
        <>
            <div>
                <Navbar
                    list={carts.length}
                />
            </div>

            <div style={prodStyle}>

                {
                    product?.map((item, index) => (


                        <div style={{ border: '1px solid #000', margin: '5px' }} key={index}>

                            <img style={imageStyle} src={item.images[0]} alt="" />
                            <h1 style={prodStyle2}>{item.title}</h1>
                            <h2 style={prodStyle2}>Price: {item.price}</h2>
                            <button style={{background:'blue'}} onClick={() => { addToCart(item.id, item) }}>Add to Cart</button>

                        </div>


                    )



                    )
                }



            </div>




        </>
    )

}
export default Shoppingpage
