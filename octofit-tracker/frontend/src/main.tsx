import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Users from "./components/Users";
import Teams from "./components/Teams";
import Activities from "./components/Activities";
import Workouts from "./components/Workouts";
import Leaderboard from "./components/Leaderboard";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<div style={{ padding: 16 }}>Welcome to OctoFit Tracker.</div>} />
          <Route path="users" element={<Users />} />
          <Route path="teams" element={<Teams />} />
          <Route path="activities" element={<Activities />} />
          <Route path="workouts" element={<Workouts />} />
          <Route path="leaderboard" element={<Leaderboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
