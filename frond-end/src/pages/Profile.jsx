import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";


const Profile = () =>{
    const [player, setPlayer] = useState(false);

    return(
        <div className="profile_container">
            <h1>Perfil do usuario</h1>
            
            
            <div className="profile_UserInfor">
                <div>
                    <img className="profile_photo" src="https://www.dropbox.com/scl/fi/t0a9tkxeoygzt6niv1scv/zen-oh.png?rlkey=m87781qzudisnqux18s689ffo&st=xephmd9g&dl=1" alt="Foto perfil" />
                    {/* <p>Goleiro</p> */}
                </div>

                <div className="profile_UserInfor2">
                    <h1>Marcos Rocha <FaCheckCircle style={{color:'gray', fontSize:'16px'}}/></h1>
                    <p><MdOutlineEmail/> rmarcos140@gmail.com</p>
                    <span><IoLocationOutline/> Quixadá, CE</span>
                    <p>Idade: 29</p>
                    <a href="#">Editar dados pessoais <FiEdit/></a>
                </div>
                    
            </div>
            

            {
                player ? (
                    <div className="profile_feat_team">
                        <h1>Participação no Clube</h1>
                        <div style={{display:'flex', alignItems:'center', margin:'10px 0'}}>
                            <img style={{width:'40px'}} src="https://www.dropbox.com/scl/fi/2gsh8w5u8gmetx8tchrsl/milan.png?rlkey=tge6nchg2s3lleyf8ag9fc38b&st=ltmsz3nm&dl=1" alt="Clube" />
                            <p style={{textTransform:'uppercase', fontSize:'25px'}}>Milan da várzea F.C</p>
                        </div>
                    <div style={{display:'flex', gap:'20px'}}>
                    <div>
                        <p>Função: <span style={{color: '#02f70c'}}>Goleiro</span></p>
                        <p>N° da Camisa: <span style={{color: '#02f70c'}}>1</span></p>
                        <p>Data de Entrada: <span style={{color: '#02f70c'}}>12/03/2020</span></p>
                    </div>

                    <div>
                        <p>Status Atual: <span style={{color: '#02f70c'}}>Ativo</span></p>
                        <p>N° Torneios com o clube: <span style={{color: '#02f70c'}}>23</span></p>
                        <p>Treinador Atual: <span style={{color: '#02f70c'}}>Bilô</span></p>
                    </div>
                </div>
            </div>
                ) : <h1>Não participa de nenhum clube</h1>
            }

            <div className="profile_historic_container">
                <h1>Histórico de Jogos</h1>
                <div className="profile_historic">
                    <div className="profile_Userinfor3">
                        <p>Jogos</p>
                        <h2>34</h2>
                    </div>

                    <div className="profile_Userinfor3">
                        <p>Gols</p>
                        <h2>3</h2>
                    </div>

                    <div className="profile_Userinfor3">
                        <p>Assistências</p>
                        <h2>0</h2>
                    </div>

                    <div className="profile_Userinfor3">
                        <p>Cartões</p>
                        <h2><AiFillBook style={{color:'yellow', fontSize:'18px'}}/> 1 <AiFillBook style={{color:'red', fontSize:'18px'}}/> 0</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile