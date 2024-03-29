import {createBrowserRouter} from 'react-router-dom'
import Homepage from './pages/Homepage'
import  Shoppingpage from './pages/Shoppingpage'
import Cartlist from './pages/Cartlist'
import Checkout from './pages/Checkout'
import Recieptpage from './pages/Recieptpage'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage/>
    },
    {
        path: '/shoppingpage',
        element: <Shoppingpage/>

    },
    {
        path: '/cartlist',
        element: <Cartlist/>
    }, 

    {
        path: '/checkoutpayment',
        element: <Checkout/>
    },
    {
        path: '/reciept',
        element: <Recieptpage/>
    }

])
