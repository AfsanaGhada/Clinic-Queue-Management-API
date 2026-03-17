import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import API from "../../api/api";

function AddReport() {
  const { id } = useParams(); // appointmentId
  const navigate = useNavigate();

  const [form, setForm] = useState({
    diagnosis: "",
    tests: "",
    remarks: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.diagnosis.trim()) {
      return alert("Diagnosis is required.");
    }

    try {
      setLoading(true);
      await API.post(`/reports/${id}`, form);
      alert("Report added successfully!");
      navigate(-1); // go back to previous page
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to add report. Check your inputs or role.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <h2>Add Report</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <input
          placeholder="Diagnosis"
          value={form.diagnosis}
          onChange={(e) => setForm({ ...form, diagnosis: e.target.value })}
        />
        <input
          placeholder="Tests"
          value={form.tests}
          onChange={(e) => setForm({ ...form, tests: e.target.value })}
        />
        <input
          placeholder="Remarks"
          value={form.remarks}
          onChange={(e) => setForm({ ...form, remarks: e.target.value })}
        />

        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </Layout>
  );
}

export default AddReport;