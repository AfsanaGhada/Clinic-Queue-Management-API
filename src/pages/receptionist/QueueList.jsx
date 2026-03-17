import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import API from "../../api/api";
import { useNavigate } from "react-router-dom";

function QueueList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const today = new Date().toISOString().split("T")[0];
      const res = await API.get(`/queue?date=${today}`);
      setData(res.data);
    } catch (err) {
      console.error("Failed to fetch queue:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <h2>Today Queue</h2>

      {data.length === 0 ? (
        <p>No patients in queue today.</p>
      ) : (
        data.map((q) => (
          <div
            key={q.id}
            style={{ border: "1px solid #ddd", padding: "10px", marginTop: "10px" }}
          >
            <p>
              Token {q.tokenNumber} - {q.appointment?.patient?.name}
            </p>

            <button onClick={() => navigate(`/receptionist/update/${q.id}`)}>
              Update Status
            </button>

            <button
              onClick={() => navigate(`/doctor/prescription/${q.appointmentId}`)}
              style={{ marginLeft: "10px" }}
            >
              Add Medicine
            </button>

            <button
              onClick={() => navigate(`/doctor/report/${q.appointmentId}`)}
              style={{ marginLeft: "10px" }}
            >
              Add Report
            </button>
          </div>
        ))
      )}
    </Layout>
  );
}

export default QueueList;