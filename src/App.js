import './App.css';
import Barraupo from './components/Barraupo';
import Navegacion from './components/Navegacion';
import Proyecto from './components/Proyecto';

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <Barraupo></Barraupo>
        <Proyecto></Proyecto>
        <Navegacion></Navegacion>
        </div>
    </div>
  );
}

export default App;
