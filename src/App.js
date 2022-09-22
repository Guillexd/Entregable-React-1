import logo from './logo.svg';
import './App.css';
import NavbarPage from './components/Navbar';
import { CartWidgetComponent } from './components/CartWidget';
import { ItemListContainerComponent } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex justify-content-between bg-secondary bg-opacity-75">
        <CartWidgetComponent/>
        <NavbarPage/>
      </header>

      <main className="d-flex flex-wrap pt-5 bg-info bg-opacity-50">
        <ItemListContainerComponent
        image="pina"
        alt="foto de una piña"
        nombre="Piña 2x1"
        des="Piñas calidad-precio"
        precio="$5"
        />
        <ItemListContainerComponent
        image="fresa"
        alt="foto de una fresa"
        nombre="Fresa 2x1"
        des="Fresas calidad-precio"
        precio="$2"
        />
        <ItemListContainerComponent
        image="cebolla"
        alt="foto de una cebolla"
        nombre="Cebolla 2x1"
        des="Cebollas calidad-precio"
        precio="$1"
        />
        <ItemListContainerComponent
        image="papas"
        alt="foto de unas papas"
        nombre="Papa 2x1"
        des="Papas calidad-precio"
        precio="$1.2"
        />
        <ItemListContainerComponent
        image="lechuga"
        alt="foto de unas lechuga"
        nombre="lechuga 2x1"
        des="lechugas calidad-precio"
        precio="$0.5"
        />
        <ItemListContainerComponent
        image="botella"
        alt="foto de una botella de agua"
        nombre="Agua 2x1"
        des="Agua calidad-precio"
        precio="$2.1"
        />
      </main>
    </div>
  );
}

export default App;
