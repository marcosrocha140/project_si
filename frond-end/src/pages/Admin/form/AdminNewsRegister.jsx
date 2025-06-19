import { IoClose } from "react-icons/io5";
import { useState } from "react";

const AdminNewsRegister = ({removeForm}) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState();

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modeal-content-top">
                    <h2>Postar Nova Notícia</h2>
                    <div onClick={removeForm} className="modeal-content-top-close">
                        <p>Fechar</p>
                        <IoClose/>
                    </div>
                </div>
                <form id="form-noticia" method="post" encType="multipart/form-data">
                    
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <label>Título</label>
                        <input className="modal-content-input" type="text" name="titulo" onChange={(e) => setName(e.target.value)} required />
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

                    <button type="submit" className="modeal-content-btn">Postar</button>
                </form>
            </div>
        </div>
    );
};

export default AdminNewsRegister;
