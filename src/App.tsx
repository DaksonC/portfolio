import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SiJavascript, SiCss3 } from 'react-icons/si'
import { FaReact } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { RiVuejsFill } from 'react-icons/ri';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="icon_vue">
        <RiVuejsFill />
      </div>

      <div className="icon_react">
          <FaReact />
      </div>
      <div className="icon_js">
          <SiJavascript />
      </div>
      <div className="icon_html">
          <AiFillHtml5 />
      </div>
      <div className="icon_css">
          <SiCss3 />
      </div>    
       <div className="App-logo">
        <img src="./dk.svg" alt="logo"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
