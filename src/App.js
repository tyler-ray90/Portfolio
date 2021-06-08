import './App.css';

// Images //
import Profile from '../src/img/profile.jpg';

// Social Icon import 
import { SocialIcon } from 'react-social-icons';

import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

// Imported Pages
import Portfolio from './Pages/Portolio/Portfolio';
import HomePage from './Pages/HomePage/HomePage';



function App() {
  return (
    <div className="App">
      <nav>
      <Link className="portfolio" to="/portfolio">Portfolio</Link>
      <SocialIcon className="Social" url="https://www.linkedin.com/in/tyler-p-ray/"/>
      <SocialIcon className="Social" url="https://github.com/tyler-ray90" />
      </nav>
      <Switch>
      <Route exact path = "/" render={(props) => 
      <HomePage />
      
      }/>
      <Route exact path = "/portfolio" render={(props) => 
      <Portfolio 
      />
      } />
        <footer><strong>Copyright &copy; All Rights Reserved 2021 Tyler Ray</strong> </footer>
      </Switch>
    </div>
  );
}

export default App;
