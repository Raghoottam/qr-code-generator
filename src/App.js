import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
