import { ArticleContainer } from "./styles";



export function Article(){
    return(
        <ArticleContainer>
            <ul className="posts_article">
                <div className="card_article">
                    <li>
                        <div className="article-image">
                            <img src="1653915741721.jpg" alt="Artigo Sidelab" />
                        </div>
                    </li> 
                    <div className="resumo_article">

                        <h2>Então, o que são testes unitários?</h2> <br /> 
                        <p>
                            A palavra teste é um substantivo que tem sua origem no latim - testis – no dicionário “Todo mecanismo que busca verificar ou provar a verdade de”. O nome é autoexplicativo, é um algoritmo construído para colocar a prova, as menores unidades de código do seu projeto. Outra definição é do Roy Osherove:    
                        </p> 
                        <div className="link_article">
                          <a href="https://www.sidelab.com.br/post/teste-unit%C3%A1rio-no-react" target="_blank" rel="noreferrer"><span>Continuar lendo...</span></a>
                        </div>
                    </div>
                </div>
            </ul>            
        </ArticleContainer>
    )
}