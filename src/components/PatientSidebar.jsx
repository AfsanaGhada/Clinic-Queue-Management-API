import { Link } from "react-router-dom";

function PatientSidebar(){
  return(
    <div className="sidebar">

      <h2>Patient</h2>

      <Link to="/patient/PatientDashboard">Dashboard</Link>
      <Link to="/patient/book">Book Appointment</Link>
      <Link to="/patient/appointments">My Appointments</Link>
      <Link to="/patient/prescriptions">My Prescriptions</Link>
      <Link to="/patient/reports">My Reports</Link>
      <Link to="/login">Logout</Link>

    </div>
  );
}

export default PatientSidebar;