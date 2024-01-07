import { Link, useParams } from "react-router-dom";
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
  createAnswer,
  deleteAnswer,
  getAnswer,
  resetMessage,
  resetError,
  updateAnswer as apiUpdateAnswer
} from "../../store/examReducer";
import Alert from "../../components/Alert/Alert";

Chart.register(CategoryScale);

const Data = () => {
  const [ans, setAnswer] = useState("");
  
  const [updateAnswerId, setUpdateAnswerId] = useState("");
  const [updateAnswer, setUpdateAnswer] = useState("");
  const [updateCorrent, setUpdateCorrent] = useState("");

  const [alert, setAlert] = useState(null);
  const refs = useRef();
  const refAddAnswer = useRef();
  const refUpdateAnswer = useRef();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { answer, message, error } = useSelector((state) => state.exam);

  // Register Model Open
  const openModelAddAnswer = () => {
    refAddAnswer.current.classList.add("active");
  };

  const closeModelAddAnswer = () => {
    refAddAnswer.current.classList.remove("active");
  };

  // Update Answer Model Open
  const openModelUpdateAnswer = (updateAnswerValue) => {
    refUpdateAnswer.current.classList.add("active");
    setUpdateAnswerId(updateAnswerValue._id);
    setUpdateAnswer(updateAnswerValue.answer);
    setUpdateCorrent(updateAnswerValue.correctAnswer);
  };

  // Update Answer Model Close
  const closeModelUpdateAnswer = () => {
    refUpdateAnswer.current.classList.remove("active");
  };

  // Option Open And Close
  const optionOpen = () => {
    refs.current.classList.toggle("active");
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

  useEffect(() => {
    if (message) {
      showAlert(<IoCheckmarkCircle />, "Success", message);
    }
    if (error) {
      showAlert(<IoCloseCircleSharp />, "Error", error);
    }
    dispatch(getAnswer(id));
  }, [message, error, id]);

  const answerAddHandler = (e) => {
    e.preventDefault();
    const data = { questionId: id, answer: ans };
    dispatch(createAnswer(data));
    refAddAnswer.current.classList.remove("active");
    setAnswer("");
  };

  const answerUpdateHandler = (e) => {
    e.preventDefault();
    const data = { id, ansId: updateAnswerId,  answer: updateAnswer, correctAnswer: updateCorrent };
    dispatch(apiUpdateAnswer(data));
    refUpdateAnswer.current.classList.remove("active");
    setUpdateAnswerId("");
    setUpdateAnswer("");
    setUpdateCorrent("");
  };

  const DeleteAnswer = (ansId) => {
    dispatch(deleteAnswer(ansId, id));
  };

  return (
    <>
      <Alert alert={alert} />

      {/* Add Answer */}
      <ModelContainer ref={refAddAnswer}>
        <div className="ModelBox">
          <div className="modelTitle">
            <h2>Add Answer</h2>
            <div className="modelClose">
              <span onClick={closeModelAddAnswer}>
                <IoClose />
              </span>
            </div>
          </div>

          <Form onSubmit={answerAddHandler}>
            <InputGroup>
              <TextArea
                rows="15"
                value={ans}
                onChange={(e) => setAnswer(e.target.value)}
              ></TextArea>
            </InputGroup>
            <OpeationButton className="primary" type="submit">
              Add
            </OpeationButton>
          </Form>
        </div>
      </ModelContainer>

      {/* Update Answer */}
      <ModelContainer ref={refUpdateAnswer}>
        <div className="ModelBox">
          <div className="modelTitle">
            <h2>Update Answer</h2>
            <div className="modelClose">
              <span onClick={closeModelUpdateAnswer}>
                <IoClose />
              </span>
            </div>
          </div>

          <Form onSubmit={answerUpdateHandler}>
            <InputGroup>
              <TextArea
                rows="15"
                value={updateAnswer}
                onChange={(e) => setUpdateAnswer(e.target.value)}
              ></TextArea>
            </InputGroup>

            <InputGroup>
              <InputIcon>
                <IoShareSocialOutline />
              </InputIcon>
              <SelectMenu
                value={updateCorrent}
                onChange={(e) => setUpdateCorrent(e.target.value)}
              >
                <option value="">Select Course</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </SelectMenu>
            </InputGroup>

            <OpeationButton className="primary" type="submit">
              Add
            </OpeationButton>
          </Form>
        </div>
      </ModelContainer>

      <ExamResultComponent>
        <h1>Answer</h1>

        <div className="examResult">
          <div className="options" onClick={optionOpen}>
            <span>
              <IoEllipsisHorizontalOutline />
            </span>
            <div className="optionsMenu" ref={refs}>
              <p onClick={openModelAddAnswer}>Add Answer</p>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Answer</th>
                <th>Correct Answer</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {answer &&
                answer.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.answer}</td>
                      <td>{item.correctAnswer === true ? "True" : "False"}</td>
                      <td>
                        <Link
                          to="#"
                          className="statusBtn danger"
                          onClick={() => DeleteAnswer(item._id)}
                        >
                          Delete
                        </Link>
                        <Link to="#"  onClick={() => openModelUpdateAnswer(item)} className="statusBtn warning">
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
