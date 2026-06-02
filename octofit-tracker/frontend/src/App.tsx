import "./index.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>OctoFit Tracker</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/users">Users</Link> | <Link to="/teams">Teams</Link> | <Link to="/activities">Activities</Link> | <Link to="/workouts">Workouts</Link> | <Link to="/leaderboard">Leaderboard</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <small>Runs against API base configured from Vite env (see .env.local)</small>
      </footer>
    </div>
  );
}

export default App;
