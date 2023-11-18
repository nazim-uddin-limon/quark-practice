import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/pages/Home";
import Attendance from "./components/pages/Attendance";
import Service from "./components/pages/Service";
import ProfilePage from "./components/pages/Profile";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/service" element={<Service />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
