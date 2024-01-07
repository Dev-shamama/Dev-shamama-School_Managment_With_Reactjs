import { useSelector } from "react-redux";
import StudentSidebar from "../../components/Student/StudentSidebar";
import { StudentFeeDetailComponent } from "./StyleComponent/Dashboard.styled";
import image from "../../assets/img/studentWelcome.svg";
const Data = () => {
  const { data } = useSelector((state) => state.students);
  return (
    <StudentFeeDetailComponent>
      <div className="dashboardBox">
        <div className="rightSide">
          <h1>Welcome to Students Dashboard! </h1>
        </div>
        <div className="leftSide">
          <img src={image} alt="" />
        </div>
      </div>
    </StudentFeeDetailComponent>
  );
};

const Dashboard = () => {
  return <StudentSidebar component={Data()} />;
};

export default Dashboard;
