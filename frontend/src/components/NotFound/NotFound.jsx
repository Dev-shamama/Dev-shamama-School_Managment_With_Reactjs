import { Link } from "react-router-dom";
import NotFoundImage from "../../assets/img/notfound.svg";
import { NotFoundContainer } from "./NotFound.styled";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src={NotFoundImage} />
      <Link to="/">Go Home</Link>
    </NotFoundContainer>
  );
};

export default NotFound;
