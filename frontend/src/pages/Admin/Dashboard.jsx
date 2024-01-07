import {
  IoCashOutline,
  IoCheckmarkCircle,
  IoCloseCircleSharp,
  IoEyeOutline,
  IoHeartOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import { DashboardComponent } from "./StyleComponent/Dashboard.styled";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllStudent,
  resetError,
  resetMessage,
} from "../../store/adminReducer";
import Alert from "../../components/Alert/Alert";
Chart.register(CategoryScale);

const Data = () => {
  const dispatch = useDispatch();
  const { students, totalUser, loading, message, error } = useSelector(
    (state) => state.admin
  );
  const [totalEarn, setTotalEarn] = useState(0);
  const [totalReq, setTotalReq] = useState(0);
  const [alert, setAlert] = useState(null);

  const Data = [
    {
      id: 1,
      year: "Active Student",
      userGain: 50,
    },
    {
      id: 2,
      year: "Deactive Student",
      userGain: 100,
    },
    {
      id: 1,
      year: "Active Student",
      userGain: 50,
    },
    {
      id: 2,
      year: "Deactive Student",
      userGain: 100,
    },
    {
      id: 1,
      year: "Active Student",
      userGain: 50,
    },
    {
      id: 2,
      year: "Deactive Student",
      userGain: 100,
    },
    {
      id: 1,
      year: "Active Student",
      userGain: 50,
    },
    {
      id: 2,
      year: "Deactive Student",
      userGain: 100,
    },
    {
      id: 1,
      year: "Active Student",
      userGain: 50,
    },
    {
      id: 2,
      year: "Deactive Student",
      userGain: 100,
    },
    {
      id: 1,
      year: "Active Student",
      userGain: 50,
    },
    {
      id: 2,
      year: "Deactive Student",
      userGain: 100,
    },
    {
      id: 1,
      year: "Active Student",
      userGain: 50,
    },
    {
      id: 2,
      year: "Deactive Student",
      userGain: 100,
    },
  ];

  const countActive = students.filter((active) => active.status === "Active");
  const Deactive = students.length - countActive.length;

  const setter = [
    {
      id: 1,
      title: "Active",
      statusStudent: countActive.length,
    },
    {
      id: 2,
      title: "Deactive",
      statusStudent: Deactive && Deactive,
    },
  ];

  const [activeStudentChart, setActiveStudentChart] = useState({
    labels: setter.map((data) => data.title),
    datasets: [
      {
        label: "Students Status",
        data: setter.map((data) => data.statusStudent),
      },
    ],
  });

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
      },
    ],
  });

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

  // Total Earn
  const getEarn = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/featureearn`,
      { method: "GET", credentials: "include" }
    );
    const { totalAmount } = await response.json();
    setTotalEarn(totalAmount);
  };

  // Total Visitor
  const totalVisitor = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/admin/getvisitor`,
      {
        method: "GET",
      }
    );
    const { data } = await response.json();
    setTotalReq(data[0].totalVisitor);
  };

  useEffect(() => {
    if (message) {
      showAlert(<IoCheckmarkCircle />, "Success", message);
    }
    if (error) {
      showAlert(<IoCloseCircleSharp />, "Error", error);
    }
    totalVisitor();
    getEarn();
    dispatch(getAllStudent());
  }, [dispatch, message, error]);

  return (
    <>
      {loading ? (
        "loading"
      ) : (
        <>
          <Alert alert={alert} />
          <DashboardComponent>
            <div className="panelHeading">
              <h1>Dashboard</h1>
            </div>

            <div className="countCartItem">
              <div className="item a">
                <div className="icon">
                  <IoPeopleOutline />
                </div>
                <div className="detail">
                  <h2>Total Students</h2>
                  <h4>{totalUser}</h4>
                </div>
              </div>

              <div className="item b">
                <div className="icon">
                  <IoEyeOutline />
                </div>
                <div className="detail">
                  <h2>Total Visitor</h2>
                  <h4>{totalReq}</h4>
                </div>
              </div>

              <div className="item c">
                <div className="icon">
                  <IoHeartOutline />
                </div>
                <div className="detail">
                  <h2>Happy Students</h2>
                  <h4>2000</h4>
                </div>
              </div>

              <div className="item d">
                <div className="icon">
                  <IoCashOutline />
                </div>
                <div className="detail">
                  <h2>Total Earning</h2>
                  <h4>{totalEarn}</h4>
                </div>
              </div>
            </div>

            {/* Chart.js */}
            <div className="ActiveStudentAnalyicAndRequest">
              {/* Active / Deactive User Chart */}
              <div className="ActiveStudentChart">
                <div className="text">
                  <h3>Active Student</h3>
                </div>
                <div className="chart">
                  <Pie data={activeStudentChart} />
                </div>
              </div>

              {/* Total Request */}
              <div className="RequestChart">
                <div className="text">
                  <h3>Weekly Request Viewer</h3>
                </div>
                <div className="chart">
                  <Bar data={chartData} />
                </div>
              </div>
            </div>
          </DashboardComponent>
        </>
      )}
    </>
  );
};

const Dashboard = () => {
  return <AdminSidebar component={Data()} />;
};

export default Dashboard;
