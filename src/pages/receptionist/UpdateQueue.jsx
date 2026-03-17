import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import API from "../../api/api";

function UpdateQueue() {
  const { id } = useParams();

  const update = async (status) => {
    try {
      await API.patch(`/queue/${id}`, { status });
      alert(`Status updated to ${status}`);
    } catch (err) {
      console.error("Failed to update status:", err.response?.data || err.message);
      alert("Failed to update status");
    }
  };

  return (
    <Layout>
      <h2>Update Status</h2>

      <button onClick={() => update("in-progress")}>Start</button>
      <button onClick={() => update("done")} style={{ marginLeft: "10px" }}>
        Done
      </button>
      <button onClick={() => update("skipped")} style={{ marginLeft: "10px" }}>
        Skip
      </button>
    </Layout>
  );
}

export default UpdateQueue;