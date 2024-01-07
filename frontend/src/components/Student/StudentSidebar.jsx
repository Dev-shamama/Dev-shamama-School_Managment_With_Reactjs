import {
  AdminMenu,
  AdminNavbar,
  AdminSidebarComponent,
  MainSectionAdmin,
} from "./StudentSidebar.styled";
import {
  IoArrowForward,
  IoCaretDownSharp,
  IoCheckmarkCircle,
  IoCloseCircleSharp,
  IoLogOutOutline,
  IoLogoUsd,
  IoNotificationsOutline,
  IoPersonOutline,
  IoRibbonOutline,
  IoSchoolOutline,
  IoSettingsOutline,
  IoSpeedometerOutline,
} from "react-icons/io5";
import ProfileImage from "../../assets/img/profile.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetError,
  resetMessage,
  studentLoadData,
  studentLogout,
} from "../../store/studentReducer";
import Alert from "../Alert/Alert";
import { getMarksSingle } from "../../store/marksReducer";
const AdminSidebar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, data, message, error } = useSelector(
    (state) => state.students
  );
  const { marks } = useSelector((state) => state.marks);

  const [avatar, setAvatar] = useState(data.avatar && data.avatar.url);
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

  const ref = useRef();
  const changeMenu = useRef();
  const changeMainSection = useRef();
  const location = useLocation();
  const accountOpenMenu = () => {
    ref.current.classList.toggle("active");
  };

  const Logout = () => {
    dispatch(studentLogout());
  };

  const smallMenu = () => {
    changeMenu.current.classList.toggle("mainActive");
    changeMainSection.current.classList.toggle("active");

    if (localStorage.getItem("SidebarSmall") === "true") {
      localStorage.setItem("SidebarSmall", false);
    } else {
      localStorage.setItem("SidebarSmall", true);
    }
  };

  useEffect(() => {
    if (message) {
      showAlert(<IoCheckmarkCircle />, "Success", message);
    }
    if (error) {
      showAlert(<IoCloseCircleSharp />, "Error", error);
    }
    dispatch(studentLoadData());
    if (isAuthenticated === false) {
      navigate("/login");
    }
    
    dispatch(getMarksSingle());

  }, [dispatch, isAuthenticated, message, error]);

  return (
    <>
      <Alert alert={alert} />
      <AdminSidebarComponent>
        <AdminNavbar>
          <div className="logo">
            <h4>Dashboard</h4>
          </div>
          <div className="menu">
            <li>
              <span className="iconNotification">
                <IoNotificationsOutline />
              </span>

              <span className="countNotification">
                <span>4</span>
              </span>
            </li>

            <li onClick={accountOpenMenu}>
              <div className="account">
                <div className="icon">
                  <IoPersonOutline />
                </div>
                <div className="text">{data.email}</div>
                <div className="arrow">
                  <IoCaretDownSharp />
                </div>

                <div className="accountMenu" ref={ref}>
                  <div className="profile">
                    <div className="img">
                      <img
                        src={avatar === "sample" ? ProfileImage : avatar}
                        alt="profile_Image"
                      />
                    </div>
                    <div className="detail">
                      <h4>{data.name}</h4>
                      <p>{data.email}</p>
                    </div>
                  </div>

                  <div className="detailAccount">
                    <Link className="item" to="/student">
                      <div className="icon">
                        <IoSpeedometerOutline />
                      </div>
                      <div className="text">Dashboard</div>
                    </Link>
                    <Link className="item" to="/student/fees">
                      <div className="icon">
                        <IoLogoUsd />
                      </div>
                      <div className="text">Fees</div>
                    </Link>

                    <Link className="item" to="/student/profile">
                      <div className="icon">
                        <IoSettingsOutline />
                      </div>
                      <div className="text">Setting</div>
                    </Link>

                    <Link className="item" onClick={Logout}>
                      <div className="icon">
                        <IoLogOutOutline />
                      </div>
                      <div className="text">Logout</div>
                    </Link>
                  </div>
                </div>


              </div>
            </li>
          </div>
        </AdminNavbar>

        <AdminMenu ref={changeMenu}>
          <div className="profile">
            <div className="img">
              <img
                src={avatar === "sample" ? ProfileImage : avatar}
                alt="profile_Image"
              />
            </div>
            <div className="detail">
              <h4>{data.name}</h4>
              <p>Administrator</p>
            </div>
            <div className="arrowResponsive">
              <span className="icon" onClick={smallMenu}>
                <IoArrowForward />
              </span>
            </div>

          </div>

          <div className="ItemBox">

            <Link
              to="/student/"
              className={`menuItem ${
                location.pathname === "/student" && "active"
              }`}
            >
              <div className="headingWithIcon">
                <div className="icon">
                  <IoSpeedometerOutline />
                </div>
                <h4 className="text">Dashboard</h4>
              </div>
              <div className="notification">
                <span>3</span>
              </div>
            </Link>

            <Link
              to="/student/examlogin"
              className={`menuItem ${
                location.pathname === "/student/examlogin" && "active"
              }`}
            >
              <div className="headingWithIcon">
                <div className="icon">
                  <IoRibbonOutline />
                </div>
                <h4 className="text">Exam</h4>
              </div>

              <div className="notification">
                <span>3</span>
              </div>
            </Link>

            {marks.length !== 0 && <Link
              to="/student/marksstudents"
              className={`menuItem ${
                location.pathname === "/student/marksstudents" && "active"
              }`}
            >
              <div className="headingWithIcon">
                <div className="icon">
                  <IoSchoolOutline />
                </div>
                <h4 className="text">Marks</h4>
              </div>

              <div className="notification">
                <span>3</span>
              </div>
            </Link>}

            <Link
              to="/student/fees"
              className={`menuItem ${
                location.pathname === "/student/fees" && "active"
              }`}
            >
              <div className="headingWithIcon">
                <div className="icon">
                  <IoLogoUsd />
                </div>
                <h4 className="text">Fees</h4>
              </div>

              <div className="notification">
                <span>3</span>
              </div>
            </Link>

            <Link
              to="/student/profile"
              className={`menuItem ${
                location.pathname === "/student/profile" && "active"
              }`}
            >
              <div className="headingWithIcon">
                <div className="icon">
                  <IoSettingsOutline />
                </div>
                <h4 className="text">Setting</h4>
              </div>
            </Link>

            <Link to="#" onClick={Logout} className={`menuItem`}>
              <div className="headingWithIcon">
                <div className="icon">
                  <IoLogOutOutline />
                </div>
                <h4 className="text">Logout</h4>
              </div>
            </Link>
          </div>
        </AdminMenu>

        <MainSectionAdmin ref={changeMainSection}>{props.component}</MainSectionAdmin>
      </AdminSidebarComponent>
    </>
  );
};

export default AdminSidebar;
