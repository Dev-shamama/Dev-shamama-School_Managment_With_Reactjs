import { Link } from "react-router-dom";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { MarksComponent } from "./StyleComponent/Marks.styled";
import { CategoryScale } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { getMarks, statusMarks } from "../../store/marksReducer";
Chart.register(CategoryScale);

const Data = () => {
  const dispatch = useDispatch();
  const { marks } = useSelector((state) => state.marks);

  useEffect(() => {
    dispatch(getMarks());
  }, [dispatch]);

  const statusHandler = (id, status) => {
    dispatch(statusMarks(id, status));
  };

  return (
    <MarksComponent>
      <h1>Students Marks Overview</h1>

      <div className="studentFees">
        <table>
          <thead>
            <tr>
              <th>Reg.Id</th>
              <th>St.Name</th>
              <th>Course</th>
              <th>Percentage</th>
              <th>Grade</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {marks &&
              marks.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>#{item.registerId}</td>
                    <td>{item.name}</td>
                    <td>{item.course}</td>
                    <td>{item.percentage}%</td>
                    <td>{item.grade}</td>
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
                        to={`/admin/markssinglestudent/${item._id}`}
                        className="statusBtn primary"
                      >
                        Detail
                      </Link>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </MarksComponent>
  );
};

const Marks = () => {
  return <AdminSidebar component={Data()} />;
};

export default Marks;
