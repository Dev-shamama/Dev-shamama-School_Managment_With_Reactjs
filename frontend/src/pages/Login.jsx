// import { Link } from "react-router-dom";
import { Button } from "../components/Styles/style-button-component/Button";
import {
  Form,
  Input,
  InputGroup,
  InputIcon,
} from "../components/Styles/style-input-component/Input.styled";

import { IoCheckmarkCircle, IoLockClosedOutline, IoMailOutline } from "react-icons/io5";

import { AuthContainer } from "./StyleComponent/Auth.styled";
import loginImage from "../assets/img/studentLogin.svg";
import Footer from "../components/Layout/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetMessage,
  resetError,
  studentLogin,
} from "../store/studentReducer";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert/Alert";
import { IoCloseCircleSharp } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, message, error, loading } = useSelector(
    (state) => state.students
  );

  const showAlert = (icon, type, message) => {
    setAlert({
      icon: icon,
      title: type,
      text: message,
    });

    setTimeout(() => {
      setAlert(null);
      dispatch(resetMessage());
      dispatch(resetError());
    }, 3000);
  };

  useEffect(() => {
    if (message) {
      showAlert(<IoCheckmarkCircle />, "Success", message);
    }
    if (error) {
      showAlert(<IoCloseCircleSharp />, "Error", error);
    }
    if (isAuthenticated === true) {
      navigate("/student/");
    }
  }, [isAuthenticated, message, error]);

  const StudentFormSubmitHandler = (e) => {
    e.preventDefault();
    const data = { email, password };
    dispatch(studentLogin(data));
  };
  return (
    <>
      <Alert alert={alert} />
      <AuthContainer>
        <div className="authBox">
          <div className="leftSide">
            <img src={loginImage} alt="login image" />
          </div>

          <div className="rightSide">
            <h2>Student Login</h2>
            <p>Hey enter your detail to sign in to your account</p>
            <Form onSubmit={StudentFormSubmitHandler}>
              <InputGroup>
                <InputIcon>
                  <IoMailOutline />
                </InputIcon>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                />
              </InputGroup>

              <InputGroup>
                <InputIcon>
                  <IoLockClosedOutline />
                </InputIcon>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                />
              </InputGroup>

              <Button type="submit" disabled={loading === true ? true : false}>
                {loading === true ? "Loading..." : "Log in"}
              </Button>
            </Form>

            {/* <p>or Sign in with</p>
            <div className="platformLogin">
              <PlatformButton>
                <div className="icon">
                  <IoLogoFacebook />
                </div>
                <span>Facebook</span>
              </PlatformButton>

              <PlatformButton>
                <div className="icon">
                  <IoLogoGoogle />
                </div>
                <span>Google</span>
              </PlatformButton>
            </div>
            <p>
              Don`t have an account? <Link to="/signup">Signup Now</Link>
            </p> */}
          </div>
        </div>
      </AuthContainer>
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Login;
