import Layout from "../../components/Layout";

function PatientDashboard(){

  const user = JSON.parse(localStorage.getItem("user"));

  return(
    <Layout>

      {/* ✅ just wrap everything */}
      <div className="dashboard-center">

        <h2>Welcome, {user?.name}...</h2>

        <p style={{marginTop:"10px"}}>
          You can manage appointments, prescriptions and reports here.
        </p>

        <div className="cards">

          <div className="card">
            <h3>Appointments</h3>
            <p>View & Book</p>
          </div>

          <div className="card">
            <h3>Prescriptions</h3>
            <p>Check Medicines</p>
          </div>

          <div className="card">
            <h3>Reports</h3>
            <p>View Reports</p>
          </div>

        </div>

      </div>

    </Layout>
  );
}

export default PatientDashboard;