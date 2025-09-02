import { useState } from "react";

import { LiaClipboardListSolid } from "react-icons/lia";
import AdminNewsCard from "./AdminNewsCard";
import AdminNewsRegister from "./form/AdminNewsRegister";
import { newsArray } from "../../assets/news";

const AdminNews = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
<<<<<<< HEAD

    function formulario(){
        setMostrarFormulario(true);
=======
    const [newsEdit, setNewsEdit] = useState(false);

    function formulario(){
        setMostrarFormulario(true);
        setNewsEdit(null);
>>>>>>> 8c532c4 (updates)
    }

    function removerFormulario(){
        setMostrarFormulario(false);
    }

<<<<<<< HEAD
=======
    function editNews(news){
        setMostrarFormulario(true);
        setNewsEdit(news);
    }

>>>>>>> 8c532c4 (updates)
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
<<<<<<< HEAD
                mostrarFormulario ? (
                    <AdminNewsRegister removeForm={removerFormulario}/>
                ) : <></>
=======
                mostrarFormulario && (
                    <AdminNewsRegister removeForm={removerFormulario} news={newsEdit}/>
                ) 
>>>>>>> 8c532c4 (updates)
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
<<<<<<< HEAD
=======
                        onEdit={() => editNews(news)}
>>>>>>> 8c532c4 (updates)
                        />
                    ))
                }
            </div>

            
        </div>
    );
};

export default AdminNews;
