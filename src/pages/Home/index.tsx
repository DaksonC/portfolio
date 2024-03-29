import { SiJavascript, SiCss3, SiSolidity } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaGitAlt } from 'react-icons/fa';
import './styles.css';

function Home() {
  return (
    <div className="App">
      <div className="icons">
        <div className="icon_html">
            <AiFillHtml5 />
        </div>
        <div className="icon_css">
            <SiCss3 />
        </div>    
        <div className="icon_js">
            <SiJavascript />
        </div>
        <div className="icon_solidity">
          <SiSolidity />
        </div>
        <div className="icon_react">
            <FaReact />
        </div>
        <div className="icon_git">
            <FaGitAlt />
        </div>
      </div>
      <div className="logo">
        <div className="App-logo">
          <img className="image" src="/astronaut.png" alt="logo"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
