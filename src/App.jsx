
import './App.css';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Home/>
    </div>
  );
}

export default App;
