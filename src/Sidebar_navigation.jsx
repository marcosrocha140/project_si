import { useState } from "react";
import { Link } from "react-router-dom"
import { ImExit } from "react-icons/im";
import { HiHome } from "react-icons/hi";
import { FaShieldHalved } from "react-icons/fa6";
import { PiSoccerBallFill } from "react-icons/pi";
import { GiTrophy, GiExitDoor ,GiConfrontation } from "react-icons/gi";

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
          {/* O Link abaixo está apenas visivel para telas maiores */}
          
              {
                isLogged ? (
                  <> 
                  <Link to='/profile' style={{textDecoration:'none'}}>
                    <div className="sidebar_navigation_profile">
                      <img src="https://www.dropbox.com/scl/fi/44g8y0tycq23t6y6r3diq/marceloBorges.png?rlkey=bd6obvgk2iyepovdkt7gll84w&st=2sqv48i4&dl=1" alt="Foto perfil" />
                        <h4 style={{fontFamily:'Black', color:'white'}}>Marcelo Borges</h4>
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