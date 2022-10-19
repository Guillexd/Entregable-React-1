import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarPage from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from './components/NotFound';
import CartContext from './components/CartContext';
import CartContainer from './components/CartContainer';

function App() {  
  return (
    <Router>
      <CartContext>
        <NavbarPage/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />
          <Route exact path="/categorias/:id" element={<ItemListContainer/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
          <Route exact path="/carrito" element={<CartContainer/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </CartContext>
    </Router>
  );
}

export default App;
