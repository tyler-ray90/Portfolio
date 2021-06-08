import './App.css';

import SinglePagePDFViewer from './components/PDF/single-page';
import AllPagesPDFViewer from './components/PDF/all-pages';

import samplePDF from './resume.pdf';

// Social Icon import 
import { SocialIcon } from 'react-social-icons';

import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

// Imported Pages
import Portfolio from './Pages/Portolio/Portfolio';
import HomePage from './Pages/HomePage/HomePage';
import Contact from './Pages/Contact/Contact';



function App() {
  return (
    <div className="App">
      <nav>
      <Link className="tr" to="/">TR</Link>
      <Link className="portfolio" to="/portfolio">Portfolio</Link>
      <Link className="contact" to="/contact">Contact</Link>
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
      <Route exact path = "/contact" render={(props) => 
      <Contact />
      }/>
      <Route exact path = "/resume" render={() => 
      <SinglePagePDFViewer pdf={samplePDF} />
      } />
      <Route exact path = "/resume" render={() => 
      <AllPagesPDFViewer pdf={samplePDF} />
      }/>
        <footer><strong>Copyright &copy; All Rights Reserved 2021 Tyler Ray</strong> </footer>
      </Switch>
    </div>
  );
}

export default App;
