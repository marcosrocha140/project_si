import { useState } from "react";

import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoFootballSharp } from "react-icons/io5";
import { FaBasketball } from "react-icons/fa6";

import { teamsArray } from "../../assets/teams";
import AdminTeamsRegister from "./form/AdminTeamsRegister";

const AdminTeams = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

    function mostrarId(id){
      console.log(`Id do clube selecionado: ${id}`)
    }

    function formulario(){
        setMostrarFormulario(true);
    }

    function removerFormulario(){
        setMostrarFormulario(false);
    }

  return (
    <div>
      <div className="admin_header">
        <h2>
          <LiaClipboardListSolid />
          Lista de Clubes
        </h2>
        <button onClick={formulario} className="admin_header_btn">+Cadastrar novo Clube</button>
      </div>

      {
        mostrarFormulario ? (
          <AdminTeamsRegister removeForm={removerFormulario}/>
        ) : <></>
      }


      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Cidade</th>
            <th>CEO</th>
            <th>Ação</th>
          </tr>
        </thead>

        <tbody>
          {teamsArray.map((team) => (
            <tr key={team._id} className="table_line">
              <td>
                <div style={{display:'flex'}}>
                  <img
                  src={`${team.image}`}
                  alt="Clube"
                  style={{ width: "25px", height: "25px" }}
                  />
                  {team.name}
                </div>
              </td>
              <td>
                {team.category === "Futebol" || team.category === "Futsal" ? (
                  <IoFootballSharp style={{ color: "black" }} />
                ) : (
                  <FaBasketball style={{ color: "#E14F00" }} />
                )}
                {team.category}
              </td>
              <td>{team.city}</td>
              <td>{team.CEO}</td>
              <td>
                <button className="table_btnEdit" onClick={() => mostrarId(team._id)}>
                  <FaRegEdit /> Editar
                </button>
                <button className="table_btnDelete">
                  <RiDeleteBin6Line /> Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTeams;
