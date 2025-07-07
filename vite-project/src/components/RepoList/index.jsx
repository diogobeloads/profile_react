import { useEffect, useState } from "react"

import styles from './ReposList.module.css';


const RepoList = ({ nomeUsuario}) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson);
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
        <div className="repo-list-container">
            <ul className={styles.list}>
            {repos.map(repositorio => (
                <li className={styles.listItem} key={repositorio.id}>
                    <div className={styles.itemName}>
                    <b>Nome:</b> {repositorio.name} <br />
                    </div>
                    <div className={styles.itemLanguage}>
                    <b>Linguagem:</b> {repositorio.language} <br />
                    </div>
                    <a className={styles.itemLink} target="blank" href="{repositorio.html_url}">Visitar no GitHub</a> <br />
                </li>
            ))}
        </ul>
        </div>
        </div>
    )
}

export default RepoList