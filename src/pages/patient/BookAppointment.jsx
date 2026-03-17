import { useState } from "react";
import Layout from "../../components/Layout";
import API from "../../api/api";

function BookAppointment(){

  const [form,setForm] = useState({
    appointmentDate:"",
    timeSlot:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = async ()=>{

    try{

      await API.post("/appointments", form);

      alert("Appointment Booked Successfully");

      setForm({
        appointmentDate:"",
        timeSlot:""
      });

    }catch(err){
      console.log(err);
      alert("Error booking appointment");
    }

  };

  return(
    <Layout>

      <h2>Book Appointment</h2>

      <div className="form">

        <input
          type="date"
          name="appointmentDate"
          value={form.appointmentDate}
          onChange={handleChange}
        />

        <select
          name="timeSlot"
          value={form.timeSlot}
          onChange={handleChange}
        >
          <option value="">Select Slot</option>
          <option value="10:00-10:15">10:00 - 10:15</option>
          <option value="10:15-10:30">10:15 - 10:30</option>
          <option value="10:30-10:45">10:30 - 10:45</option>
          <option value="10:45-11:00">10:45 - 11:00</option>
            <option value="11:00-11:15">11:00 - 11:15</option>
            <option value="11:15-11:30">11:15 - 11:30</option>
            <option value="11:30-11:45">11:30 - 11:45</option>
            <option value="11:45-12:00">11:45 - 12:00</option>
            <option value="12:00-12:15">12:00 - 12:15</option>
            <option value="12:15-12:30">12:15 - 12:30</option>
            <option value="12:30-12:45">12:30 - 12:45</option>
            <option value="1:45-2:00">1:45 - 2:00</option>

        </select>

        <button className="btn-add" onClick={handleSubmit}>
          Book
        </button>

      </div>

    </Layout>
  );
}

export default BookAppointment;