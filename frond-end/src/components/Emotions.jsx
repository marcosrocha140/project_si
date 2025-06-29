import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { MdOutlineMessage } from "react-icons/md";
import { FaShare } from "react-icons/fa";

const Emotions = ({likes, liked, msgClick}) => {
  return (
    <div className="emotions">
      <p>
        {
          liked ? <FcLike onClick={liked}/> : <FcLikePlaceholder onClick={liked}/>
        }
        <span>
          {likes} curtidas
        </span>
      </p>

      <p onClick={msgClick}>
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
