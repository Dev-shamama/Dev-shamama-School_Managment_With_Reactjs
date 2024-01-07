import StudentSidebar from "../../components/Student/StudentSidebar";

import { StudentProfileComponent } from "./StyleComponent/StudentProfileSetting.styled";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import profileImage from "../../assets/img/profile.jpg";
import {
  Form,
  Input,
  InputGroup,
  InputIcon,
} from "../../components/Styles/style-input-component/Input.styled";
import { OpeationButton } from "../../components/Styles/style-button-component/Button";
import {
  IoCameraOutline,
  IoCheckmarkCircle,
  IoCheckmarkCircleSharp,
  IoCloseCircleSharp,
  IoLockClosedOutline,
  IoLockOpenOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  studentProfileUpdate,
  resetMessage,
  studentLoadData,
  studentPasswordUpdate,
  resetError,
} from "../../store/studentReducer";
import Alert from "../../components/Alert/Alert";
Chart.register(CategoryScale);

const Data = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, message, error } = useSelector((state) => state.students);

  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [oldAvatar, setOldAvatar] = useState(data.avatar && data.avatar.url);
  const [newAvatar, setNewAvatar] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [edit, setEdit] = useState(false);
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

  useEffect(() => {
    if (message) {
      showAlert(<IoCheckmarkCircle />, "Success", message);
    }
    if (error) {
      showAlert(<IoCloseCircleSharp />, "Error", error);
    }
  }, [message, error]);

  const ref = useRef();
  const ProfileImageUpload = () => {
    ref.current.click();
  };

  const updateImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      setNewAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const UpdateStudentProfile = (e) => {
    e.preventDefault();
    const data = { avatar: newAvatar };
    dispatch(studentProfileUpdate(data));
    dispatch(studentLoadData(data));
  };

  const passwordUpdateHandler = (e) => {
    e.preventDefault();
    const data = { oldPassword, newPassword, confirmPassword };
    dispatch(studentPasswordUpdate(data));
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <Alert alert={alert} />

      <StudentProfileComponent>
        <div className="panelHeading">
          <h1>Student Profile</h1>
        </div>

        <div className="adminProfile">
          <div className="imgBox">
            <div className="img" onClick={ProfileImageUpload}>
              <img
                src={oldAvatar === "sample" ? profileImage : oldAvatar}
                alt="profile_Image"
              />
              <div className="box">
                <span>
                  <IoCameraOutline />
                </span>
              </div>
            </div>
          </div>

          <Form className="profileForm" onSubmit={UpdateStudentProfile}>
            <h2>Update Avatar</h2>
            <input
              type="file"
              disabled={edit !== false ? false : true}
              onChange={updateImage}
              hidden
              ref={ref}
            />

            <div className="buttonEditAndUpdate">
              {edit === true && (
                <OpeationButton className="primary" type="submit">
                  Update
                </OpeationButton>
              )}

              {edit !== true && (
                <OpeationButton
                  className="danger"
                  type="button"
                  onClick={() => setEdit(true)}
                >
                  Edit
                </OpeationButton>
              )}
            </div>
          </Form>

          <Form className="profileForm" onSubmit={passwordUpdateHandler}>
            <h2>Password Update</h2>
            <InputGroup>
              <InputIcon>
                <IoLockClosedOutline />
              </InputIcon>
              <Input
                type="text"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter Your Old Password"
              />
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoLockOpenOutline />
              </InputIcon>
              <Input
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter Your New Password"
              />
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoLockClosedOutline />
              </InputIcon>
              <Input
                type="text"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter Your Confirm Password"
              />
            </InputGroup>

            <OpeationButton className="primary" type="submit">
              Password Update
            </OpeationButton>
          </Form>
        </div>
      </StudentProfileComponent>
    </>
  );
};

const Dashboard = () => {
  return <StudentSidebar component={Data()} />;
};
export default Dashboard;
