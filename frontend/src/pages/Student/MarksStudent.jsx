import { Link } from "react-router-dom";

import StudentSidebar from "../../components/Student/StudentSidebar";
import { MarksStudentComponent } from "./StyleComponent/MarksStudents.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarksSingle } from "../../store/marksReducer";

const Data = () => {
  const dispatch = useDispatch();
  const { marks } = useSelector((state) => state.marks);

  return (
    <MarksStudentComponent>
      <div className="panelHeading">
        <h1>Student Marks</h1>
      </div>

      <div className="studentDetail">
        <table>
          <tbody>
            <tr>
              <th>Std. Register ID</th>
              <td>{marks[0].registerId}</td>
            </tr>
            <tr>
              <th>Std. Name</th>
              <td>{marks[0].name}</td>
            </tr>
            <tr>
              <th>Std. Eamil</th>
              <td>{marks[0].email}</td>
            </tr>
            <tr>
              <th>Std. Course</th>
              <td>{marks[0].course}</td>
            </tr>
            
            
            <tr>
              <th>Total Question</th>
              <td>{marks[0].totalquestion}</td>
            </tr>
            <tr>
              <th>Total Attempt</th>
              <td>{marks[0].attempt}</td>
            </tr>
            <tr>
              <th>Total Correct</th>
              <td>{marks[0].correct}</td>
            </tr>
            <tr>
              <th>Percentage</th>
              <td>{marks[0].percentage}%</td>
            </tr>
            <tr>
              <th>Grade</th>
              <td>{marks[0].grade}</td>
            </tr>

            <tr>
              <th>Std. Course</th>
              <td>{marks[0].course}</td>
            </tr>



            <tr>
              <th>Year</th>
              <td>{marks[0].year}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{marks[0].date}</td>
            </tr>
            {/* <tr>
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
              </tr> */}
          </tbody>
        </table>
      </div>
    </MarksStudentComponent>
  );
};

const Dashboard = () => {
  return <StudentSidebar component={Data()} />;
};

export default Dashboard;
