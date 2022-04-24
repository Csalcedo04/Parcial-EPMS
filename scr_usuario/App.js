import './App.css';
import Barra from './componentes_usuario/Barra';
import Navegacion_usuario from './componentes_usuario/Navegacion_usuario';
import Proyecto_usuario from './componentes_usuario/Proyecto_usuario';


function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <Barra></Barra>
        <Proyecto_usuario></Proyecto_usuario>
        <Navegacion_usuario></Navegacion_usuario>
        </div>
    </div>
  );
}

export default App;
