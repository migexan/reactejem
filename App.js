import INFRAESTRUCTURATECNOLÓGICA from "./img/INFRAESTRUCTURA TECNOLÓGICA.png";
import "./App.css";



function App() {
  
 const reqApi=() =>{
  console.log("Clicking");
 };
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">INFRAESTRUCTURA TECNOLÓGICA </h1>
       <img src= {INFRAESTRUCTURATECNOLÓGICA} alt="INFRAESTRUCTURA TECNOLÓGICA" className="img-home" />
      <button onClick={reqApi} className="btn-search">Buscar personajes</button> 
      
     
     
      </header>
    </div>
  );
}

export default App;