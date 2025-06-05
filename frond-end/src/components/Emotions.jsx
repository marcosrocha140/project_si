import { FcLike } from "react-icons/fc";
import { MdOutlineMessage } from "react-icons/md";
import { FaShare } from "react-icons/fa";

const Emotions = ({likes}) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", textAlign:'center' }}>
      <p>
        <FcLike/>
        <span>
          {likes} curtidas
        </span>
      </p>

      <p>
        <MdOutlineMessage />
        Comentar
        {/* <span style={{color:'black'}}>Ainda não há comentários!</span> */}
      </p>

      <p>
        <FaShare />
        compartilhar
      </p>
    </div>
  );
};

export default Emotions;
