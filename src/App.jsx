import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import ProtectedRoute from "./routes/ProtectedRoute"
import Users from "./pages/Users"
import "./index.css"
import "./App.css"
import PatientDashboard from "./pages/patient/PatientDashboard";
import BookAppointment from "./pages/patient/BookAppointment";
import MyAppointments from "./pages/patient/MyAppointments";
import Prescriptions from "./pages/patient/Prescriptions";
import Reports from "./pages/patient/Reports";
import AppointmentDetail from "./pages/patient/AppointmentDetail";
import ReceptionistDashboard from "./pages/receptionist/ReceptionistDashboard";
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import AddPrescription from "./pages/doctor/AddPrescription";
import AddReport from "./pages/doctor/AddReport";
import DoctorQueue from "./pages/doctor/DoctorQueue";
import PatientDetails from "./pages/doctor/PatientDetails";
import QueueList from "./pages/receptionist/QueueList";
import UpdateQueue from "./pages/receptionist/UpdateQueue";
import ReceptionistQueue from "./pages/receptionist/ReceptionistQueue";


function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login/>}/>

        <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }
        />
        import Users from "./pages/Users";

      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Users/>
          </ProtectedRoute>
        }
      />

      <Route path="/dashboard" element={<PatientDashboard />} />


      <Route path="/patient/PatientDashboard" element={<PatientDashboard />} />
      <Route path="/patient/book" element={<BookAppointment />} />
      <Route path="/patient/appointments" element={<MyAppointments />} />
      <Route path="/patient/appointment/:id" element={<AppointmentDetail />} />
      <Route path="/patient/prescriptions" element={<Prescriptions />} />
      <Route path="/patient/reports" element={<Reports />} />

      <Route path="/receptionist" element={<ReceptionistDashboard />} />
      <Route path="/receptionist/queuelist" element={<QueueList />} />
      <Route path="/receptionist/update/:id" element={<UpdateQueue />} />
      <Route path="/receptionist/queue" element={<ReceptionistQueue />}
       />
      <Route path="/doctor" element={<DoctorDashboard />} />
      <Route path="/doctor/queue" element={<DoctorQueue />} />
      <Route path="/doctor/patient/:id" element={<PatientDetails />} />
      <Route path="/doctor/prescription/:id" element={<AddPrescription />} />
      <Route path="/doctor/report/:id" element={<AddReport />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App;