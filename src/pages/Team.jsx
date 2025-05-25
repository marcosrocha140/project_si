import { FcLike } from "react-icons/fc";
import { FaPeopleGroup, FaLocationDot, FaVolleyball } from "react-icons/fa6";
import { FaHandshake, FaCheckCircle } from "react-icons/fa";
import { AiFillTrophy } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { teamsArray } from "../assets/teams";
import Table from "../components/Table";

const Team = () =>{
    const {id} = useParams();
    const team = teamsArray.find((t) => String(t.id) === id);
    

    if (!team) return <div>Clube não encontrado.</div>;


    return(
        <div className="team">

            <div style={{backgroundImage:`url(${team.banner})`}} className="team_banner" >

            </div>

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

                <h4><AiFillTrophy style={{color:'orange'}}/> Campeonatos disputados: 1 <a href="#">ver detalhes</a></h4>
                <div style={{display:'flex', justifyContent:'space-between', margin:'7px'}}>
                    <div style={{textAlign:'left'}}>
                        <p><strong><FaVolleyball style={{color:'orange'}}/> Categoria:</strong> {team.category}</p>
                        <p><strong><FaHandshake style={{color:'orange'}}/> Patrocínios:</strong>
                            <li>@patrocíonio 1</li> 
                            <li>@patrocíonio 2</li>     
                            <li>@patrocíonio 3</li>
                            <li>@patrocíonio 4</li>
                            <a href="#">ver mais</a>
                        </p>
                    </div>
                    <div style={{textAlign:'left'}}>
                        <p><strong><FaPeopleGroup style={{color:'orange'}}/> Jogadores:</strong> 
                            <li><RiInstagramFill/> Jogadora 1</li>
                            <li><RiInstagramFill/> Jogadora 2</li>
                            <li><RiInstagramFill/> Jogadora 3</li>
                            <li><RiInstagramFill/> Jogadora 4</li>
                            <li><RiInstagramFill/> Jogadora 5</li>
                            <a href="#">ver mais</a>
                        </p>
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
                    textDate='13/04/2025'
                    textOpponent='Poço Verde F.C'
                    textResult='2 - 2'
                    textlocation='Casa'
                    /> */}
                </tbody>
            </table>
        </div>
    )
}

export default Team