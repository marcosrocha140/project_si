import { IoIosNotifications, IoIosExit, IoMdSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom'
import { useAuth } from "../AuthContext";

const FooterMobile = () =>{
    
    const {isLogged, user, logout} = useAuth();

    return(
        <div className="foote_mobile">
            <div style={{display:'flex'}}>
                <IoIosNotifications style={{fontSize:'1.8em'}}/>
                <span style={{color:'red'}}>8</span>
            </div>
            <IoMdSearch style={{fontSize:'1.8em'}}/>
            
            {
                isLogged ?
                <Link to='profile' style={{display:'flex', alignItems:'center', gap:'4px'}}>
                    <p style={{fontSize:'15px'}}>{user?.name}</p>
                    <img style={{width:'25px', borderRadius:'100%'}} src={user?.image} alt={`Foto ${user?.name}`} />
                </Link> :
                    <Link to='login'>
                        <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                            <p>Entrar</p>
                            <FaRegUserCircle/>
                        </div>
                    </Link>
            }
        </div>
    )
}

export default FooterMobile