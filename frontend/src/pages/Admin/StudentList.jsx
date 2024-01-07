import { Link } from "react-router-dom";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { StudentComponent } from "./StyleComponent/StudentList.styled";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { ModelContainer } from "../../components/modal/Model.styled";

import {
  Form,
  Input,
  InputGroup,
  InputIcon,
  SelectMenu,
} from "../../components/Styles/style-input-component/Input.styled";

import { useEffect, useRef, useState } from "react";
import {
  IoBookOutline,
  IoCalendarOutline,
  IoCheckmarkCircle,
  IoClose,
  IoCloseCircleSharp,
  IoEllipsisHorizontalOutline,
  IoLockClosedOutline,
  IoMailOutline,
  IoManOutline,
  IoPersonOutline,
} from "react-icons/io5";

import { OpeationButton } from "../../components/Styles/style-button-component/Button";
import {
  createStudent,
  getAllStudent,
  resetError,
  resetMessage,
  statusStudent,
} from "../../store/adminReducer";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../../components/Alert/Alert";
Chart.register(CategoryScale);

const Data = () => {
  const refs = useRef();
  const dispatch = useDispatch();
  const refRegisterstudents = useRef();

  const { students, message, error, loading } = useSelector((state) => state.admin);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [date, setDate] = useState("");
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
  // Register Model Open
  const closeModelRegisterStudentHandler = () => {
    refRegisterstudents.current.classList.remove("active");
  };

  // Register Model Open
  const openModelRegisterStudentHandler = () => {
    refRegisterstudents.current.classList.add("active");
  };

  // Option Open And Close
  const optionOpen = () => {
    refs.current.classList.toggle("active");
  };

  // Student Register Function
  const studentRegister = (e) => {
    e.preventDefault();
    const data = { name, email, password, gender, course, date };
    dispatch(createStudent(data));
    refRegisterstudents.current.classList.remove("active");
  };

  // Status Update Function
  const statusHandler = (id, status) => {
    dispatch(statusStudent(id, status));
  };

  useEffect(() => {
    dispatch(getAllStudent());
    if (message) {
      showAlert(<IoCheckmarkCircle />, "Success", message);
    }
    if (error) {
      showAlert(<IoCloseCircleSharp />, "Error", error);
    }
  }, [message, error]);

  return (
    <>
      <Alert alert={alert} />

      {/* Students Register */}
      <ModelContainer ref={refRegisterstudents}>
        <div className="ModelBox">
          <div className="modelTitle">
            <h2>Student Register</h2>
            <div className="modelClose">
              <span onClick={closeModelRegisterStudentHandler}>
                <IoClose />
              </span>
            </div>
          </div>

          <Form onSubmit={studentRegister}>
            <InputGroup>
              <InputIcon>
                <IoPersonOutline />
              </InputIcon>
              <Input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Enter Your Name"
              />
            </InputGroup>
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

            <InputGroup>
              <InputIcon>
                <IoManOutline />
              </InputIcon>
              <SelectMenu onChange={(e) => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </SelectMenu>
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoBookOutline />
              </InputIcon>
              <SelectMenu onChange={(e) => setCourse(e.target.value)}>
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

            <OpeationButton className="primary" type="submit">
              {loading ? "loading..." : "Register"}
            </OpeationButton>
          </Form>
        </div>
      </ModelContainer>

      <StudentComponent>
        <h1>Student List</h1>

        <div className="studentList">
          <div className="options" onClick={optionOpen}>
            <span>
              <IoEllipsisHorizontalOutline />
            </span>
            <div className="optionsMenu" ref={refs}>
              <p onClick={openModelRegisterStudentHandler}>Register Student</p>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>St.Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Exam Paper</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {students &&
                students.map((std) => {
                  return (
                    <tr key={std._id}>
                      <td>#{std.registerId}</td>
                      <td>{std.name}</td>
                      <td>{std.email}</td>
                      <td>{std.course}</td>
                      <td>
                        {std.exampassword === "" ? "Empty" : std.exampassword}
                      </td>
                      <td>
                        <Link
                          className={`statusBtn ${
                            std.status === "Active" ? "success" : "disabled"
                          }`}
                          onClick={() => statusHandler(std._id, std.status)}
                        >
                          {std.status}
                        </Link>
                        <Link
                          to={`/admin/studentdetail/${std._id}`}
                          className="statusBtn primary"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </StudentComponent>
    </>
  );
};

const StudentList = () => {
  return <AdminSidebar component={Data()} />;
};

export default StudentList;
