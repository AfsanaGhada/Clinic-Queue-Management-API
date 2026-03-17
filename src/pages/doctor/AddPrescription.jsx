import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import API from "../../api/api";

function AddPrescription() {
  const { id } = useParams(); // appointmentId
  const navigate = useNavigate();

  const [form, setForm] = useState({ medicines: "", notes: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.medicines.trim()) {
      return alert("Please enter medicines.");
    }

    try {
      setLoading(true);
      await API.post(`/prescriptions/${id}`, form);
      alert("Prescription added successfully!");
      navigate(-1); // go back to previous page (queue)
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to add prescription. Check your inputs or role.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <h2>Add Prescription</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <input
          placeholder="Medicines"
          value={form.medicines}
          onChange={(e) => setForm({ ...form, medicines: e.target.value })}
        />
        <input
          placeholder="Notes"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />

        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Saving..." : "Save"}
        </button>
      </div>
    </Layout>
  );
}

export default AddPrescription;