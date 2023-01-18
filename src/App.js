import Register from "./Register/Register";
import Login from "./Login/Login";
import Home from "./Home/Home";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import {HashRouter ,Routes, Route} from "react-router-dom";
import MainProducts from "./MainProducts/MainProducts";
import Cart from "./Cart/Cart";
import Shipping from "./Shipping/Shipping";
import OrderComplete from "./OrderComplete/OrderComplete";
import AddProduct from "./Admin/AddProduct";
import AddCategory from "./Admin/AddCategory";
import CategoryList from "./Admin/CategoryList";
import Orders from "./Admin/Orders";
import ProductList from "./Admin/ProductList";
import {useSelector} from "react-redux";
import "swiper/css/bundle";
import "./styles.css";
import Payment from "./Payments/Payment";
import Confirmation from "./Confirmation/Confirmation";
import Dashboard from "./Admin/Dashboard";
import OrdersUser from "./Orders/Orders";

function App() {
const user = useSelector((state)=> state?.user.user);

  return (
  <HashRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    <Route path="/products" element={<MainProducts/>}/>
    <Route path="/dashboard" element={user?.isAdmin === true ? <Dashboard/> : <Login/>}>
    <Route path="/dashboard/add-product" element={<AddProduct/>}/>
    <Route path="/dashboard/add-category" element={<AddCategory/>}/>
    <Route path="/dashboard/category-list" element={<CategoryList/>}/>
    <Route path="/dashboard/product-list" element={<ProductList/>}/>
    <Route path="/dashboard/order" element={<Orders/>}/>
    </Route>
    <Route path="/shipping" element={user ? <Shipping/> : <Login/>}/>
    <Route path="/orders" element={user ? <OrdersUser/> : <Login/>}/>
    <Route path="/cart" element={ <Cart/>}/>
    <Route path="/complete" element={user ? <OrderComplete/> : <Login/>}/>
    <Route path="/payment" element={user ? <Payment/> : <Login/>}/>
    <Route path="/confirmation" element={user ? <Confirmation/> : <Login/>}/>
  </Routes> 
  </HashRouter>
  );
}

export default App;
