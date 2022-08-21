import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #262726;
    border-radius: 30px 30px 0px 0px;
    box-shadow: -7px -7px 7px rgba(0, 0, 0, 0.4);

    
    .contato-icons{
        display: flex;
        align-items: center;
    }
    .linkedin, .whatsapp{
        color: #80F88D;
        font-size: 1.9rem;
        margin: 5px;

        transition: all 0.5s;

        &:hover{
            transform: rotate(180deg);
        }
    }
    .whatsapp{
        font-size: 2rem;
    }

    .link_menu{
        width: 20%;
        text-align: center;
        margin-left: 15%;
    }

    @media (max-width: 480px){
        border-radius: 0;
        .link_menu{
            width: 0;
        }
    }
`
export const NavLinkFooter = styled(NavLink)`
    text-decoration: none;
    color: white;
    padding: 3%;

    &:hover{
        color: #80F88D;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px){
        font-size: 0.8rem;
    }
    
`
