import { useState } from "react";

import { LiaClipboardListSolid } from "react-icons/lia";
import AdminNewsCard from "./AdminNewsCard";
import AdminNewsRegister from "./form/AdminNewsRegister";
import { newsArray } from "../../assets/news";

const AdminNews = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    function formulario(){
        setMostrarFormulario(true);
    }

    function removerFormulario(){
        setMostrarFormulario(false);
    }

    return (
        <div>
            <div className="admin_header">
                <h2>
                    <LiaClipboardListSolid />
                    Todas as Notícias
                </h2>
                

                <button onClick={formulario} className="admin_header_btn">
                    + Postar nova notícia
                </button>
            </div>

            {
                mostrarFormulario ? (
                    <AdminNewsRegister removeForm={removerFormulario}/>
                ) : <></>
            }
            
            <div className="adminnewscardcontainer">
                {
                    newsArray.map((news) =>(
                        <AdminNewsCard
                        key={news._id} 
                        image={news.image} 
                        title={news.title}
                        description={news.description}
                        autor={news.autor}
                        />
                    ))
                }
            </div>

            
        </div>
    );
};

export default AdminNews;
