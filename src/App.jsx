import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages and components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './views/Home/Home'
import Headphones from './views/Headphones/Headphones'
import Speakers from './views/Speakers/Speakers'
import Earphones from './views/Earphones/Earphones'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/headphones">
            <Headphones />
          </Route>
          <Route path="/speakers">
            <Speakers />
          </Route>
          <Route path="/earphones">
            <Earphones />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
