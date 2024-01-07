import { Link } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { FooterContainer } from "../../pages/StyleComponent/Home.styled";
import { Flex } from "../Styles/style-flex-component/Flex";
const Footer = () => {
  return (
    <Flex>
      <FooterContainer>
        <div className="item">
          <div className="logo">
            <h1>iSchool.com</h1>
          </div>
          <div className="social-icon">
            <Link to="/">
              <IoLogoFacebook />
            </Link>
            <Link to="/">
              <IoLogoLinkedin />
            </Link>
            <Link to="/">
              <IoLogoTwitter />
            </Link>
            <Link to="/">
              <IoLogoGithub />
            </Link>
          </div>
          <div className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/">Service</Link>
            </li>
          </div>
        </div>
      </FooterContainer>
    </Flex>
  );
};

export default Footer;
