import { useState } from "react";
import { Link } from "react-router-dom"
import { ImExit } from "react-icons/im";
import { HiHome } from "react-icons/hi";
import { FaShieldHalved } from "react-icons/fa6";
import { PiSoccerBallFill } from "react-icons/pi";
import { GiTrophy, GiExitDoor } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";

const Sidebar_navigation = () =>{
    const [isLogged, setIsLogeed] = useState(true);

    function Leave(){
      setIsLogeed(false);
    }

    return(
        <nav className="sidebar_navigation">
          <Link to='/' style={{textDecoration:'none'}}><p><HiHome className="icon"/> Home</p></Link>
          <Link to='/teams' style={{textDecoration:'none'}}><p><FaShieldHalved className="icon"/> Clubes</p></Link>
          <Link to='/matches' style={{textDecoration:'none'}}><p><PiSoccerBallFill className="icon"/> Jogos</p></Link>
          <Link to='/tournaments' style={{textDecoration:'none'}}><p><GiTrophy className="icon"/> Torneios</p></Link>
          <Link to='pageadmin' style={{textDecoration:'none'}}><p><RiAdminFill/> Page Admin</p></Link>
          {/* O Link abaixo está apenas visivel para telas maiores */}
          
              {
                isLogged ? (
                  <> 
                  <Link to='/profile' style={{textDecoration:'none'}}>
                    <div className="sidebar_navigation_profile">
                      <img src="https://www.dropbox.com/scl/fi/fvoygbo1c0i8d8ydr7ysq/Foto.png?rlkey=1boot4g5qoybflqzm3fm85i3j&st=4vmemkw7&dl=1" alt="Foto perfil" />
                        <h4 style={{fontFamily:'Black', color:'white'}}>Marcos Rocha</h4>
                    </div>
                  </Link>

                  <div className="sidebar_navigation_leave">
                    <GiExitDoor/>
                    <span onClick={Leave}>Sair</span>
                  </div>
                  </>
                ) : <Link to='login' style={{textDecoration:'none'}}><h4 className="sidebar_navigation_btn">Entrar/Casdatrar</h4></Link>
              }
          
        </nav>
    )
}

export default Sidebar_navigation