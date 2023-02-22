import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import StatisticsPage from "./pages/StatisticsPage";
import SettingsPage from "./pages/SettingsPage";
import MapPage from "./pages/MapPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import shotgroupService from "./services/shotgroup";
import { useEffect } from "react";
import { initShoutgroup } from "./reducers/shotgroupReducer";
import { setUser } from "./reducers/userReducer";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      console.log(user);
      dispatch(setUser(user));
    }
  }, []);

  useEffect(() => {
    if (user.user_id) {
      shotgroupService.getAll(user.user_id).then((res) => {
        console.log(res);
        dispatch(initShoutgroup(res));
      });
    }
  }, [user]);

  if (!user.user_id) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
