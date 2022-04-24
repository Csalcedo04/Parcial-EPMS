import './App.css';
import Barra_mensaje from './componentes_mensajeria/Barra_mensaje';
import Mensaje from './componentes_mensajeria/Mensaje';
import Navegacion_mensaje from './componentes_mensajeria/Navegacion_mensaje';


function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <Barra_mensaje></Barra_mensaje>
        <Mensaje></Mensaje>
        <Navegacion_mensaje></Navegacion_mensaje>
        </div>
    </div>
  );
}

export default App;
