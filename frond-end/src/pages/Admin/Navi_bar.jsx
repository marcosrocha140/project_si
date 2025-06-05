import { IoMdExit } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiShieldLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { TbVs } from "react-icons/tb";
import { LiaTrophySolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navi_bar = () => {
  return (
    <div className="navi_bar_container">
      <img
        style={{ width: "200px" }}
        src="https://www.dropbox.com/scl/fi/0jg32iqzguoiu9ng4djmv/logoSport.png?rlkey=b2u2bdtf3hj8hpknibdbnhdm8&st=7u25e2ct&dl=1"
        alt="Logo"
      />
      <h1>Pagina de Administração</h1>
      <nav>
        <div className="navi_bar_nav">
          <Link to="adminnews" className="navi_bar_link">
            <p>
              <IoNewspaperOutline /> Noticias
            </p>
          </Link>
          <Link to="adminteams" className="navi_bar_link">
            <p>
              <RiShieldLine /> Clubes
            </p>
          </Link>
          <Link to="adminusers" className="navi_bar_link">
            <p>
              <FaRegUser /> Usuários
            </p>
          </Link>
          <Link to="adminuserscard" className="navi_bar_link">
            <p>
              <TbVs /> Jogos
            </p>
          </Link>
          <Link to="#" className="navi_bar_link">
            <p>
              <LiaTrophySolid /> Torneios
            </p>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img
              style={{ width: "35px", height: "35px", borderRadius: "100%" }}
              src="https://www.dropbox.com/scl/fi/wa4bgd6uyefh0p22theqy/Captura-de-tela-2025-05-31-164852.png?rlkey=lvvfaku2b2urucvh2cphxa1v5&st=65lvwhjv&dl=1"
              alt="Foto"
            />
            <p>Marcos Rocha</p>
            <IoMdExit />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navi_bar;
