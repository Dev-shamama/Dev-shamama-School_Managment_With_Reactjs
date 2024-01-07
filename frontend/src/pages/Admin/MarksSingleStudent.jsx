import { useParams } from "react-router-dom";

import { MarksSingleStudents } from "./StyleComponent/MarksSingleStudents.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarksSingleAdmin } from "../../store/marksReducer";
import AdminSidebar from "../../components/Admin/AdminSidebar";

const Data = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleMarks } = useSelector((state) => state.marks);

  useEffect(() => {
    dispatch(getMarksSingleAdmin(id));
  }, [id]);

  return (
    <MarksSingleStudents>
      <div className="panelHeading">
        <h1>Student Marks </h1>
      </div>

      <div className="studentDetail">
        <table>
          <tbody>
            <tr>
              <th>Std. Register ID</th>
              <td>#{singleMarks.registerId}</td>
            </tr>
            <tr>
              <th>Std. Name</th>
              <td>{singleMarks.name}</td>
            </tr>
            <tr>
              <th>Std. Eamil</th>
              <td>{singleMarks.email}</td>
            </tr>
            <tr>
              <th>Std. Course</th>
              <td>{singleMarks.course}</td>
            </tr>

            <tr>
              <th>Total Question</th>
              <td>{singleMarks.totalquestion}</td>
            </tr>
            <tr>
              <th>Total Attempt</th>
              <td>{singleMarks.attempt}</td>
            </tr>
            <tr>
              <th>Total Correct</th>
              <td>{singleMarks.correct}</td>
            </tr>
            <tr>
              <th>Percentage</th>
              <td>{singleMarks.percentage}%</td>
            </tr>
            <tr>
              <th>Grade</th>
              <td>{singleMarks.grade}</td>
            </tr>

            <tr>
              <th>Std. Course</th>
              <td>{singleMarks.course}</td>
            </tr>

            <tr>
              <th>Year</th>
              <td>{singleMarks.year}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{singleMarks.date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </MarksSingleStudents>
  );
};

const MarksSingleStudent = () => {
  return <AdminSidebar component={Data()} />;
};

export default MarksSingleStudent;

