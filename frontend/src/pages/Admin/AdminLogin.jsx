import { AuthContainer } from "../StyleComponent/Auth.styled";
import {
  Form,
  Input,
  InputGroup,
  InputIcon,
} from "../../components/Styles/style-input-component/Input.styled";
import {
  IoCheckmarkCircle,
  IoCloseCircleSharp,
  IoLockClosedOutline,
  IoMailOutline,
} from "react-icons/io5";
import { Button } from "../../components/Styles/style-button-component/Button";
import adminloginImage from "../../assets/img/adminlogin.jpg";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin, resetMessage } from "../../store/adminReducer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
import { resetError } from "../../store/studentReducer";
const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);

  const { message, loading, error, isAuthenticated } = useSelector(
    (state) => state.admin
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
    if (isAuthenticated === true) {
      navigate("/admin");
    }
    if (message) {
      showAlert(<IoCheckmarkCircle />, "Success", message);
    }
    if (error) {
      showAlert(<IoCloseCircleSharp />, "Error", error);
    }
  }, [isAuthenticated, message, error]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminFormSubmit = (e) => {
    e.preventDefault();
    let loginData = { email: email, password: password };
    dispatch(adminLogin(loginData));
    navigate("/admin");
  };

  return (
    <>
      <Alert alert={alert} />

      <AuthContainer>
        <div className="authBox">
          <div className="leftSide">
            <img src={adminloginImage} alt="" />
          </div>

          <div className="rightSide">
            <h2>Admin Login</h2>
            <p>Hey enter your detail to sign in to your account</p>

            <Form onSubmit={adminFormSubmit}>
              <InputGroup>
                <InputIcon>
                  <IoMailOutline />
                </InputIcon>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter Your Email"
                />
              </InputGroup>

              <InputGroup>
                <InputIcon>
                  <IoLockClosedOutline />
                </InputIcon>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Enter Your Password"
                />
              </InputGroup>

              <Button type="submit" disabled={loading === true ? true : false}>
                {loading === true ? "Loading..." : "Log in"}
              </Button>
            </Form>
          </div>
        </div>
      </AuthContainer>
    </>
  );
};

export default AdminLogin;
