import './App.css';
import Navbar from './Navbar';
import Feature from './Feature';
import Pricing from './Pricing';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';

// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Feature />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
