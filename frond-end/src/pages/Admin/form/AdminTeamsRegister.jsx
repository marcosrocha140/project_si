import { IoClose } from "react-icons/io5";


const AdminTeamsRegister = ({removeForm}) => {

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modeal-content-top">
                    <h2>Cadastrar Novo Clube</h2>
                    <div onClick={removeForm} className="modeal-content-top-close">
                        <p>Fechar</p>
                        <IoClose/>
                    </div>
                </div>
                <form id="form-noticia" method="post" encType="multipart/form-data">
                    
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <label>Nome</label>
                        <input className="modal-content-input" type="text" name="titulo" placeholder="Ex: [Nome do clube] F.C" required />
                    </div>

                    <div style={{display:'flex', flexDirection:'column'}}>
                        <label htmlFor="imagem">Logo do Clube</label>
                        <input type="file" id="imagem" name="imagem" accept="image/*" />
                    </div>

                    <div style={{display:'flex', flexDirection:'column'}}>
                        <label>Cidade</label>
                        <input className="modal-content-input" placeholder="Localidade do Clube..." type="text" name="titulo" required />
                    </div>

                    <div style={{display:'flex', flexDirection:'column'}}>
                        <label>CEO</label>
                        <input className="modal-content-input" placeholder="Nome do treinador(a)..." type="text" name="titulo" required />
                    </div>

                    <div style={{display:'flex', flexDirection:'column', margin:'6px 0'}}>
                        <label htmlFor="categoria">Categoria</label>
                        <div style={{display:'flex', gap: '15px'}}>
                            <label>
                                <input type="radio"  name="categoria" value="Masculino" required />
                                Masculino
                            </label>

                            <label>
                                <input type="radio"  name="categoria" value="feminino" required />
                                Feminino
                            </label>
                        </div>
                    </div>

                    <div style={{display:'flex', flexDirection:'column'}}>
                        <label htmlFor="categoria">Modalidade</label>
                        <select className="modal-content-input" id="categoria" name="categoria" required>
                            <option value="">Selecione</option>
                            <option value="Futebol">Futebol</option>
                            <option value="Futsal">Futsal</option>
                            <option value="Basquete">Basquete</option>
                            <option value="Vôlei">Vôlei</option>
                        </select>
                    </div>

                    <button type="submit" className="modeal-content-btn">Cadastrar clube</button>
                </form>
            </div>
        </div>
    );
};

export default AdminTeamsRegister;
