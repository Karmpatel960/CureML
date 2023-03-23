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
      <logo>
  <p>       Connect With Us</p>
  <ul>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

 <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
<a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
<a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
<a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a>
<a href="https://www.Google.com/"><i class="fab fa-google"></i></a>
  </ul>
</logo>

      <footer>
        <p>&copy; 2023 CureML. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
