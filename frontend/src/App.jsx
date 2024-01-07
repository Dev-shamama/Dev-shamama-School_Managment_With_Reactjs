import { Fragment, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import NotFound from "./components/NotFound/NotFound";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/Dashboard";
import StudenDashboard from "./pages/Student/Dashboard";
import FeesStudent from "./pages/Student/FeesStudent";
import StudentProfileSetting from "./pages/Student/StudentProfileSetting";
import StudentList from "./pages/Admin/StudentList";
import Fees from "./pages/Admin/Fees";
import ExamResult from "./pages/Admin/ExamResult";
import AdminProfileSetting from "./pages/Admin/AdminProfileSetting";
import StudentDetail from "./pages/Admin/StudentDetail";
import StudentFeeDetail from "./pages/Admin/StudentFeeDetail";
import Marks from "./pages/Admin/Marks";
import MarksSingleStudent from "./pages/Admin/MarksSingleStudent";
import ContactList from "./pages/Admin/ContactList";
import { useDispatch } from "react-redux";
import { userLoadData } from "./store/adminReducer";
import ExamAnswer from "./pages/Admin/ExamAnswer";
import ExamLogin from "./pages/Student/ExamLogin";
import ExamBoard from "./pages/Student/ExamBoard";
import SubmitSuccessAlert from "./pages/Student/SubmitSuccessAlert";
import MarksStudent from "./pages/Student/MarksStudent";
import ProtectedRouteAdmin from "./components/Route/ProtectedRouteAdmin";
// import NewFile from "./NewFile";
const App = () => {
  console.log("start 1")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = {
    favColor: "#5d8be2",
    primaryColor: "#0b0754",
    darkColor: "#3c3c3c",
  };

  // Total Visitor
  const totalVisitor = async () => {
    const response = await fetch("/api/v1/admin/visitor", {
      method: "POST",
    });
    await response.json();
  };

  /* UserLoad */
  useEffect(() => {
    totalVisitor();
    dispatch(userLoadData());

    if (localStorage.getItem("ExamAuth")) {
      navigate("/student/examboard");
    }
  }, [dispatch, navigate]);

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        {/* GLobal Styled File */}
        <GlobalStyle />

        {/* All ROutes */}
        <Routes>
          {/* Landing Routes All User Access */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Navbar />
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <Signup />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <NotFound />
              </>
            }
          />

          <Route path="/admin/login" element={<AdminLogin />} />

          {/* ProtectedRouteAdmin */}
          <Route
            element={
              <ProtectedRouteAdmin/>
            }
          >
            <Route path="/admin/" element={<AdminDashboard />} />
            <Route path="/admin/student" element={<StudentList />} />
            <Route path="/admin/fees" element={<Fees />} />
            <Route path="/admin/feedetail/:id" element={<StudentFeeDetail />} />
            <Route path="/admin/examresult" element={<ExamResult />} />
            <Route path="/admin/profile" element={<AdminProfileSetting />} />
            <Route
              path="/admin/studentdetail/:id"
              element={<StudentDetail />}
            />
            <Route path="/admin/examanswer/:id" element={<ExamAnswer />} />
            <Route path="/admin/marks" element={<Marks />} />
            <Route
              path="/admin/markssinglestudent/:id"
              element={<MarksSingleStudent />}
            />
            <Route path="/admin/contact" element={<ContactList />} />
          </Route>

          {/* Students Routes */}
          <Route path="/student/" element={<StudenDashboard />} />
          <Route path="/student/fees" element={<FeesStudent />} />
          <Route path="/student/profile" element={<StudentProfileSetting />} />
          <Route path="/student/examlogin" element={<ExamLogin />} />
          <Route path="/student/examboard" element={<ExamBoard />} />
          <Route path="/student/success" element={<SubmitSuccessAlert />} />
          <Route path="/student/marksstudents" element={<MarksStudent />} />
        </Routes>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
