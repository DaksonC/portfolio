import { BsGithub, BsLinkedin } from 'react-icons/bs';
import './styles.css'

export function Header(){
    return(
        <>
            <div className="header">
                <h1>Dakson Chaves Cruz</h1>
                <h3>#frontend #developer 💻☕🚀 </h3>
                <div className="menu">
                    <div className="repos">
                        <a href="/repos">
                            <div className="icon_github">
                                <BsGithub />
                            </div>
                            <p>#repos</p>
                        </a>
                    </div>  
                    <div className="posts">
                        <a href="/posts">
                            <div className="icon_linkedin">
                                <BsLinkedin />
                            </div>
                            <p>#posts</p>
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
