import './App.css';

// Images //
import Profile from '../src/img/profile.jpg';

// Social Icon import 
import { SocialIcon } from 'react-social-icons';




function App() {
  return (
    <div className="App">
        <SocialIcon className="Social" url="https://www.linkedin.com/in/tyler-p-ray/"/>
        <SocialIcon className="Social" url="https://github.com/tyler-ray90" />
        <h1>tyler ray</h1>
        <h2>Software Engineer</h2>
        <h3>Full Stack Developer</h3>
        <img className="Profile" alt="Profile"src={Profile} />
        <h2 className="Quote">“The man who moves a mountain begins by carrying away small stones.” ― Confucius, Confucius: The Analects</h2>
        <h2 className="About">As a software engineer I eagerly seek challenges that can be solved that to produce efficient results. Staying relevant, consistent self-education, and solving complex problems are at the core of what keeps me passionate and motivated to thrive in the tech industry. With a rich background in hospitality and communication, I help bridge the gap between technology and its users.
        <br/>
        <br/>
        If you can confidently talk to people about software, you can most certainly talk to a computer.</h2>
        <footer><strong>Copyright &copy; All Rights Reserved 2021 Tyler Ray</strong> </footer>
      
    </div>
  );
}

export default App;
