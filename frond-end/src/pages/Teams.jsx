<<<<<<< HEAD
import { useState } from "react";
import Card_team from "../components/Card_team"
import { teamsArray } from "../assets/teams"
import { IoSearchSharp } from "react-icons/io5";
import Banner_Page from "../components/Banner_Pages";
import banner from '../images/banner3.png'


const Teams = () =>{

    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

    const categorias = ["Todos", ...new Set(teamsArray.map(teams => teams.category))];

    const clubesFiltrados = categoriaSelecionada === "Todos"
    ? teamsArray
    : teamsArray.filter(teams => teams.category === categoriaSelecionada);

    return (
        <div className="teams">
                
            <Banner_Page banner={banner}/>
            <p className="matches_tbn">+ Cadastrar sua Equipe</p> 
            <p style={{fontSize:'17px', color:'#ffffff8f'}}>(você será redirecionado a pagina para fazer o cadastro da sua equipe)</p>
            
            <h1 className="teams_title">Todos os Clubes Oficiais</h1>

            <div className="teams_search_container">
                <IoSearchSharp className="icon_search"/>
                <input className="teams_search" type="search" placeholder="Buscar por nome ou cidade..." />

                <div className="custom_select">
                    <select value={categoriaSelecionada} onChange={e => setCategoriaSelecionada(e.target.value)}>
                        {
                            categorias.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                )
                            )
                        }
                    </select>
                </div>
            </div>
            
            {
                categoriaSelecionada === "Todos" ? (
                    <p style={{color:'#ababab', marginTop:'10px'}}>Mostrando todos os <strong>{teamsArray.length}</strong> times cadastrados.</p>
                ): <></>
            }

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
=======
import { useState, useEffect } from "react";
import Card_team from "../components/Card_team";
import { IoSearchSharp } from "react-icons/io5";
import Banner_Page from "../components/Banner_Pages";
import banner from "../images/banner3.png";
import axios from "axios";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get("http://localhost:4000/teams");
        setTeams(response.data);
      } catch (error) {
        console.error("Erro ao buscar clubes" + error);
      }
    };
    fetchTeams();
  }, []);

    const categorias = [
    "Todos",
    ...new Set(teams.map((teams) => teams.category)),
  ];

  const clubesFiltrados =
    categoriaSelecionada === "Todos"
      ? teams
      : teams.filter((teams) => teams.category === categoriaSelecionada);

  return (
    <div className="teams">
      <Banner_Page banner={banner} />
      <button className="matches_tbn">+ Cadastrar Sua Equipe</button>
      <p style={{ fontSize: "17px", color: "#ffffff8f" }}>
        (você será redirecionado a pagina para fazer o cadastro da sua equipe)
      </p>

      <h1 style={{fontSize:'4.1em'}}>Todos os Clubes Oficiais</h1>

      <div className="teams_search_container">
        <IoSearchSharp className="icon_search" />
        <input
          className="teams_search"
          type="search"
          placeholder="Buscar por nome ou cidade..."
        />

        <div className="custom_select">
          <select
            value={categoriaSelecionada}
            onChange={(e) => setCategoriaSelecionada(e.target.value)}
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {categoriaSelecionada === "Todos" ? (
        <p style={{ color: "#ababab", marginTop: "10px" }}>
          Mostrando todos os <strong>{teams.length}</strong> times
          cadastrados.
        </p>
      ) : (
        <></>
      )}

      <ul>
        <li className="teams_container">
          {clubesFiltrados.map((value) => (
            <Card_team {...value} />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Teams;
>>>>>>> 8c532c4 (updates)
