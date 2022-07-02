import { SiJavascript, SiCss3 } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { AiFillHtml5 } from 'react-icons/ai'
import './styles.css'

export function Header(){
    return(
        <>
            <div className="header">
                <h1>Dakson Chaves Cruz</h1>
                <div className="icon_js">
                    <SiJavascript />
                </div>
                <div className="icon_react">
                    <FaReact />
                </div>
                <div className="icon_html">
                    <AiFillHtml5 />
                </div>
                <div className="icon_css">
                    <SiCss3 />
                </div>
                <div className="avatar">
                    <img src='./avatar.png' alt="avatar" />
                </div>
            </div>

        </>
    )
}
