import { useState } from "react";
import { Link } from "react-router-dom"
import { HiHome } from "react-icons/hi";
import { FaShieldHalved, FaArrowRightLong } from "react-icons/fa6";
import { PiSoccerBallFill } from "react-icons/pi";
import { GiTrophy, GiExitDoor } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";

const Sidebar_navigation = () =>{
    const [isLogged, setIsLogeed] = useState(false);

    function Leave(){
      setIsLogeed(false);
    }

    return(
        <nav className="sidebar_navigation">
          <Link to='/' style={{textDecoration:'none'}}><div className="sidebar_navigation_link"><HiHome className="icon"/><p>Home</p></div></Link>
          <Link to='/matches' style={{textDecoration:'none'}}><div className="sidebar_navigation_link"><PiSoccerBallFill className="icon"/><p> Jogos</p></div></Link>
          <Link to='/teams' style={{textDecoration:'none'}}><div className="sidebar_navigation_link"><FaShieldHalved className="icon"/><p> Clubes</p></div></Link>
          <Link to='/tournaments' style={{textDecoration:'none'}}><div className="sidebar_navigation_link"><GiTrophy className="icon"/><p> Torneios</p></div></Link>
          <Link to='pageadmin' style={{textDecoration:'none'}}><div className="sidebar_navigation_pageAdmin_link"><RiAdminFill/><p> Pagina Admin</p></div></Link>
          {/* O Link abaixo está apenas visivel para telas maiores */}
          
              {
                isLogged ? (
                  <> 
                  <Link to='/profile' style={{textDecoration:'none'}}>
                    <div className="sidebar_navigation_profile">
                      <img src="https://www.dropbox.com/scl/fi/t0a9tkxeoygzt6niv1scv/zen-oh.png?rlkey=m87781qzudisnqux18s689ffo&st=xephmd9g&dl=1" alt="Foto perfil" />
                        <div>
                          <h4 style={{color:'white'}}>Marcos Rocha</h4>
                          <div style={{color:'#04ff04', display:'flex', fontSize:'11px', gap:'4px', alignItems:'center'}}>
                            <FaCircle/>
                            <p style={{fontSize:'15px'}}> Online</p>
                          </div>
                        </div>
                    </div>
                  </Link>
                  <div className="sidebar_navigation_leave">
                      <FaArrowRightLong/>
                      <span onClick={Leave}>Sign out</span>
                  </div>
                  
                  </>
                ) : <Link to='login' style={{textDecoration:'none'}}><h4 className="sidebar_navigation_btn">Entrar/Cadastrar</h4></Link>
              }
             
        </nav>
    )
}

export default Sidebar_navigation