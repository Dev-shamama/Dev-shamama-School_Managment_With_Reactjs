import { Link } from "react-router-dom";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { ExamResultComponent } from "./StyleComponent/ExamResult.styled";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import {
  IoCheckmarkCircle,
  IoClose,
  IoCloseCircleSharp,
  IoEllipsisHorizontalOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

import {
  Form,
  InputGroup,
  InputIcon,
  SelectMenu,
  TextArea,
} from "../../components/Styles/style-input-component/Input.styled";
import { ModelContainer } from "../../components/modal/Model.styled";
import { OpeationButton } from "../../components/Styles/style-button-component/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuestion as apiUpdateQuestion,
  resetMessage,
  resetError,
  deleteQuestion,
  statusQuestion,
  createQuestion,
  getExamQuestion,
} from "../../store/examReducer";
import Alert from "../../components/Alert/Alert";

Chart.register(CategoryScale);

const Data = () => {
  const [question, setQuestion] = useState("");
  const [course, setCourse] = useState("");

  const [updateQuestionId, setUpdateQuestionId] = useState("");
  const [updateQuestion, setUpdateQuestion] = useState("");
  const [updateCourse, setUpdateCourse] = useState("");

  const [alert, setAlert] = useState(null);
  const refs = useRef();
  const refAddQuestion = useRef();
  const refUpdateQuestion = useRef();
  const dispatch = useDispatch();

  const { exam, message, error } = useSelector((state) => state.exam);
  
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
  
  // Add Create Question Model Open
  const openModelAddQuestion = () => {
    refAddQuestion.current.classList.add("active");
  };

  // Add Create Question Model Close
  const closeModelAddQuestion = () => {
    refAddQuestion.current.classList.remove("active");
  };

  // Update Question Model Open
  const openModelUpdateQuestion = (updateQuestionValue) => {
    refUpdateQuestion.current.classList.add("active");

    setUpdateQuestion(updateQuestionValue.question);
    setUpdateCourse(updateQuestionValue.course);
    setUpdateQuestionId(updateQuestionValue._id);
  };

  // Update Question Model Close
  const closeModelUpdateQuestion = () => {
    refUpdateQuestion.current.classList.remove("active");
  };

  // Options Open And Close
  const optionOpen = () => {
    refs.current.classList.toggle("active");
  };

  useEffect(() => {
    dispatch(getExamQuestion());
    if (message) {
      showAlert(<IoCheckmarkCircle />, "Success", message);
    }
    if (error) {
      showAlert(<IoCloseCircleSharp />, "Error", error);
    }
  }, [message, error]);

  const questionAddHandler = (e) => {
    e.preventDefault();
    const data = { question, course };
    dispatch(createQuestion(data));
    refAddQuestion.current.classList.remove("active");
    setQuestion("");
    setCourse("");
  };

  const questionUpdateHandler = (e) => {
    e.preventDefault();
    const data = { id: updateQuestionId, question: updateQuestion, course: updateCourse };
    dispatch(apiUpdateQuestion(data));
    refUpdateQuestion.current.classList.remove("active");
    setUpdateQuestionId("");
    setUpdateQuestion("");
    setUpdateCourse("");
  };

  const DeleteQuestion = (id) => {
    dispatch(deleteQuestion(id));
  };

  const statusHandler = (id, status) => {
    dispatch(statusQuestion(id, status));
  };

  return (
    <>
      <Alert alert={alert} />

      {/* Add Question */}
      <ModelContainer ref={refAddQuestion}>
        <div className="ModelBox">
          <div className="modelTitle">
            <h2>Add Question</h2>
            <div className="modelClose">
              <span onClick={closeModelAddQuestion}>
                <IoClose />
              </span>
            </div>
          </div>

          <Form onSubmit={questionAddHandler}>
            <InputGroup>
              <TextArea
                rows="15"
                onChange={(e) => setQuestion(e.target.value)}
                value={question}
              ></TextArea>
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoShareSocialOutline />
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

            <OpeationButton className="primary" type="submit">
              Add
            </OpeationButton>
          </Form>
        </div>
      </ModelContainer>

      {/* Update Question */}
      <ModelContainer ref={refUpdateQuestion}>
        <div className="ModelBox">
          <div className="modelTitle">
            <h2>Update Question</h2>
            <div className="modelClose">
              <span onClick={closeModelUpdateQuestion}>
                <IoClose />
              </span>
            </div>
          </div>

          <Form onSubmit={questionUpdateHandler}>
            <InputGroup>
              <TextArea
                rows="15"
                value={updateQuestion}
                onChange={(e) => setUpdateQuestion(e.target.value)}
              ></TextArea>
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoShareSocialOutline />
              </InputIcon>
              <SelectMenu
                value={updateCourse}
                onChange={(e) => setUpdateCourse(e.target.value)}
              >
                <option value="">Select Course</option>
                <option value="Web Develpment">Web Develpment</option>
                <option value="Web Designing">Web Designing</option>
                <option value="C.I.T">C.I.T</option>
                <option value="D.I.T">D.I.T</option>
                <option value="Ms Officee">Ms Office</option>
              </SelectMenu>
            </InputGroup>

            <OpeationButton className="primary" type="submit">
              Add
            </OpeationButton>
          </Form>
        </div>
      </ModelContainer>

      <ExamResultComponent>
        <h1>Question Papers</h1>

        <div className="examResult">
          <div className="options" onClick={optionOpen}>
            <span>
              <IoEllipsisHorizontalOutline />
            </span>
            <div className="optionsMenu" ref={refs}>
              <p onClick={openModelAddQuestion}>Add Question</p>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Question</th>
                <th>Course</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {exam &&
                exam.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.question}</td>
                      <td>{item.course}</td>
                      <td>
                        <Link
                          className={`statusBtn ${
                            item.status === "Active" ? "success" : "disabled"
                          }`}
                          onClick={() => statusHandler(item._id, item.status)}
                        >
                          {item.status}
                        </Link>
                        <Link
                          to="#"
                          className="statusBtn danger"
                          onClick={() => DeleteQuestion(item._id)}
                        >
                          Delete
                        </Link>
                        <Link
                          to={`/admin/examanswer/${item._id}`}
                          className="statusBtn primary"
                        >
                          View
                        </Link>
                        <Link
                          to="#"
                          onClick={() => openModelUpdateQuestion(item)}
                          className="statusBtn warning"
                        >
                          Update
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </ExamResultComponent>
    </>
  );
};

const ExamResult = () => {
  return <AdminSidebar component={Data()} />;
};

export default ExamResult;
