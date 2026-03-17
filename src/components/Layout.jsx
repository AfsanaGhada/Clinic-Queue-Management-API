
// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import PatientSidebar from "./PatientSidebar";

// function Layout({ children }) {

//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <div className="layout">

      
//       {user?.role === "admin" ? <Sidebar /> : <PatientSidebar />}

//       <div className="main">

//         <Navbar />

//         <div className="content">
//           {children}
//         </div>

//       </div>

//     </div>
//   );
// }

// export default Layout;

import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user?.role;

  // Define role-based menu
  const menu = {
    patient: [
      { name: "Dashboard", path: "/patient/PatientDashboard" },
      { name: "Book Appointment", path: "/patient/book" },
      { name: "Appointments", path: "/patient/appointments" },
      { name: "Prescriptions", path: "/patient/prescriptions" },
      { name: "Reports", path: "/patient/reports" },
    ],
    
   
    receptionist: [
      { name: "Dashboard", path: "/receptionist" },
      { name: "Queue", path: "/receptionist/queuelist" },
      { name: "Update Queue", path: "/receptionist/update/:id" },
      { name: "Receptionist Queue", path: "/receptionist/queue" }
    ],
    doctor: [
      { name: "Dashboard", path: "/doctor" },
      { name: "Queue", path: "/doctor/queue" },
      { name: "Patient Details", path: "/doctor/patient/:id" },
      { name: "Add Prescription", path: "/doctor/prescription/:id" },
      { name: "Add Report", path: "/doctor/report/:id" }

      
    ],
    admin: [
      { name: "Dashboard", path: "/dashboard" },
      { name: "Manage Users", path: "/users" },
      { name: "Reports", path: "/admin/reports" },
    ],
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "200px",
          height: "100vh",
          background: "#1e293b",
          color: "white",
          padding: "20px",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>
          {role?.toUpperCase()}
        </h3>

        {menu[role]?.map((item, i) => (
          <div key={i} style={{ marginBottom: "15px" }}>
            <Link
              to={item.path}
              style={{ color: "white", textDecoration: "none" }}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          background: "#f1f5f9",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Layout;