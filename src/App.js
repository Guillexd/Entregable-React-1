import './App.css';
import NavbarPage from './components/Navbar';
import { ItemListContainerComponent } from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex justify-content-around bg-secondary bg-opacity-75">
        <NavbarPage/>
      </header>

      <main className="text-center bg-info bg-opacity-50">
        <ItemListContainerComponent greeting="Saludos desde un componente de React">
          <h1>Saludito creado desde un componente de React</h1> 
        </ItemListContainerComponent>
      </main>
    </div>
  );
}

export default App;
