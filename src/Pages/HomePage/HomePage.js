import Profile from '../../img/profile.jpg';

function HomePage(props) {
    return (
        <>
           <h1>tyler ray</h1>
        <h2 className="job-title">Software Engineer</h2>
        <h3 className="role">Full Stack Developer</h3>
        <img className="Profile" alt="Profile"src={Profile} />
        <h2 className="Quote">“The man who moves a mountain begins by carrying away small stones.” ― Confucius, Confucius: The Analects</h2>
        <h2 className="About">As a software engineer, I strongly believe attitude is the core fundamental principal of becoming successful. An attitude of "I can, and I will" pushes us to succeed and grow. An attitude of compassion for yourself and others forms connection. An attitude of patience and perseverance produces creativity. Attitude is the foundation of which we can turn impossibility into possibility.


        <br />
        <br />
      
        Staying relevant, consistent self-education, and solving complex problems are at the center of what keeps me passionate and motivated to thrive in the tech industry. With a rich background in hospitality and communication, I help bridge the gap between technology and its users.
        <br/>
        <br/>
        If you can confidently talk to people about software, you can most certainly talk to a computer.</h2>
        <footer><strong>Copyright &copy; All Rights Reserved 2021 Tyler Ray</strong> </footer>
        </>
    )
};

export default HomePage;