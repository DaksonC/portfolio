import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Animation } from './components/Animation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Animation />
      <div className="icon_github">
        <BsGithub/>
      </div>
      <div className="icon_linkedin">
        <BsLinkedin />
      </div>
    
       <div className="App-logo">
        <img src="./dk.svg" alt="logo"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
