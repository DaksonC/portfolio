import { BsGithub } from 'react-icons/bs';
import { ImHome3 } from 'react-icons/im';
import { MdArticle } from 'react-icons/md';
import { HeaderContainer, NavLinkHeader } from './styles';

export function Header(){
    return(
        
        <HeaderContainer>
            <h1>Dakson Chaves Cruz</h1>
            <h3>#frontend #developer 💻☕🚀 </h3>
            <div className='menu'>
                <NavLinkHeader to='/'>
                    <div className="icon_home">
                        <ImHome3 />
                    </div>
                </NavLinkHeader>              
                <NavLinkHeader to='/repos'>
                    <div className="icon_github">
                        <BsGithub />
                    </div>
                </NavLinkHeader>  
                <NavLinkHeader to='/article'>
                    <div className="icon_linkedin">
                        <MdArticle />
                    </div>
                </NavLinkHeader>
            </div>
            <div className="avatar">
                <img src='./avatar.png' alt="avatar" />
            </div>
        </HeaderContainer>
    
    )
}
