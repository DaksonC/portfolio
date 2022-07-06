import './styles.css'

export function Article(){
    return(
        <div className="container_article">
            <ul className="posts_article">
                <div className="card_article">
                    <li>
                        <img src="1653915741721.jpg" alt="Artigo Sidelab" />
                    </li> 
                    <div className="resumo_article">

                        <h4>Então, o que são testes unitários?</h4> <br /> 
                        <p>
                            A palavra teste é um substantivo que tem sua origem no latim - testis – no dicionário “Todo mecanismo que busca verificar ou provar a verdade de”. O nome é autoexplicativo, é um algoritmo construído para colocar a prova, as menores unidades de código do seu projeto. Outra definição é do Roy Osherove:    
                        </p> 
                        <div className="link_article">
                          <a href="https://www.sidelab.com.br/post/teste-unit%C3%A1rio-no-react">Saiba mais...</a>
                        </div>
                    </div>
                </div>
            </ul>            
        </div>
    )
}