import './App.css';
import Count from './components/Count';
import IncDec from './components/IncDec';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <div className="App">
      <Count />
      <IncDec />
    </div>
  );
}

export default App;
