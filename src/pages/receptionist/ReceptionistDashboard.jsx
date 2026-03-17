import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import API from "../../api/api";
import { useNavigate } from "react-router-dom";

function ReceptionistDashboard(){

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

  const updateStatus = async (id,status)=>{
    await API.patch(`/queue/${id}`,{status});
    fetchData();
  };

  return(
    <Layout>

      <h2>Today Queue</h2>

      <table style={{width:"100%",marginTop:"20px"}}>
        <thead>
          <tr>
            <th>Token</th>
            <th>Patient</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((q)=>(
            <tr key={q.id}>
              <td>{q.tokenNumber}</td>
              <td>{q.appointment?.patient?.name}</td>

              <td style={{color:q.status==="waiting"?"orange":"green"}}>
                {q.status}
              </td>

              <td>
                <button onClick={()=>updateStatus(q.id,"in-progress")}>Start</button>
                <button onClick={()=>updateStatus(q.id,"done")}>Done</button>
                <button onClick={()=>updateStatus(q.id,"skipped")}>Skip</button>

                <button onClick={()=>navigate(`/doctor/prescription/${q.appointmentId}`)}>
                  Add Medicine
                </button>

                <button onClick={()=>navigate(`/doctor/report/${q.appointmentId}`)}>
                  Add Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </Layout>
  );
}

export default ReceptionistDashboard;