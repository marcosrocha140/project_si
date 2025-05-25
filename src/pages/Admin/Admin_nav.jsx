import { IoPerson } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { GiTrophy } from "react-icons/gi";
import { BiSolidSpreadsheet } from "react-icons/bi";

import { Link } from "react-router-dom";

const Admin_nav = () =>{
    return(
        <div className="main">
            <div style={{display:'flex', alignItems:'center'}}>
                <img className="main_logo" src="https://www.dropbox.com/scl/fi/0jg32iqzguoiu9ng4djmv/logoSport.png?rlkey=b2u2bdtf3hj8hpknibdbnhdm8&st=ncs45s91&dl=1" alt="Logo" />
                <h1 className="main_title">Sport Interior</h1>
            </div>

            <div className="main_nav">
                <ul style={{fontSize:'1.6em', paddingLeft:'12px'}}>
                    <Link><li><IoPerson/> Usuários</li></Link>
                    <Link to='admin_teams'><li><FaShieldAlt/> Clubes</li></Link>
                    <Link><li><IoMdFootball/> Jogos</li></Link>
                    <Link><li><GiTrophy/> Torneios</li></Link>
                    <Link><li><BiSolidSpreadsheet/> Notícias</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Admin_nav