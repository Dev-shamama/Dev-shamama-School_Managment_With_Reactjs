import { Link } from "react-router-dom";

import StudentSidebar from "../../components/Student/StudentSidebar";
import { studentFees } from "../../store/studentReducer";
import { StudentFeeDetailComponent } from "./StyleComponent/StudentFeeDetail.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Data = () => {
  const dispatch = useDispatch();
  const { fees } = useSelector((state) => state.students);

  useEffect(() => {
    dispatch(studentFees());
  }, []);
  return (
    <StudentFeeDetailComponent>
      <h1>Students Fees Detail</h1>

      <div className="studentFeeDetail">
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
  );
};

const Dashboard = () => {
  return <StudentSidebar component={Data()} />;
};

export default Dashboard;
