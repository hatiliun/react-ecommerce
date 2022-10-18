
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  let title= "Bienvenidos a react gato";
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
      </header>
      <ItemListContainer/>
      <h1>{title}</h1>
    </div>
  );
}

export default App;
