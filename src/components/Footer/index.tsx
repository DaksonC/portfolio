import { BsLinkedin } from 'react-icons/bs'
import { FaWhatsappSquare } from 'react-icons/fa'
import { FooterContainer, NavLinkFooter } from './styles'

export function Footer(){
    return(
        <>
            <FooterContainer>
                <div className="contato-icons">
                    <a href="https://www.linkedin.com/in/dakson-cruz-3b22b7244/" target="_blank" rel="noreferrer">
                        <div className="linkedin">
                            <BsLinkedin  />
                        </div>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=5514991760454" target="_blank" rel="noreferrer">
                        <div className="whatsapp">
                            <FaWhatsappSquare />
                        </div>
                    </a>
                </div>
                <div className="link_menu">
                    <NavLinkFooter to='/'>
                        #home
                    </NavLinkFooter>
                    <NavLinkFooter to='/repos'>
                        #repos
                    </NavLinkFooter>
                    <NavLinkFooter to='/article'>
                        #article
                    </NavLinkFooter>
                    <NavLinkFooter to=''>
                    </NavLinkFooter>
                </div>
            </FooterContainer>
        </>
    )
}