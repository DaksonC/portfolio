import { useEffect, useState } from "react"
import { format, parseISO } from "date-fns"
import { RepoContaine } from "./styles";

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
        fetch('https://api.github.com/users/DaksonC/repos?sort=created')
        .then(response => response.json())
        .then(data => setRepo(data))
    }, [])

    return(
        <RepoContaine>
            <ul>
                {repo.map(repository => {
                    return (
                        <div key={repository.id} className="card_repo">
                            <li >
                                <h2>{repository.name}</h2>
                            </li>
                            <li >
                                <p>
                                    Data de criação:
                                    {
                                        format(parseISO(repository.created_at), 
                                        ' HH:mm - dd/MM/yyyy')
                                    }
                                </p>
                            </li>
                            <li >
                                <p>
                                    Úlitima atualização:
                                    {
                                        format(parseISO(repository.pushed_at), 
                                        ' HH:mm - dd/MM/yyyy')
                                    }
                                </p>
                            </li>
                            <li >
                                <p>
                                    Linguagem: {'\n'}
                                    <span id='language'>
                                        {
                                            repository.language ?
                                            repository.language : 
                                            'Html'
                                        }
                                    </span>
                                </p>
                            </li>
                            <li >
                                <p><span>Descrição:</span></p>
                                <hr />
                                <p>
                                    {
                                        repository.description ? 
                                        repository.description : 
                                        'A descrição desse projeto está em desenvolvimento. Em breve será carregada.'
                                    }
                                </p>
                                <a href={repository.html_url} target="_blank" rel="noreferrer">
                                    <p><span>Saiba mais...</span></p>
                                </a>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </RepoContaine>
    )
}
