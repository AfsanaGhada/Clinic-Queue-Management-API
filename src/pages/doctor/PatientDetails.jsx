import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

function PatientDetails(){

  const { id } = useParams();

  return(
    <Layout>

      <h2>Patient Details</h2>

      <p>Appointment ID: {id}</p>

    </Layout>
  );
}

export default PatientDetails;