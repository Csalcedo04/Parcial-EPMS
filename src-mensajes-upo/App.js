import './App.css';
import Barraupo from './componentes_mensajeria/Barraupo';
import Mensaje from './componentes_mensajeria/Mensaje';
import Navegacion_mensaje from './componentes_mensajeria/Navegacion_mensaje';


function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <Barraupo></Barraupo>
        <Mensaje></Mensaje>
        <Navegacion_mensaje></Navegacion_mensaje>
        </div>
    </div>
  );
}

export default App;
