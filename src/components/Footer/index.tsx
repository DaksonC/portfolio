import { AiTwotoneMail } from 'react-icons/ai'
import './styles.css'

export function Footer(){
    return(
        <>
            <div className="footer">
                <div className="contato">
                    <p>Contato:</p>
                    <div className="email_">
                        <div className="icon_email">
                            <AiTwotoneMail />
                        </div>
                        <div className="email">
                            <h5>daksonc@gmail.com </h5>
                        </div>
                    </div>
                </div>
                <div className="link_menu">
                    <div className="link_home">
                        <a href="/">#home</a>
                    </div>
                    <div className="link_repos">
                        <a href="/repos">#repos</a>
                    </div>
                    <div className="link_posts">
                        <a href="/posts">#posts</a>
                    </div>
                </div>
            </div>
        </>
    )
}