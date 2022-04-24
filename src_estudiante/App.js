import './App.css';
import Barra_estudiante from './componentes_estudiante/Barra_estudiante';
import Estudiante from './componentes_estudiante/Estudiante';
import Navegacion_estudiante from './componentes_estudiante/Navegacion_estudiante';



function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <Barra_estudiante></Barra_estudiante>
        <Estudiante></Estudiante>
        <Navegacion_estudiante></Navegacion_estudiante>
        </div>
    </div>
  );
}

export default App;
