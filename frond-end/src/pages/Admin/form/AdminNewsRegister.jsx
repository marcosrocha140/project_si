import { IoClose } from "react-icons/io5";
<<<<<<< HEAD
import { useState } from "react";

const AdminNewsRegister = ({removeForm}) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState();
=======
import { useState, useEffect } from "react";

const AdminNewsRegister = ({removeForm, news}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");

    useEffect(() =>{
        if(news){
            setTitle(news.title || "");
            setDescription(news.description || "");
        }else{
            setTitle("");
            setDescription("");
        }
    },[news]);

    const handleEdit = (e) =>{
        e.preventDefault();

        const newPost ={
            title,
            description
        };
        if(news){
            console.log("Editando noticia: ", newPost);
        }else{
            console.log("Criando nova noticia: ", newPost)
        }

        removeForm();
    }
>>>>>>> 8c532c4 (updates)

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modeal-content-top">
<<<<<<< HEAD
                    <h2>Postar Nova Notícia</h2>
=======
                    <h2>{news ? "Editar noticia" : "Postar Nova Notícia"}</h2>
>>>>>>> 8c532c4 (updates)
                    <div onClick={removeForm} className="modeal-content-top-close">
                        <p>Fechar</p>
                        <IoClose/>
                    </div>
                </div>
<<<<<<< HEAD
                <form id="form-noticia" method="post" encType="multipart/form-data">
                    
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <label>Título</label>
                        <input className="modal-content-input" type="text" name="titulo" onChange={(e) => setName(e.target.value)} required />
=======
                <form onSubmit={handleEdit}>
                    
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <label>Título</label>
                        <input className="modal-content-input" type="text" name="titulo" onChange={(e) => setTitle(e.target.value)} required />
>>>>>>> 8c532c4 (updates)
                    </div>

                    <div style={{display:'flex', flexDirection:'column'}}>
                        <label htmlFor="resumo">Descrição</label>
                        <input
                            className="modal-content-input"
                            type="text"
                            id="resumo"
                            name="resumo"
                            maxLength="200"
                            placeholder="Máximo 2 linhas"
<<<<<<< HEAD
=======
                            onChange={(e) => setDescription(e.target.value)}
>>>>>>> 8c532c4 (updates)
                        />
                    </div>

                    <div style={{display:'flex', flexDirection:'column'}}>
                        <label htmlFor="imagem">Imagem</label>
                        <input type="file" id="imagem" name="imagem" accept="image/*" />
                    </div>

                    <div style={{display:'flex', flexDirection:'column'}}>
                        <label htmlFor="categoria">Categoria</label>
                        <select className="modal-content-input" id="categoria" name="categoria" required>
                            <option value="">Selecione</option>
                            <option value="Futebol">Futebol</option>
                            <option value="Futsal">Futsal</option>
                            <option value="Basquete">Basquete</option>
                            <option value="Vôlei">Vôlei</option>
                        </select>
                    </div>

<<<<<<< HEAD
                    <button type="submit" className="modeal-content-btn">Postar</button>
=======
                    <button type="submit" className="modeal-content-btn">{news ? "Salvar Alterações" : "Postar"}</button>
>>>>>>> 8c532c4 (updates)
                </form>
            </div>
        </div>
    );
};

export default AdminNewsRegister;
