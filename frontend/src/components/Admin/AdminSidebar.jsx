import {
  AdminMenu,
  AdminNavbar,
  AdminSidebarComponent,
  MainSectionAdmin,
} from "./AdminSidebar.styled";
import {
  IoArrowForward,
  IoCarSportSharp,
  IoCaretDownSharp,
  IoLogOutOutline,
  IoLogoUsd,
  IoNotificationsOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoRibbonOutline,
  IoSchoolOutline,
  IoSendOutline,
  IoSettingsOutline,
  IoSpeedometerOutline,
} from "react-icons/io5";
import ProfileImage from "../../assets/img/profile.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminLogout, userLoadData } from "../../store/adminReducer";
const AdminSidebar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.admin);
  const [avatar, setAvatar] = useState(data.avatar && data.avatar.url);

  const ref = useRef();
  const changeMenu = useRef();
  const changeMainSection = useRef();
  const location = useLocation();

  // Account Dropdown Menu
  const accountOpenMenu = () => {
    ref.current.classList.toggle("active");
  };

  // Logout Function
  const Logout = () => {
    dispatch(adminLogout());
  };

  // Sidebar Menu Controller
  const smallMenu = () => {
    changeMenu.current.classList.toggle("mainActive");
    changeMainSection.current.classList.toggle("active");
  };
  


  return (
    <>
      <AdminSidebarComponent>
        <AdminNavbar>
          <div className="logo">
            <h4>Admin Panel</h4>
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
                <div className="text">Shamama Ali</div>
                <div className="arrow">
                  <IoCaretDownSharp />
                </div>

                <div className="accountMenu" ref={ref}>
                  <div className="porfile">
                    <div className="img">
                      <img
                        src={avatar === "sample" ? ProfileImage : avatar}
                        alt="profile_Image"
                      />
                    </div>
                    <div className="detail">
                      <h4>Shamama Ali</h4>
                      <p>rohishamama@gmail.com</p>
                    </div>
                  </div>

                  <div className="detailAccount">
                    <Link className="item" to="/admin/">
                      <div className="icon">
                        <IoSpeedometerOutline />
                      </div>
                      <div className="text">Dashboard</div>
                    </Link>

                    <Link className="item" to="/admin/student">
                      <div className="icon">
                        <IoPeopleOutline />
                      </div>
                      <div className="text">Students</div>
                    </Link>

                    <Link className="item" to="/admin/profile">
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
              <h4>Shamama Ali</h4>
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
              to="/admin/"
              className={`menuItem ${
                location.pathname === "/admin/" && "active"
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
              to="/admin/student"
              className={`menuItem ${
                location.pathname === "/admin/student" && "active"
              }`}
            >
              <div className="headingWithIcon">
                <div className="icon">
                  <IoPersonOutline />
                </div>
                <h4 className="text">Students</h4>
              </div>

              <div className="notification">
                <span>3</span>
              </div>
            </Link>

            <Link
              to="/admin/examresult"
              className={`menuItem ${
                location.pathname === "/admin/examresult" && "active"
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

            <Link
              to="/admin/marks"
              className={`menuItem ${
                location.pathname === "/admin/marks" && "active"
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
            </Link>

            <Link
              to="/admin/fees"
              className={`menuItem ${
                location.pathname === "/admin/fees" && "active"
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
              to="/admin/contact"
              className={`menuItem ${
                location.pathname === "/admin/contact" && "active"
              }`}
            >
              <div className="headingWithIcon">
                <div className="icon">
                  <IoSendOutline />
                </div>
                <h4 className="text">Contact</h4>
              </div>

              <div className="notification">
                <span>3</span>
              </div>
            </Link>

            <Link
              to="/admin/profile"
              className={`menuItem ${
                location.pathname === "/admin/profile" && "active"
              }`}
            >
              <div className="headingWithIcon">
                <div className="icon">
                  <IoSettingsOutline />
                </div>
                <h4 className="text">Setting</h4>
              </div>
              <div className="notification">
                <span>3</span>
              </div>
            </Link>

            <Link
              to="#"
              onClick={Logout}
              className={`menuItem ${
                location.pathname === "/admin/asdasdsa" && "active"
              }`}
            >
              <div className="headingWithIcon">
                <div className="icon">
                  <IoLogOutOutline />
                </div>
                <h4 className="text">Logout</h4>
              </div>

              <div className="notification">
                <span>3</span>
              </div>
            </Link>
          </div>
        </AdminMenu>

        <MainSectionAdmin ref={changeMainSection}>
          {props.component}
        </MainSectionAdmin>
      </AdminSidebarComponent>
    </>
  );
};

export default AdminSidebar;
