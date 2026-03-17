import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import API from "../../api/api";
import { useNavigate } from "react-router-dom";

function DoctorQueue(){

  const [data,setData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const today = new Date().toISOString().split("T")[0];
    const res = await API.get(`/queue?date=${today}`);
    setData(res.data);
  };

  return(
    <Layout>

      <h2>Today Patients</h2>

      {data.map((q)=>(
        <div key={q.id} style={{border:"1px solid #ddd",padding:"10px",marginTop:"10px"}}>

          <p>{q.tokenNumber} - {q.appointment?.patient?.name}</p>

          <button onClick={()=>navigate(`/doctor/patient/${q.appointmentId}`)}>
            View
          </button>

          <button onClick={()=>navigate(`/doctor/prescription/${q.appointmentId}`)}>
            Add Medicine
          </button>

          <button onClick={()=>navigate(`/doctor/report/${q.appointmentId}`)}>
            Add Report
          </button>

        </div>
      ))}

    </Layout>
  );
}

export default DoctorQueue;