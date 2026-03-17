import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import API from "../../api/api";

function AppointmentDetail(){

  const { id } = useParams();
  const [data,setData] = useState(null);

  useEffect(()=>{
    fetchOne();
  },[]);

  const fetchOne = async ()=>{
    try{
      const res = await API.get(`/appointments/${id}`); 
      setData(res.data);
    }catch(err){
      console.log(err);
    }
  };

  return(
    <Layout>

      <h2>Appointment Detail</h2>

      {data && (
        <div>

          <p><b>Date:</b> {data.appointmentDate}</p>
          <p><b>Slot:</b> {data.timeSlot}</p>
          <p><b>Status:</b> {data.status}</p>

          <p><b>Token:</b> {data.queueEntry?.tokenNumber}</p>

          <h3>Patient Info</h3>
          <p>{data.queueEntry?.appointment?.patient?.name}</p>
          <p>{data.queueEntry?.appointment?.patient?.phone}</p>

        </div>
      )}

    </Layout>
  );
}

export default AppointmentDetail;