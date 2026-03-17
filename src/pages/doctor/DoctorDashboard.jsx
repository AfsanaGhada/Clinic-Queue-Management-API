import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";

function DoctorDashboard(){

  const navigate = useNavigate();

  return(
    <Layout>

      <div style={{textAlign:"center"}}>
        <h2>Doctor Panel</h2>

        <button onClick={()=>navigate("/doctor/queue")}>
          View Today Patients
        </button>

      </div>

    </Layout>
  );
}

export default DoctorDashboard;