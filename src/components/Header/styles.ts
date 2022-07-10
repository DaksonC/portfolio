import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const HeaderContainer = styled.section`
    position: fixed;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #262726;
    border-radius: 0px 0px 30px 30px;
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.4);
    z-index: 15;

    a{
        text-decoration: none;
        color: white;
    }

    h1{
        font-size: 35px;
        color: white;
        margin-top: 1%;
        margin-left: 29%;
    }
    h3{
        margin-left: 29%;
        color: white;
    }
    img{
        position: absolute;
        top: 10%;
        left: 20%;
        border-radius: 50%;
        width: 70px;
        height: 70px;
        border: 5px solid white;
    }
    .menu{
        display: flex;
        width: 20%;
        height: 98%;
        position: absolute;
        top: 0%;
        left: 65%;
    }
`
export const NavLinkHeader = styled(NavLink)`
    width: 100%;
    height: 98%;
    text-align: center;

    .icon_home,
    .icon_linkedin,
    .icon_github{
        margin-top: 18%;
        font-size: 150%;
    }
    &.active{
        color: #80F88D;
        border-bottom: 5px solid #80F88D;
    }
`




