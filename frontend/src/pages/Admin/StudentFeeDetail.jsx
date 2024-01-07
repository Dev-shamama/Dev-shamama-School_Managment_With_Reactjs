import { Link, useParams } from "react-router-dom";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { StudentFeeDetailComponent } from "./StyleComponent/StudentFeeDetail";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import {
  IoCalendarOutline,
  IoCashOutline,
  IoCheckmarkCircle,
  IoClose,
  IoCloseCircleSharp,
  IoEllipsisHorizontalOutline,
  IoMailOutline,
  IoPersonOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { ModelContainer } from "../../components/modal/Model.styled";
import { OpeationButton } from "../../components/Styles/style-button-component/Button";
import {
  Form,
  Input,
  InputGroup,
  InputIcon,
} from "../../components/Styles/style-input-component/Input.styled";
import {
  FeesPaidStudent,
  getFeesStudent,
  resetError,
  resetMessage,
} from "../../store/feeReducer";
import { useDispatch, useSelector } from "react-redux";
import { getSingleStudent } from "../../store/adminReducer";
import Alert from "../../components/Alert/Alert";
Chart.register(CategoryScale);

const Data = () => {
  const { id } = useParams();
  const ref = useRef();
  const refModal = useRef();
  const dispatch = useDispatch();
  const { fees, message, error } = useSelector((state) => state.fees);
  const { studentsDetail } = useSelector((state) => state.admin);

  const [feesPaid, setFeesPaid] = useState("");
  const [date, setDate] = useState("");
  const [alert, setAlert] = useState(null);

  const optionOpen = () => {
    ref.current.classList.toggle("active");
  };

  const FeeModelOpen = () => {
    refModal.current.classList.add("active");
  };
  const closeModelUpdateStudentHandler = () => {
    refModal.current.classList.remove("active");
  };

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

  const FeePaidHandler = (e) => {
    e.preventDefault();
    const data = {
      user: id,
      name: studentsDetail.name,
      email: studentsDetail.email,
      course: studentsDetail.course,
      fees: feesPaid,
      date,
    };
    dispatch(FeesPaidStudent(data));
    refModal.current.classList.remove("active");
  };

  useEffect(() => {
    if (message) {
      showAlert(<IoCheckmarkCircle />, "Success", message);
    }
    if (error) {
      showAlert(<IoCloseCircleSharp />, "Error", error);
    }

    dispatch(getFeesStudent(id));
    dispatch(getSingleStudent(id));
  }, [dispatch, id, message, error]);

  return (
    <>
      <Alert alert={alert} />
      <ModelContainer ref={refModal}>
        <div className="ModelBox">

          <div className="modelTitle">
            <h2>Student Fees Pay</h2>
            <div className="modelClose">
              <span onClick={closeModelUpdateStudentHandler}>
                <IoClose />
              </span>
            </div>
          </div>
          
          <Form onSubmit={FeePaidHandler}>
            <InputGroup>
              <InputIcon>
                <IoPersonOutline />
              </InputIcon>
              <Input
                type="text"
                value={studentsDetail.name}
                readOnly
                placeholder="Enter Your Name"
              />
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoMailOutline />
              </InputIcon>
              <Input
                type="email"
                value={studentsDetail.email}
                readOnly
                placeholder="Enter Your Email"
              />
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoShareSocialOutline />
              </InputIcon>
              <Input
                type="text"
                value={studentsDetail.course}
                readOnly
                placeholder="Enter Your Course"
              />
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoCashOutline />
              </InputIcon>
              <Input
                type="Number"
                value={feesPaid}
                onChange={(e) => setFeesPaid(e.target.value)}
                placeholder="Enter Your Fees"
              />
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoCalendarOutline />
              </InputIcon>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Enter Your Date"
              />
            </InputGroup>

            <OpeationButton className="primary" type="submit">
              Update
            </OpeationButton>
          </Form>
        </div>
      </ModelContainer>

      <StudentFeeDetailComponent>
        <h1>Students Fees Detail</h1>

        <div className="studentFeeDetail">
          <div className="options" onClick={optionOpen}>
            <span>
              <IoEllipsisHorizontalOutline />
            </span>
            <div className="optionsMenu" ref={ref}>
              <p onClick={FeeModelOpen}>Fees Pay</p>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>St.Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Fees</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {fees &&
                fees.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.course}</td>
                      <td>{item.fees}</td>
                      <td>
                        <Link to="#" className="statusBtn success">
                          Paid
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </StudentFeeDetailComponent>
    </>
  );
};

const StudentFeeDetail = () => {
  return <AdminSidebar component={Data()} />;
};

export default StudentFeeDetail;
