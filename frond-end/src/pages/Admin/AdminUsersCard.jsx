import { LiaClipboardListSolid } from "react-icons/lia";
import { FaCheck } from "react-icons/fa6";
import { FaVolleyball, FaHourglass } from "react-icons/fa6";

import { FaRegEdit, FaEyeSlash, FaCheckSquare } from "react-icons/fa";
import { IoMdClose, IoIosFootball } from "react-icons/io";

const AdminUsersCard = () =>{
    return(
        <>
        <div className="admin_header">
            <h2>
                <LiaClipboardListSolid />
                Jogos Marcados
            </h2>
            <button className="admin_header_btn">+Agendar novo jogo</button>
        </div>
        <div className="adminUsersCard">
            <img 
            className="adminUsersCard_img"
            src="https://www.dropbox.com/scl/fi/52xyf6l8hg0k3jt9mxzvw/Tubaroes-x-Drag-es.png?rlkey=sz6xg6lv55w9h7m81okbkyjic&st=nivjoabv&dl=1" alt="Foto do jogo" />
            <div className="adminUsersCard_infors">
                <p style={{textTransform:'uppercase', fontWeight:'bold', fontFamily:'fantasy', fontSize:'1.5em'}}>Tubarões da V.D.O vs Dragões Futsal</p>
                <p><strong>Data:</strong> 27/06/2025 - 18:00.</p>
                <p><strong>Local:</strong> Quadra da várzea da onça.</p>
                <p><strong>Modalidade:<IoIosFootball/></strong> Futsal.</p>
                <p><strong>Aposta:</strong> Uma coca gelada.</p>
                <div className="adminUsersCard_marked">
                    <FaHourglass/>
                    <p>Marcado</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button className="table_btnEdit">
                        <FaRegEdit /> Editar
                    </button>
                
                    <button className="adminUsersCard_btn2">
                        <FaCheckSquare /> Marcar como (Realizado)
                    </button>
                
                    <button className="table_btnDelete">
                        <IoMdClose /> Cancelar
                    </button>
                </div>
            </div>
        </div>

        <div className="adminUsersCard">
            <img 
            className="adminUsersCard_img"
            src="https://www.dropbox.com/scl/fi/qntuqn8adejw4my5hxm2c/voleixmanas.png?rlkey=7txgnsf3jwj81seboj3max49p&st=55eb20ve&dl=1" alt="Foto do jogo" />
            <div className="adminUsersCard_infors">
                <p style={{textTransform:'uppercase', fontWeight:'bold', fontFamily:'fantasy', fontSize:'1.5em'}}>Volley Girls vs Manas E.C</p>
                <p><strong>Data:</strong> 03/06/2025 - 15:00.</p>
                <p><strong>Local:</strong> Ginásio de Banabuiú.</p>
                <p><strong>Modalidade:<FaVolleyball/></strong> Vôlei.</p>
                <p><strong>Aposta:</strong> Amistoso</p>
                <div className="adminUsersCard_marked2">
                    <FaCheck/>
                    <p>Realizado</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <button className="table_btnEdit">
                        <FaRegEdit /> Editar
                    </button>
                
                    <button className="adminUsersCard_btn2">
                        <FaHourglass /> Remarcar
                    </button>
                
                    <button className="table_btnDelete">
                        <IoMdClose /> Cancelar
                    </button>
                </div>
            </div>
        </div>

        <div className="adminUsersCard">
            <img 
            className="adminUsersCard_img"
            src="https://www.dropbox.com/scl/fi/40n5n0ado1ihw2ghaarsq/Luan.png?rlkey=97h02c79xpkqe0puy67s7ursf&st=u7kt0zni&dl=1" alt="Foto do jogo" />
            <div className="adminUsersCard_infors">
                <p style={{textTransform:'uppercase', fontWeight:'bold', fontFamily:'fantasy', fontSize:'1.5em'}}>Várzea da Onça E.C vs Poço Verde</p>
                <p><strong>Data:</strong> 01/05/2025 - 15:00.</p>
                <p><strong>Local:</strong> Arena Deusimar Mendes.</p>
                <p><strong>Modalidade:<IoIosFootball/></strong> Futebol.</p>
                <p><strong>Aposta:</strong> Torneio</p>
                <div className="adminUsersCard_marked2">
                    <FaCheck/>
                    <p>Realizado</p>
                </div>
                <div style={{display:'flex', gap:'10px'}}>
                    <a href="#">Editar</a>
                    <a href="#">Cancelar</a>
                    <a href="#">Excluir</a>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default AdminUsersCard