import { Link } from "react-router-dom";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { StudentFeesComponent } from "./StyleComponent/Fees.styled";
import { CategoryScale } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { getAllStudent } from "../../store/adminReducer";
Chart.register(CategoryScale);

const Data = () => {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAllStudent());
  }, [dispatch]);

  return (
    <StudentFeesComponent>
      <h1>Students Fees</h1>

      <div className="studentFees">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>St.Name</th>
              <th>Email</th>
              <th>Course</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {students &&
              students.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.registerId}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.course}</td>
                    <td>
                      <Link
                        to={`/admin/feedetail/${item._id}`}
                        className="statusBtn primary"
                      >
                        Fees
                      </Link>
                    </td>
                  </tr>
                );
              })}
          
          </tbody>
        </table>
      </div>
    </StudentFeesComponent>
  );
};

const Fees = () => {
  return <AdminSidebar component={Data()} />;
};

export default Fees;
