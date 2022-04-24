import './App.css';
import Barra from './componentes/Barra';
import Navegacion from './componentes/Navegacion';
import Proyecto from './componentes/Proyecto';

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <Barra></Barra>
        <Proyecto></Proyecto>
        <Navegacion></Navegacion>
        </div>
    </div>
  );
}

export default App;
