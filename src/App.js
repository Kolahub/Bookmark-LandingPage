import './App.css';
import Navbar from './Navbar';
import Feature from './Feature';
import Pricing from './Pricing';
import Contact from './Contact';
import Home from './Home';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Feature />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
