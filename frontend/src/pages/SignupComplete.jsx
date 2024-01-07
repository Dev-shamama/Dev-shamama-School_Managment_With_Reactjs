import { Link } from "react-router-dom";
import { Button } from "../components/Styles/style-button-component/Button";
import {
  Form,
  Input,
  InputGroup,
  InputIcon,
} from "../components/Styles/style-input-component/Input.styled";
import {
  IoLockClosedOutline,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { AuthContainer } from "./StyleComponent/Auth.styled";
import loginImage from "../assets/img/signpage.svg";
import Footer from "../components/Layout/Footer";

const Signup = () => {
  return (
    <>
      <AuthContainer>
        <div className="authBox" style={{ flexDirection: "row-reverse" }}>
          <div className="leftSide">
            <img src={loginImage} alt="" />
          </div>

          <div className="rightSide">
            <h2>Student Sign Up</h2>
            <p>Hey enter your detail to sign up to your account</p>

            <Form>
              <InputGroup>
                <InputIcon>
                  <IoPersonOutline />
                </InputIcon>
                <Input type="text" placeholder="Enter Your Username" />
              </InputGroup>

              <InputGroup>
                <InputIcon>
                  <IoMailOutline />
                </InputIcon>
                <Input type="email" placeholder="Enter Your Email" />
              </InputGroup>

              <InputGroup>
                <InputIcon>
                  <IoLockClosedOutline />
                </InputIcon>
                <Input type="password" placeholder="Enter Your Password" />
              </InputGroup>

              <InputGroup>
                <InputIcon>
                  <IoLockClosedOutline />
                </InputIcon>
                <Input
                  type="password"
                  placeholder="Enter Your Confirm Password"
                />
              </InputGroup>

              <Button type="submit">Sign Up</Button>
            </Form>

            <p>
              Already have an account? <Link to="/login">Login Now</Link>
            </p>
          </div>
        </div>
      </AuthContainer>
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Signup;
