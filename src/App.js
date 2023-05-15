import logo from './logo.svg';
import './App.css';
import Rutas from './rutas/rutas';
import toast, {Toaster} from 'react-hot-toast';


function App() {
  return (
    
    <div className="App">
      <Rutas/>
      <Toaster/>
    </div>
    
    
  );
}

export default App;
