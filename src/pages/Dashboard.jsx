import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../api/api";

function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [appointmentCount, setAppointmentCount] = useState(0);

  // Example clinic info
  const clinic = {
    name: "Student 1 Clinic",
    code: "CL12345",
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const users = await API.get("/admin/users");
      setUserCount(users.data.length);

      const appointments = await API.get("/appointments");
      setAppointmentCount(appointments.data.length);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        {/* Header */}
        <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>My Clinic</h1>

        {/* Clinic info */}
        <div
          style={{
            background: "#f1f5f9",
            padding: "15px 20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h2 style={{ margin: "0 0 5px 0" }}>{clinic.name}</h2>
          <p style={{ margin: "0 0 5px 0" }}>
            Clinic Code: <strong>{clinic.code}</strong>
          </p>
          <p style={{ margin: 0, color: "#555" }}>
            Share this code with your staff to give them access.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "flex", gap: "20px" }}>
          <div
            style={{
              flex: 1,
              background: "#2563eb",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Total Users</h3>
            <p style={{ fontSize: "24px", margin: "10px 0 0 0" }}>{userCount}</p>
          </div>

          <div
            style={{
              flex: 1,
              background: "#16a34a",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Appointments</h3>
            <p style={{ fontSize: "24px", margin: "10px 0 0 0" }}>{appointmentCount}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;