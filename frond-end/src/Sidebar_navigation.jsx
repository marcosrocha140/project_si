<<<<<<< HEAD
import { Link } from "react-router-dom"
import { HiHome } from "react-icons/hi";
import { FaShieldHalved, FaArrowRightLong } from "react-icons/fa6";
import { PiSoccerBallFill } from "react-icons/pi";
import { GiTrophy, GiExitDoor } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { PiRankingFill } from "react-icons/pi"
import { FaCircle } from "react-icons/fa";
import { useAuth } from "./AuthContext";

const Sidebar_navigation = () =>{

  const {isLogged, user, logout} = useAuth();

    return(
        <nav className="sidebar_navigation">
          <Link to='/' style={{textDecoration:'none'}}><div className="sidebar_navigation_link"><HiHome className="icon"/><p>Home</p></div></Link>
          <Link to='/matches' style={{textDecoration:'none'}}><div className="sidebar_navigation_link"><PiSoccerBallFill className="icon"/><p> Jogos</p></div></Link>
          <Link to='/teams' style={{textDecoration:'none'}}><div className="sidebar_navigation_link"><FaShieldHalved className="icon"/><p> Clubes</p></div></Link>
          <Link to='/tournaments' style={{textDecoration:'none'}}><div className="sidebar_navigation_link"><GiTrophy className="icon"/><p> Torneios</p></div></Link>
          {/* <Link to='/tournaments' style={{textDecoration:'none'}}><div className="sidebar_navigation_link"><PiRankingFill className="icon"/><p> Ranking</p></div></Link> */}
          
          {
            user?.admin && 
            <Link to='pageadmin' style={{textDecoration:'none'}}><div className="sidebar_navigation_pageAdmin_link"><RiAdminFill/><p>Administração</p></div></Link>
          }
             
        </nav>
    )
}

export default Sidebar_navigation
=======
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import { FaShieldHalved } from "react-icons/fa6";
import { PiSoccerBallFill } from "react-icons/pi";
import { IoIosPeople, IoMdExit } from 'react-icons/io';
import { GiTrophy } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { useAuth } from "./AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

const Sidebar_navigation = () => {
  const [friends, setFriends] = useState([]);
  const { isLogged, user, logout } = useAuth();

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await axios.get("http://localhost:4000/users");
        setFriends(response.data);
      } catch (error) {
        console.error("Erro na busca dos usuários: " + error);
      }
    };

    fetchFriends();
  }, []);

  return (
    <nav className="sidebar_navigation">
      <div className="sidebar_navigation_links">
        <Link to="/" style={{ textDecoration: "none" }}>
        <div className="sidebar_navigation_link">
          <HiHome className="icon" />
          <p>Home</p>
        </div>
      </Link>

      <Link to="/matches" style={{ textDecoration: "none" }}>
        <div className="sidebar_navigation_link">
          <PiSoccerBallFill className="icon" />
          <p>Jogos</p>
        </div>
      </Link>

      <Link to="/teams" style={{ textDecoration: "none" }}>
        <div className="sidebar_navigation_link">
          <FaShieldHalved className="icon" />
          <p>Clubes</p>
        </div>
      </Link>

      <Link to="/tournaments" style={{ textDecoration: "none" }}>
        <div className="sidebar_navigation_link">
          <GiTrophy className="icon" />
          <p>Torneios</p>
        </div>
      </Link>

      <Link to="users_search" style={{ textDecoration: "none" }}>
        <div className="sidebar_navigation_link">
          <IoIosPeople/>
          <p>Amigos</p>
        </div>
      </Link>

      {user?.admin && (
        <Link to="/pageadmin" style={{ textDecoration: "none" }}>
          <div className="sidebar_navigation_pageAdmin_link">
            <RiAdminFill />
            <p>Administração</p>
          </div>
        </Link>
      )}
      </div>

      {isLogged ? (
          <div className="game_page_top_user">
              <img
                style={{ width: "60px", borderRadius: "100%", margin: "auto" }}
                src={user?.image}
                alt="Foto"
              />
            <div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <Link to="profile" style={{textDecoration:'none'}}>
                  <h2 style={{ color: "white", fontSize:'24px' }}>{user?.name} </h2>
                </Link>
                {(user?.jogador || user?.admin) && (
                  <p>
                    <FaCheckCircle className="iconVerify" title="Verificado" style={{fontSize:'15px'}}/>
                  </p>
                )}
              </div>

              <div
                style={{ display: "flex", alignItems: "center"}}
              >
                {user?.jogador ? (
                  <p
                    style={{
                      fontSize: "13px",
                      color: "wheat",
                      letterSpacing: "1px",
                    }}
                  >
                    {user.clube?.name}
                  </p>
                ) : user?.admin ?(
                  <p
                    style={{
                      fontSize: "13px",
                      color: "wheat",
                      letterSpacing: "1px",
                    }}
                  >
                    Administrador
                  </p>
                ) : <></>
                }
                
              </div>
              
            </div>
            <div onClick={logout} className="game_page_top_exit">
                <IoMdExit />
                <span style={{ fontSize: "10px" }}>Sair</span>
              </div>
          </div>
        ) : (
          <Link to="login" style={{ textDecoration: "none" }}>
            <h4 className="sidebar_navigation_btn">Entrar/Cadastrar</h4>
          </Link>
        )}

      {/* Lista de amigos(pegando apenas os usuarios como exemplo por enquanto) */}
      {/* <div>

        {friends.map((friend) =>
          friend === 0 ? (
            <p>Nenhum Amigo Encontrado</p>
          ) : (
            <div key={friend._id} className="sidebar_friend">
              <div style={{display:'flex'}}>
                <img
                  src={friend.image}
                  alt={friend.name}
                  style={{ width: "46px", height:'46px',borderRadius: "100%" }}
                />
                <div className="friend_name_function">
                  <p>{friend.name}</p>
                  {
                    friend.jogador ? 
                    (<span style={{ fontSize: "13px" }}>{friend.club?.name}</span>) :
                    friend.admin ? 
                    (<span style={{ fontSize: "13px" }}>Administrador / {friend.city}</span>) :
                    <></>
                  }
                </div>
              </div>
              <span style={{ fontSize: "13px", color: "gray" }}>Offline</span>
            </div>
          )
        )}
      </div> */}
    </nav>
  );
};

export default Sidebar_navigation;
>>>>>>> 8c532c4 (updates)
