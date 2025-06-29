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