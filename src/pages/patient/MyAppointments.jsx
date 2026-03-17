import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import API from "../../api/api";
import { useNavigate } from "react-router-dom";

function MyAppointments(){

  const [data,setData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    try{
      const res = await API.get("/appointments/my"); 
      setData(res.data);
    }catch(err){
      console.log(err);
      alert("Failed to load appointments");
    }
  };

  return(
    <Layout>

      <h2>My Appointments</h2>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Slot</th>
            <th>Status</th>
            <th>Token</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((a)=>(
            <tr key={a.id}>
              <td>{a.appointmentDate}</td>
              <td>{a.timeSlot}</td>
                <td className={`status ${a.status}`}>
                {a.status}
                </td>              
                <td>{a.queueEntry?.tokenNumber}</td>
              <td>
                <button onClick={()=>navigate(`/patient/appointment/${a.id}`)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </Layout>
  );
}

export default MyAppointments;