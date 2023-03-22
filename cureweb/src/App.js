import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
<img src="/CureML__1_-removebg-preview.png" alt="Example image" />
<a>Home</a>
<a>feature</a>
<a>About Us</a>
<a>Contect</a>
<nav>
          <a>Login</a>
          <button>Sign In</button>
        </nav>
      </header>

      <main>
      <div className="left-column">
        <h1>Welcome to CureML</h1>
        <p>CureML is a powerful medical ML  platform that helps doctors and researchers analyze medical data to improve patient care and outcomes.</p>
        <p>Sign in      <button>Learn More</button></p>
        
      
       </div>
        <div className="right-column">
          <img src="/92812-business-presentation-unscreen.gif" alt="Example image" />
        </div>
      </main>
      <footer>
        <p>&copy; 2023 CureML. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
