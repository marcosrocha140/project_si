import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "../AuthContext";
import Player_Statistics from "../components/Player_Statistics";


const Profile = () =>{

    const { isLogged, user, logout} = useAuth();
    
    return(
        <div className="profile_container">
            <h1>Perfil do usuario</h1>
            
            
            <div className="profile_UserInfor">
                <div>
                    <img className="profile_photo" src={user?.image} alt="Foto perfil" />
                    {/* <p>Goleiro</p> */}
                </div>

                <div className="profile_UserInfor2">

                    <h1 style={{fontSize:'25px'}}>{user?.name} <FaCheckCircle style={{color:'gray', fontSize:'16px'}}/></h1>

                    <div style={{display:'flex', alignItems:'center', gap:'4px'}}>
                        <MdOutlineEmail/>
                        <p>{user?.email}</p>
                    </div>

                    <div style={{display:'flex', alignItems:'center', gap:'4px'}}>
                        <IoLocationOutline/>
                        <p>{user?.city}</p>
                    </div>
                    
                    <p>Idade: 29</p>
                    <a href="#" className="profile_edit">Editar dados pessoais <FiEdit/></a>
                </div>
                    
            </div>
            {/* #0cebd0e0 */}

            { user?.jogador ? 
                <div className="profile_feat_team">
                    <h1>Participação no Clube</h1>
                    <div>
                        <div style={{display:'flex', alignItems:'center', margin:'10px 0'}}>
                            <img style={{width:'40px'}} src={user.clube.image} alt={`Logo ${user.clube?.name}`} />
                            <p style={{textTransform:'uppercase', fontSize:'25px'}}>{user.clube?.name}</p>
                        </div>
                        <span style={{fontSize:'14px'}}><strong>Modalidade:</strong> Basquete</span>
                    </div>

                    <div style={{display:'flex', gap:'20px'}}>
                        <div>
                            <p>Função: <span style={{color: '#00e3a6'}}>Lateral Esquerdo</span></p>
                            <p>N° da Camisa: <span style={{color: '#00e3a6'}}>2</span></p>
                            <p>Data de Entrada: <span style={{color: '#00e3a6'}}>12/03/2016</span></p>
                        </div>

                        <div>
                            <p>Status Atual: <span style={{color: '#00e3a6'}}>Ativo</span></p>
                            <p>N° Torneios com o clube: <span style={{color: '#00e3a6'}}>37</span></p>
                            <p>Treinador Atual: <span style={{color: '#00e3a6'}}>Hytalvane Souza</span></p>
                        </div>
                    </div>
            </div>: <p>Não participa de nenhum clube.</p>}

            <Player_Statistics/>
        </div>
    )
}

export default Profile