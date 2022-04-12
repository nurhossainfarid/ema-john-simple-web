import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import ProductOrder from './components/ProductOrder/ProductOrder';
import Product from './components/Products/Product';
import SignUp from './SignUp/SignUp';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Product></Product>}></Route>
        <Route path='/home' element={<Product></Product>}></Route>
        <Route path='/product-order' element={<ProductOrder></ProductOrder>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
