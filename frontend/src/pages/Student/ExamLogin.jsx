import { useDispatch, useSelector } from "react-redux";
import StudentSidebar from "../../components/Student/StudentSidebar";
import { ExamLoginComponent } from "./StyleComponent/ExamLogin.styled";
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
import { OpeationButton } from "../../components/Styles/style-button-component/Button";
import { useEffect, useState } from "react";
import {
  getExamPassword,
  resetError,
  resetMessage,
} from "../../store/examReducer";
import { loginExamPassword } from "../../store/examReducer";
import Alert from "../../components/Alert/Alert";
import { useNavigate } from "react-router-dom";
const Data = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading } = useSelector((state) => state.students);
  const { message, error } = useSelector((state) => state.exam);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);

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

  if (localStorage.getItem("ExamAuth")) {
    navigate("/student/examboard");
  }

  useEffect(() => {
    if (message) {
      showAlert(<IoCheckmarkCircle />, "Success", message);
    }
    if (error) {
      showAlert(<IoCloseCircleSharp />, "Error", error);
    }
  }, [message, error]);

  const loginExam = (e) => {
    e.preventDefault();
    let loginData = { email: email, password: password };
    dispatch(loginExamPassword(loginData));
  };

  const getExamLoginPassword = () => {
    dispatch(getExamPassword());
  };

  return (
    <>
      <Alert alert={alert} />

      <ExamLoginComponent>
        <div className="panelHeading">
          <h1>Student Exam Board</h1>
        </div>

        <div className="examLogin">
          <h2>Student Login For Exam</h2>

          <Form onSubmit={loginExam}>
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

            <OpeationButton
              type="submit"
              className="primary"
              disabled={loading === true ? true : false}
            >
              {loading === true ? "Loading..." : "Log in"}
            </OpeationButton>
          </Form>
          <p onClick={getExamLoginPassword}>Get Password?</p>
        </div>
      </ExamLoginComponent>
    </>
  );
};

const ExamLogin = () => {
  return <StudentSidebar component={Data()} />;
};

export default ExamLogin;
