import AdminSidebar from "../../components/Admin/AdminSidebar";
import { AdminProfileComponent } from "./StyleComponent/AdminProfileSetting.styled";
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
  IoCloseCircleSharp,
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  adminPasswordUpdate,
  adminProfileUpdate,
  resetError,
  resetMessage,
  userLoadData,
} from "../../store/adminReducer";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
Chart.register(CategoryScale);

const Data = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, message, error } = useSelector((state) => state.admin);
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
  }, [dispatch, message, error]);

  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [oldAvatar, setOldAvatar] = useState(data.avatar && data.avatar.url);
  const [newAvatar, setNewAvatar] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [edit, setEdit] = useState(false);

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

  const UpdateAdminProfile = (e) => {
    e.preventDefault();
    const data = { name, email, avatar: newAvatar };
    dispatch(adminProfileUpdate(data));
    dispatch(userLoadData(data));
    setEdit(false);
  };

  const passwordUpdateHandler = (e) => {
    e.preventDefault();
    const data = { oldPassword, newPassword, confirmPassword };
    dispatch(adminPasswordUpdate(data));
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <Alert alert={alert} />

      <AdminProfileComponent>
        <div className="panelHeading">
          <h1>Admin Profile</h1>
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

          <Form className="profileForm" onSubmit={UpdateAdminProfile}>
            <h2>Profile Update</h2>
            <InputGroup>
              <InputIcon>
                <IoPersonOutline />
              </InputIcon>
              <Input
                type="text"
                disabled={edit !== false ? false : true}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Username"
              />
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoMailOutline />
              </InputIcon>
              <Input
                type="email"
                disabled={edit !== false ? false : true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
              />
            </InputGroup>

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
                  Profile Update
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
      </AdminProfileComponent>
    </>
  );
};

const Dashboard = () => {
  return <AdminSidebar component={Data()} />;
};
export default Dashboard;
