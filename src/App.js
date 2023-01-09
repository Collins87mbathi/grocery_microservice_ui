import Register from "./Register/Register";
import Login from "./Login/Login";
import Home from "./Home/Home";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import MainProducts from "./MainProducts/MainProducts";
import Cart from "./Cart/Cart";
import Shipping from "./Shipping/Shipping";
import OrderComplete from "./OrderComplete/OrderComplete";
import {useSelector} from "react-redux";
import "swiper/css/bundle";
import "./styles.css";
function App() {
const user = useSelector((state)=> state?.user.user);

  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    <Route path="/products" element={<MainProducts/>}/>
    <Route path="/shipping" element={user ? <Shipping/> : <Login/>}/>
    <Route path="/cart" element={ <Cart/>}/>
    <Route path="/complete" element={<OrderComplete/>}/>
  </Routes> 
  </BrowserRouter>
  );
}

export default App;
