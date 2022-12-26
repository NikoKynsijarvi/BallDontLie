import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import StatisticsPage from "./pages/StatisticsPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import shotgroupService from "./services/shotgroup";
import { useEffect } from "react";
import { initShoutgroup } from "./reducers/shotgroupReducer";

function App() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user.user_id) {
      shotgroupService.getAll(user.user_id).then((res) => {
        console.log(res);
        dispatch(initShoutgroup(res));
      });
    }
  }, [user]);
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/statistics"
          element={
            user.user_id ? <StatisticsPage /> : <Navigate replace to="/login" />
          }
        />
        <Route
          path="/home"
          element={
            user.user_id ? <HomePage /> : <Navigate replace to="/login" />
          }
        />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
