import axios from "axios";
import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { VscHeart } from "react-icons/vsc";
import { RiAdminFill } from "react-icons/ri";
import { HiUserAdd } from 'react-icons/hi';
import { useAuth } from "../AuthContext";

const Users_Search = () => {
  const [users, setUsers] = useState([]);
  const {user} = useAuth();
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:4000/users");
      setUsers(response.data);
      try {
      } catch (error) {
        console.error(`Erro ao buscar usuarios: ${error}`);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="users_search">
      <input className="users_search_input" type="search" placeholder="Buscar por nome..." />
      <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <p style={{ fontSize: "25px", textAlign: "left", color: "white" }}>
          Pessoas que talvez conheça
        </p>
        <div className="users_search_container">
          {users.map((User) => (
            <div key={User._id} className="users_search_card">
              <img
                src={User.image}
                alt={`Foto de ${User.name}`}
                style={{
                  width: "160px",
                  borderRadius: "5px",
                  border: "1px solid #108d2bb4",
                }}
              />
              <div style={{ textAlign: "left", marginLeft: "10px" }}>
                <h1 style={{ color: "wheat", fontSize:'26px', fontFamily:'sans-serif'}}>
                  {User.name}{" "}
                  <FaCheckCircle
                    style={{ fontSize: "15px" }}
                    className="iconVerify"
                  />
                  
                </h1>
                
                <p
                  style={{
                    color: "#EAEAEA",
                    textShadow: "2px 2px 2px #000000d1",
                  }}
                >
                  <strong>Idade:</strong> Indefinido
                </p>
                <p
                  style={{
                    color: "#EAEAEA",
                    textShadow: "2px 2px 2px #000000d1",
                  }}
                >
                  <strong>Cidade:</strong> {User.city}
                </p>
                <div
                  style={{
                    color: "#EAEAEA",
                    textShadow: "2px 2px 2px #000000d1",
                  }}
                >
                  {User.jogador ? (
                    <p>
                      <strong>Clube: </strong>
                      {User.club?.name}
                    </p>
                  ) : User.admin ? (
                    <p>
                      <RiAdminFill />
                      Administrador de {User.city}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
                { user?.name == User.name ? (
                  <></>
                ) : <button className="btn_follow">
                    <VscHeart />
                    Seguir
                  </button>

                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users_Search;
