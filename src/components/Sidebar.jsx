import { Link } from "react-router-dom";

function Sidebar(){

  return(
    <div className="sidebar">

      <h2>Clinic Queue</h2>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/users">Users</Link>

    </div>
  );
}

export default Sidebar;

