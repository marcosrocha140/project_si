import { useState } from "react";

import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LiaClipboardListSolid } from "react-icons/lia";

import { usersArray } from "../../assets/users";

const AdminUsers = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

    // function formulario(){
    //     setMostrarFormulario(true);
    // }

    // function removerFormulario(){
    //     setMostrarFormulario(false);
    // }

  return (
    <div>
      <div className="admin_header">
        <h2>
          <LiaClipboardListSolid />
          Lista de Usuários
        </h2>
        <button className="admin_header_btn">+Novo Usuário</button>
      </div>

      {/* {
        mostrarFormulario ? (
          <AdminTeamsRegister removeForm={removerFormulario}/>
        ) : <></>
      } */}


      <table>
        <thead>
          <tr>
            <th>Nome e Sobrenome</th>
            <th>E-mail</th>
            <th>RG</th>
            <th>Jogador</th>  
            <th>Clube</th>
            <th>Ação</th>
          </tr>
        </thead>

        <tbody>
          {usersArray.map((user) => (
              <tr key={user._id} className="table_line">
              <td>
                <div style={{display:'flex'}}>
                  <img
                  src={user.image}
                  alt="Foto perfil"
                  style={{ width: "25px", height: "25px" }}
                  />
                  {user.name} {
                    user.admin ? (
                        <strong>(Admin)</strong>
                    ) : <></>
                  }
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.rg}</td>
              <td>{user.jogador ? (<p>Sim</p>) : <p>Não</p>}</td>
              <td>Nenhum</td>
              <td>
                <button className="table_btnEdit">
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

export default AdminUsers;
