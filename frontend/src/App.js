import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register/Register"
import Login from "./components/Login/Login";
import AllProducts from "./components/AllProducts/AllProducts";
import ProductPage from "./components/ProductPage/ProductPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/productPage" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
