import { BsGithub } from 'react-icons/bs';
import { ImHome3 } from 'react-icons/im';
import { MdArticle } from 'react-icons/md';
import './styles.css';

export function Header(){
    return(
        <>
            <div className="header">
                <h1>Dakson Chaves Cruz</h1>
                <h3>#frontend #developer 💻☕🚀 </h3>
                <div className="menu">
                    <div className="home">
                        <a href="/">
                            <div className="icon_home">
                                <ImHome3 />
                            </div>
                            <p>#home</p>
                        </a>
                    </div>              
                    <div className="repos">
                        <a href="/repos">
                            <div className="icon_github">
                                <BsGithub />
                            </div>
                            <p>#repos</p>
                        </a>
                    </div>  
                    <div className="article">
                        <a href="/article">
                            <div className="icon_linkedin">
                                <MdArticle />
                            </div>
                            <p>#article</p>
                        </a>
                    </div>
                </div>
                <div className="avatar">
                    <img src='./avatar.png' alt="avatar" />
                </div>
            </div>
        </>
    )
}
