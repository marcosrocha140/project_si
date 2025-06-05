import { Outlet } from "react-router-dom";
import Navi_bar from "./Navi_bar";
import { FaCircle } from "react-icons/fa";

const PageAdmin = () => {
  return (
    <div>
      <div className="admin_container">
        <Navi_bar/>
        <div style={{margin:'8px 0'}}>
          <span style={{fontSize:'14px'}}>Marcelo Colares e outros 2 Admins estão <FaCircle style={{fontSize:'10px', color:'#06df06'}}/>onlines agora.</span>
          <div>
            <img style={{width:'80px'}} src="https://www.dropbox.com/scl/fi/s9ucr02n1jvfvk8y2yyrz/alert.png?rlkey=9i9qozgt8lzjfrb1a4vsnqucq&st=73r6t7w0&dl=1" alt="Foto Alerta" />
            <p style={{fontSize:'1.8em', fontWeight:'bold', color:'orange', textShadow:'2px 2px 2px #000000c4'}}>Atenção Administradores! </p>
          </div>
          <p>Qualquer ação realizada aqui afeta diretamente o funcionamento do site. Prossiga com cautela.</p>
        </div>
        
        <Outlet/>
      </div>
    </div>
  );
};

export default PageAdmin;
