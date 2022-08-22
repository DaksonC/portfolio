import styled from 'styled-components'

export const RepoContainer = styled.section`
    margin-top: 9%;
    ul{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 680px));
        gap: 10px;
        text-align: center;
        justify-content: center;
    }
    .card_repo h2{
        padding: 2%;
    }
    .card_repo p{
        padding: 0.5%;
    }
    .card_repo{
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
        border-radius: 10px;
        padding: 25px;
        margin: 10px;

        transition: transform ease-in-out 100ms;
    }
    .card_repo:hover{
        transform: scale(1.08);
    }

    .card_repo,
    .card_repo li,
    .card_repo h2,
    .card_repo p, 
    .card_repo a{
        text-decoration: none;
    }
    .card_repo hr{
        opacity: 0.1;
    }
    .card_repo h2{
        color: white;
    }
    .card_repo p{
        color: #80F88D;
        padding-bottom: 5px;
    }
    .card_repo a{
        color: white;
    }
    .card_repo p span{
        color: #c9c9;
    }

    #language{
        color: #F88D80;
        border: 1px solid #F88D80;
        border-radius: 10px;
        padding: 0  18px 2px;
        margin: 5px;
    }
    @media (max-width: 480px){
        margin-top: 70%;
    }
`