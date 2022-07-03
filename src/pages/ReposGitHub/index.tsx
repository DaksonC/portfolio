import { useEffect, useState } from "react"
import { format, parseISO } from "date-fns"
import './styles.css'

interface IRepository{
    id: number;
    name: string;
    description: string;
    html_url: string;
    created_at: string;
    pushed_at: string;
    language?: string;
}

export function ReposGitHub(){
    const [ repo, setRepo ] = useState<IRepository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/DaksonC/repos')
        .then(response => response.json())
        .then(data => setRepo(data))
    }, [])

    return(
        <div className="container_repo">
            <div className="portfolio_repo">
                <img src="./portfolio.png" alt="portfolio" />
            </div>
            <ul>
                {repo.map(repository => {
                    return (
                        <div className="card_repo">
                            <li key={repository.id}>
                                <h2>{repository.name}</h2>
                            </li>
                            <li key={repository.id}>
                                <p>
                                    Data de criação:
                                    {format(parseISO(repository.created_at), ' HH:mm - dd/MM/yyyy')}
                                </p>
                            </li>
                            <li key={repository.id}>
                                <p>
                                Úlitima atualização:
                                    {format(parseISO(repository.pushed_at), ' HH:mm - dd/MM/yyyy')}
                                </p>
                            </li>
                            <li key={repository.id}>
                                <p>
                                Linguagem: {'\n'}
                                    {repository.language}
                                </p>
                            </li>
                            <li key={repository.id}>
                                <p>Descrição:</p>
                                <p>{repository.description}</p>
                                <a href={repository.html_url} target="_blank" rel="noreferrer">
                                    Saiba mais...
                                </a>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
