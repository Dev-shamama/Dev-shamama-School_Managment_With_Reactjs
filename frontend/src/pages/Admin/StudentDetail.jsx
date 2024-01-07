import AdminSidebar from "../../components/Admin/AdminSidebar";
import { OpeationButton } from "../../components/Styles/style-button-component/Button";
import { StudentDetailComponent } from "./StyleComponent/StudentDetail.styled";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import {
  deleteStudent,
  getSingleStudent,
  resetMessage,
} from "../../store/adminReducer";
import UserProfileImage from "../../assets/img/profile.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IoCameraOutline,
  IoImageOutline,
  IoCalendarOutline,
  IoMailOutline,
  IoManOutline,
  IoPersonOutline,
  IoBookOutline,
  IoCheckmarkCircle,
  IoCloseCircleSharp,
  IoClose,
} from "react-icons/io5";
import { ModelContainer } from "../../components/modal/Model.styled";
import {
  Form,
  Input,
  InputGroup,
  InputIcon,
  SelectMenu,
} from "../../components/Styles/style-input-component/Input.styled";
import { adminUserProfileUpdate, resetError } from "../../store/adminReducer";
import Alert from "../../components/Alert/Alert";

Chart.register(CategoryScale);
const Data = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { studentsDetail, message, error } = useSelector(
    (state) => state.admin
  );

  const ref = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
  const [oldAvatar, setOldAvatar] = useState("");
  const [newAvatar, setNewAvatar] = useState("");
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
    if (studentsDetail && studentsDetail._id !== id) {
      dispatch(getSingleStudent(id));
    } else {
      setName(studentsDetail.name);
      setEmail(studentsDetail.email);
      setGender(studentsDetail.gender);
      setCourse(studentsDetail.course);
      setDate(studentsDetail.createAt);
      setOldAvatar(studentsDetail.avatar);
    }

    if (message) {
      showAlert(<IoCheckmarkCircle />, "Success", message);
    }
    if (error) {
      showAlert(<IoCloseCircleSharp />, "Error", error);
    }
  }, [dispatch, id, message, error, studentsDetail]);

  const updateImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      setNewAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Update Model Open
  const openModelUpdateStudentHandler = () => {
    ref.current.classList.add("active");
  };

  // Update Model Close
  const closeModelUpdateStudentHandler = () => {
    ref.current.classList.remove("active");
  };

  const deleteUser = (id) => {
    dispatch(deleteStudent(id));
    navigate("/admin/student");
  };

  const updateUser = (e) => {
    e.preventDefault();
    const data = { name, email, gender, course, date, avatar: newAvatar };
    dispatch(adminUserProfileUpdate(id, data));
    ref.current.classList.remove("active");
    navigate("/admin/student");
  };

  return (
    <>
      <Alert alert={alert} />

      <ModelContainer ref={ref}>
        <div className="ModelBox">
          <div className="modelTitle">
            <h2>Student Update</h2>
            <div className="modelClose">
              <span onClick={closeModelUpdateStudentHandler}>
                <IoClose />
              </span>
            </div>
          </div>
          <Form onSubmit={updateUser}>
            <InputGroup>
              <InputIcon>
                <IoPersonOutline />
              </InputIcon>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
              />
            </InputGroup>
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
                <IoManOutline />
              </InputIcon>
              <SelectMenu
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </SelectMenu>
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoBookOutline />
              </InputIcon>
              <SelectMenu
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              >
                <option value="">Select Course</option>
                <option value="Web Develpment">Web Develpment</option>
                <option value="Web Designing">Web Designing</option>
                <option value="C.I.T">C.I.T</option>
                <option value="D.I.T">D.I.T</option>
                <option value="Ms Officee">Ms Office</option>
              </SelectMenu>
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoCalendarOutline />
              </InputIcon>
              <Input
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                placeholder="Enter Your Date"
              />
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoImageOutline />
              </InputIcon>
              <Input
                type="file"
                onChange={updateImage}
                placeholder="Enter Your Date"
              />
            </InputGroup>

            <OpeationButton className="primary" type="submit">
              Update
            </OpeationButton>
          </Form>
        </div>
      </ModelContainer>

      <StudentDetailComponent>
        <div className="panelHeading">
          <h1>Student Detail</h1>
        </div>

        <div className="studentDetail">
          <div className="imageBox">
            <div className="img">
              <img src={oldAvatar && oldAvatar.url} alt="profile_Image" />
              <span>
                <IoCameraOutline />
              </span>
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <th>Std. Register ID</th>
                <td>{studentsDetail && studentsDetail.registerId}</td>
              </tr>
              <tr>
                <th>Std. Name</th>
                <td>{studentsDetail && studentsDetail.name}</td>
              </tr>
              <tr>
                <th>Std. Eamil</th>
                <td>{studentsDetail && studentsDetail.email}</td>
              </tr>
              <tr>
                <th>Std. Gender</th>
                <td>{studentsDetail && studentsDetail.gender}</td>
              </tr>
              <tr>
                <th>Std. Course</th>
                <td>{studentsDetail && studentsDetail.course}</td>
              </tr>
              <tr>
                <th>Std. Join Date</th>
                <td>{studentsDetail && studentsDetail.createAt}</td>
              </tr>
              <tr>
                <th>Std. Eliminate</th>
                <td>
                  <div className="operationBox">
                    <OpeationButton
                      className="danger"
                      onClick={() => deleteUser(id)}
                    >
                      Delete
                    </OpeationButton>
                    <OpeationButton
                      className="warning"
                      onClick={() => openModelUpdateStudentHandler(id)}
                    >
                      Update
                    </OpeationButton>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </StudentDetailComponent>
    </>
  );
};

const StudentDetail = () => {
  return <AdminSidebar component={Data()} />;
};
export default StudentDetail;
