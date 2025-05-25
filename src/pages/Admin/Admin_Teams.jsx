import { teamsArray } from "../../assets/teams"
import Add from "./Add"

const Admin_Teams = () =>{
    return(
        <div style={{color:'black', display:'flex' , backgroundColor:'white'}}>
            <div>
                <Add title='Todos Clubes Cadastrados' addtext='+Adicionar Clube'/>

                <table style={{ borderCollapse: 'collapse', width: '100%', textAlign:'left'}}>
                    <thead style={{backgroundColor:'gray'}}>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '5px' }}>Nome</th>
                            <th style={{ border: '1px solid black', padding: '5px' }}>Categoria</th>
                            <th style={{ border: '1px solid black', padding: '5px' }}>Cidade</th>
                            <th style={{ border: '1px solid black', padding: '5px' }}>Ação</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            teamsArray.map((team, index) =>(
                            <tr key={index}>
                                <td style={{ border: '1px solid black', padding: '5px' }}>{team.name}</td>
                                <td style={{ border: '1px solid black', padding: '5px' }}>{team.category}</td>
                                <td style={{ border: '1px solid black', padding: '5px' }}>{team.city}</td>
                                <td style={{ border: '1px solid black', padding: '5px' }}><button>Editar</button><button>Excluir</button></td>
                            </tr>
                            ))
                        }
                        </tbody>
                    
                </table>
            </div>
        </div>
    )
}

export default Admin_Teams