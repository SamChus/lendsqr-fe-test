
import arrow from "@/assets/svgs/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const BackArrow = () => {
  const router = useNavigate();

  return (
    <figure>
      <img
        className="goBackButton"
        src={arrow}
        alt="go back"
        onClick={() => router(-1)}
      />
    </figure>
  );
};

export default BackArrow;
