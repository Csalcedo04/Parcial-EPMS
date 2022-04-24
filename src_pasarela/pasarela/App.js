import './App.css';
import medios from './otros-medios';
import tarjeta from './pasarela/tarjeta';

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <medios></medios>
        <tarjeta></tarjeta>
      </div> 
    </div>
  );
}

export default App;
