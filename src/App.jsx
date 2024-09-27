import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BaseLayOut from './layout/BaseLayOut'
import Home from './Pages/Home/Home'
import Store from './Pages/Store/Store'
import Contact from './Pages/Contact/Contact'
import Details from './Pages/Details/Details'
import { CartContextProvider } from './context/cartContext'
import Cart from './Pages/Cart/Cart'
import PaymentForm from './components/PaymentForm/PaymentForm'



function App() {


  return (
   
    <BrowserRouter basename='/ProyectoFinal-Moabro-React-JS/'>
      <CartContextProvider>
        <BaseLayOut>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/store' element={<Store/>} />
                <Route exact path='/store/category/:id' element={<Store/>} />
                <Route exact path='/contact' element={<Contact/>} />
                <Route exact path='/details/:id' element={<Details/>} />
                <Route exact path='/cart' element={<Cart />}/>
                <Route exact path='/checkout' element={<PaymentForm />}/>
            </Routes>
        </BaseLayOut>
      </CartContextProvider>    
    </BrowserRouter>
      
   
  )
}
    

          
export default App
          
              

            

