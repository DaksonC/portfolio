import { useEffect, useState } from "react"
import './styles.css'

interface IRepository{
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
    created_at: string;
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
            <ul>
                {repo.map(repository => {
                    return (
                        <div className="card_repo">
                            <li key={repository.id}>
                                <h2>{repository.name}</h2>
                            </li>
                            <li key={repository.id}>
                                <p>{repository.created_at}</p>
                            </li>
                            <li key={repository.id}>
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
