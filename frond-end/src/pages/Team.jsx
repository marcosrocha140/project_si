import { FcLike } from "react-icons/fc";
import { FaPeopleGroup, FaLocationDot, FaBasketball } from "react-icons/fa6";
import { FaHandshake, FaCheckCircle } from "react-icons/fa";
import { AiFillTrophy } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import { teamsArray } from "../assets/teams";
import Table from "../components/Table";

const Team = () =>{
    const {id} = useParams();
    const team = teamsArray.find((t) => String(t._id) === id);
    

    if (!team) return <div>Clube não encontrado.</div>;


    return(
        <div className="team">

            <div style={{backgroundImage:`url(${team.banner})`}} className="team_banner" >

            </div>
            {/* <img src={team.banner} alt={`Foto clube ${team.name}`} className="team_banner"/> */}

            <div className="team_img">
                <div style={{display:'flex', alignItems:'center'}}>
                    <img className="team_logo" src={team.image} alt={`Emblema ${team.name}`} />          
                    <div style={{textAlign:'left'}}>
                        <h1 className="team_title">{team.name} <FaCheckCircle style={{fontSize:'17px', color:'#323434'}}/></h1>
                        <p style={{color:'black'}}><FaLocationDot style={{color:'#323434'}}/>{team.city}</p>
                    </div>
                </div>

            </div>

            <div className="team_data">
                <h3>Informações do Clube</h3>

                <h4><AiFillTrophy style={{color:'orange'}}/> Campeonatos disputados: 3 <a href="#">ver detalhes</a></h4>
                <div style={{display:'flex', justifyContent:'space-between', margin:'7px'}}>
                    <div className="team_team">
                        <div className="team_data_category">
                            <p><strong>Categoria</strong></p>
                            <p style={{color:'orange'}}><FaBasketball style={{color:'orange'}}/> {team.category}</p>
                        </div>
                        <div className="team_data_patro">
                            <p><strong><FaHandshake style={{color:'orange'}}/> Patrocínios:</strong>
                            <li style={{color:'orange'}}>@patrocíonio 1</li> 
                            <li style={{color:'orange'}}>@patrocíonio 2</li>     
                            <li style={{color:'orange'}}>@patrocíonio 3</li>
                            <li style={{color:'orange'}}>@patrocíonio 4</li>
                            <a href="#">ver mais</a>
                            </p>
                        </div>
                    </div>

                    <div className="team_team_center">
                        <div className="team_data_category">
                            <p><strong>Último Campeonato</strong></p>
                            <p style={{color:'orange'}}><FaBasketball style={{color:'orange'}}/> Torneio na Cesta</p>
                        </div>
                        <img src="https://www.dropbox.com/scl/fi/oj1pwcs6rber92giqrlmf/na_cesta.png?rlkey=j0k0dq878vgtgqno12p94xt9m&st=er5adrpy&dl=1" alt="Torneio Logo" />
                    </div>

                    <div className="team_players">
                        <h4><strong><FaPeopleGroup style={{color:'orange'}}/> Jogadores</strong></h4>
                        <p><RiInstagramFill style={{color:'pink'}}/> Jogador 1</p>
                        <p><RiInstagramFill style={{color:'pink'}}/> Jogador 2</p>
                        <p><RiInstagramFill style={{color:'pink'}}/> Jogador 3</p>
                        <p><RiInstagramFill style={{color:'pink'}}/> Jogador 4</p>
                        <p><RiInstagramFill style={{color:'pink'}}/> Jogador 5</p>
                        <a href="#">ver mais</a>
                        
                    </div>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <button 
                        style={{fontSize: '1.3em', 
                            color:'black',
                            backgroundColor:'orange', 
                            border:'none', 
                            borderRadius:'8px', padding:'5px 8px' }}
                            >Marcar Duelo
                    </button>
                    <div className="team_like">
                        <FcLike style={{fontSize:'1.7em', color:'gray', marginRight:'4px'}} />
                        <p>Gostei</p>
                    </div>
                </div>
                
            </div>
            
            <h1>Histórico de Jogos</h1>
            <table>
                <thead>
                    <tr style={{backgroundColor:'#05f52b4a'}}>
                        <th>Data</th>
                        <th>Adversário</th>
                        <th>Resultado</th>
                        <th>Casa/Fora</th>
                    </tr>
                </thead>

                <tbody style={{backgroundColor:'#02250687'}}>
                    <Table 
                    textDate='18/05/2025'
                    textOpponent='FRI3NDS'
                    textResult='131 - 116'
                    textlocation='Fora'
                    />
                    <Table 
                    textDate='03/05/2025'
                    textOpponent='OS FURIAS'
                    textResult='103 - 89'
                    textlocation='Casa'
                    />
                    <Table 
                    textDate='27/04/2025'
                    textOpponent='THE LIZZIES'
                    textResult='98 - 115'
                    textlocation='Fora'
                    />
                    {/* <Table 
=======
import { GiBasketballJersey } from 'react-icons/gi';
import { useParams } from "react-router-dom";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import axios from "axios";

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get("http://localhost:4000/teams");
        setTeams(response.data);
      } catch (error) {
        console.error("Error ao buscar time" + error);
      }
    };

    fetchTeam();
  }, []);

  const { id } = useParams();
  const team = teams.find((t) => String(t._id) === id);

  if (!team) return <div>Clube não encontrado.</div>;

  return (
    <div className="team">
      <div
        style={{ backgroundImage: `url(${team.banner})` }}
        className="team_banner"
      ></div>
      {/* <img src={team.banner} alt={`Foto clube ${team.name}`} className="team_banner"/> */}

      <div className="team_img">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            className="team_logo"
            src={team.image}
            alt={`Emblema ${team.name}`}
          />
          <div style={{ textAlign: "left" }}>
            <h1 className="team_title">
              {team.name}{" "}
              <FaCheckCircle style={{fontSize:'16px'}} className="iconVerify" />
            </h1>
            <p style={{ color: "black" }}>
              <FaLocationDot style={{ color: "#323434" }} />
              {team.city}
            </p>
          </div>
        </div>

        <div className="btn_follow" style={{color:'#ffffffff', fontFamily:'Roboto', alignItems:'center'}}>
          <FcLike
            style={{ fontSize: "1.7em", color: "gray", marginRight: "4px" }}
          />
          <p>{team.likes} Seguindo</p>
        </div>
      </div>
      <h2 className="text_coach">Treinador: {team.CEO}</h2>

      <div className="team_data">
        <h3>Informações do Clube</h3>

        <h4>
          <AiFillTrophy style={{ color: "orange" }} /> Campeonatos disputados: 3{" "}
          <a href="#">ver detalhes</a>
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "7px",
          }}
        >
          <div className="team_team">
            <div className="team_data_category">
              <p>
                <strong>Categoria</strong>
              </p>
              <p style={{ color: "orange" }}>
                <FaBasketball style={{ color: "orange" }} /> {team.category}
              </p>
            </div>
            <div className="team_data_patro">
                <strong>
                  <FaHandshake style={{ color: "orange" }} /> Patrocínios:
                </strong>
                <img
                style={{width:'200px', margin:'auto'}}
                src="https://www.dropbox.com/scl/fi/i3zojj1gu4a3pohkzzgqi/onesio.png?rlkey=d0hqlws2xupcob53t4w7zrv44&st=z1v1wfb0&dl=1"
              alt="Logo Patrocinio"
            />
            <p>Onesio Variedades</p>
            </div>
          </div>

          <div className="team_team_center">
            <div className="team_data_category">
              <p>
                <strong>Último Campeonato</strong>
              </p>
              <p style={{ color: "orange" }}>
                <FaBasketball style={{ color: "orange" }} /> Torneio na Cesta
              </p>
            </div>
            <img
              src="https://www.dropbox.com/scl/fi/oj1pwcs6rber92giqrlmf/na_cesta.png?rlkey=j0k0dq878vgtgqno12p94xt9m&st=er5adrpy&dl=1"
              alt="Torneio Logo"
            />
            <p>Posição: 2º lugar</p>
          </div>

          <div className="team_players">
            <h4 style={{textAlign:'center', backgroundColor:'#0e2933', borderRadius:'8px'}}>
              <strong>
                <FaPeopleGroup style={{ color: "orange" }} /> Jogadores
              </strong>
            </h4>

            {team.userClube.length > 0 ? team.userClube.map(players => (
              <p key={players._id}><GiBasketballJersey style={{ color: "#d73015" }} /> {players.name}</p>
            )) : <p>Nenhum Jogador</p>
          }

            <a href="#">ver mais</a>
          </div>
        </div>
      </div>

      <h1>Histórico de Jogos</h1>
      <table>
        <thead>
          <tr style={{ backgroundColor: "#05f52b4a" }}>
            <th>Data</th>
            <th>Adversário</th>
            <th>Resultado</th>
            <th>Casa/Fora</th>
          </tr>
        </thead>

        <tbody style={{ backgroundColor: "#02250687" }}>
          <Table
            textDate="18/05/2025"
            textOpponent="FRI3NDS"
            textResult="131 - 116"
            textlocation="Fora"
          />
          <Table
            textDate="03/05/2025"
            textOpponent="OS FURIAS"
            textResult="103 - 89"
            textlocation="Casa"
          />
          <Table
            textDate="27/04/2025"
            textOpponent="THE LIZZIES"
            textResult="98 - 115"
            textlocation="Fora"
          />
          {/* <Table 
>>>>>>> 8c532c4 (updates)
                    textDate='13/04/2025'
                    textOpponent='Poço Verde F.C'
                    textResult='2 - 2'
                    textlocation='Casa'
                    /> */}
<<<<<<< HEAD
                </tbody>
            </table>
        </div>
    )
}

export default Team
=======
        </tbody>
      </table>
    </div>
  );
};

export default Team;
>>>>>>> 8c532c4 (updates)
