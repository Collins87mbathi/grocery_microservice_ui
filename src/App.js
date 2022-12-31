import Register from "./Register/Register";
import Login from "./Login/Login";
import Home from "./Home/Home";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import MainProducts from "./MainProducts/MainProducts";
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/forgotpassword" element={<ForgotPassword/>}/>
    <Route path="/products" element={<MainProducts/>}/>
  </Routes> 
  </BrowserRouter>
  );
}

export default App;
