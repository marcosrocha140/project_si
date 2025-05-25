import { FcLikePlaceholder } from "react-icons/fc";
import { MdOutlineMessage } from "react-icons/md";
import { FaShare } from "react-icons/fa";

const Emotions = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p>
        <FcLikePlaceholder />
        Gostei
      </p>

      <p>
        <MdOutlineMessage />
        Comentar
      </p>

      <p>
        <FaShare />
        compartilhar
      </p>
    </div>
  );
};

export default Emotions;
