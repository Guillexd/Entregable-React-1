import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarPage from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from './components/NotFound';

function App() {  
  return (
    <Router>
      <NavbarPage/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/categorias/:id" element={<ItemListContainer/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
        {<Route path="*" element={<NotFound/>} />}
      </Routes>
    </Router>
  );
}

export default App;
