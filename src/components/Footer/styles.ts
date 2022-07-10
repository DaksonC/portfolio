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

    .contato p{
        margin: 10px;
        color: #80F88D;
    }
    .email-content{
        display: flex;
        margin: 10px;
    }
    .icon_email{
        color: white;
        letter-spacing: 5px;
    }
    .email{
        color: white;
    }

    .link_menu{
        margin-left: 135px;
    }
    `
export const NavLinkFooter = styled(NavLink)`
    text-decoration: none;
    color: white;
    margin-left: 10px;

    &:hover{
        color: #80F88D;
    }
`
