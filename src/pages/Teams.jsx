import { useState } from "react";
import Card_team from "../components/Card_team"
import { teamsArray } from "../assets/teams"
import { IoSearchSharp } from "react-icons/io5";


const Teams = () =>{

    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

    const categorias = ["Todos", ...new Set(teamsArray.map(teams => teams.category))];

    const clubesFiltrados = categoriaSelecionada === "Todos"
    ? teamsArray
    : teamsArray.filter(teams => teams.category === categoriaSelecionada);

    return (
        <div className="teams">
            <h1>Clubes Oficiais</h1>
            
            <div className="teams_search_container">
                <IoSearchSharp className="icon_search"/>
                <input className="teams_search" type="search" placeholder="Buscar por nome ou cidade..." />

                <label style={{color:'white'}}>Buscar por categoria:
                    <select className="teams_filter" value={categoriaSelecionada} onChange={e => setCategoriaSelecionada(e.target.value)}>
                        {
                            categorias.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                )
                            )
                        }
                    </select>
                </label>
            </div>
            <h3 className="matches_tbn">+ Cadastrar Equipe</h3>
            <ul>
                <li className="teams_container">

                    {
                        clubesFiltrados.map((value, index) =>(
                            <Card_team {...value} key={index}/>
                        ))
                    }
                </li>
            </ul>
        </div>
    )
}

export default Teams