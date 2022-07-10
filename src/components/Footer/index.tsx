import { AiTwotoneMail } from 'react-icons/ai'
import { FooterContainer, NavLinkFooter } from './styles'

export function Footer(){
    return(
        <FooterContainer>
            <div className="contato">
                <p>Contato:</p>
                <div className="email-content">
                    <div className="icon_email">
                        <AiTwotoneMail />
                    </div>
                    <div className="email">
                        <h5>daksonc@gmail.com </h5>
                    </div>
                </div>
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
            </div>
        </FooterContainer>
    )
}