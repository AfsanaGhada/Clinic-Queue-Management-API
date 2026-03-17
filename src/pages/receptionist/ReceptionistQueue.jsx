import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import API from "../../api/api";

function ReceptionistQueue() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // default today
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch queue for selected date
  const fetchQueue = async () => {
    setLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("token"); // receptionist token
      const res = await API.get(`/queue?date=${date}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setQueue(res.data);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Failed to fetch queue");
      setQueue([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQueue();
  }, [date]);

  // Update patient status
  const updateStatus = async (id, newStatus) => {
    try {
      const token = localStorage.getItem("token");
      await API.patch(`/queue/${id}`, { status: newStatus }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Refresh queue after update
      fetchQueue();
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
    }
  };

  return (
    <Layout>
      <h2>Daily Queue</h2>

      {/* Date Input */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          Select Date:{" "}
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button onClick={fetchQueue} style={{ marginLeft: "10px" }}>
          Fetch Queue
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Queue Table */}
      {queue.length > 0 ? (
        <table border="1" cellPadding="10" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Token</th>
              <th>Patient Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {queue.map((item) => (
              <tr key={item.id}>
                <td>{item.tokenNumber}</td>
                <td>{item.appointment.patient.name}</td>
                <td>{item.status}</td>
                <td>
                  {item.status !== "called" && (
                    <button onClick={() => updateStatus(item.id, "called")}>
                      Called
                    </button>
                  )}
                  {item.status !== "completed" && (
                    <button
                      onClick={() => updateStatus(item.id, "completed")}
                      style={{ marginLeft: "10px" }}
                    >
                      Completed
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No patients in queue for this date.</p>
      )}
    </Layout>
  );
}

export default ReceptionistQueue;