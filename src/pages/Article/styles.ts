import styled from 'styled-components'

export const ArticleContainer = styled.section`
    width: 100vw;
    height: 100vh;

    a{
        text-decoration: none;
        color: white;
    }
    .posts_article{
        padding: 2%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 680px));
        gap: 10px;
        justify-content: center;
        margin-top: 10%;
    }
    .card_article{
        align-items: center;
        justify-content: center;
        border-radius: 2%;
        display: flex;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
        
        transition: transform ease-in-out 100ms;
    }
    .card_article:hover{
        transform: scale(1.08);
    }
    .article-image img{
        width: 100%;
        height: 100%;
        border-radius: 2%;
    }
    .card_article li{
        text-align: left;
    }
    .resumo_article{
        padding: 5%;
    }
    .card_article h4,
    .card_article p{
        color: #80F88D;
    }
    .link_article{
        cursor: pointer;
        margin-top: 10px;
    }

`
