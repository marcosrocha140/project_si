import { FaRegEdit, FaEyeSlash } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";


<<<<<<< HEAD
const AdminNewsCard = ({image, autor, title, description}) => {
=======
const AdminNewsCard = ({image, autor, title, description, onEdit}) => {
>>>>>>> 8c532c4 (updates)
    return(
        <div className="adminnewscard">
            <div>
                <img
                    className="cardImg"
                    src={image}
                    alt="Foto da notícia"
                />
            </div>

            <div className="card_news_infors">
                <p className="card_news_infors_date">
                    <strong>Publicado:</strong> 24/05/2025 por <strong>{autor}</strong>
                </p>

                <h4>{title}</h4>
                <p>{description}</p>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
<<<<<<< HEAD
                    <button className="table_btnEdit">
=======
                    <button className="table_btnEdit" onClick={onEdit}>
>>>>>>> 8c532c4 (updates)
                        <FaRegEdit /> Editar
                    </button>

                    <button className="table_btnHidden">
                            <FaEyeSlash /> Ocultar
                    </button>

                    <button className="table_btnDelete">
                        <RiDeleteBin6Line /> Excluir
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AdminNewsCard