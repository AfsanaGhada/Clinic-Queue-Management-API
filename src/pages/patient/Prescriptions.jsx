import Layout from "../../components/Layout";

function Prescriptions(){
  return(
    <Layout>
      <h2> Prescriptions Details </h2>
      <p>Here you can view your prescriptions and the medicines prescribed by your doctor.</p>

      <div className="prescriptions-list">
        <div className="prescription-card">
            <h3>Prescription #1</h3>
            <p><strong>Doctor:</strong> Dr. Smith</p>
            <p><strong>Date:</strong> 2024-06-01</p>
            <p><strong>Medicines:</strong></p>
            <ul>
                <li>Medicine A - 1 tablet daily</li>
                <li>Medicine B - 2 tablets after meals</li>
            </ul>
        </div>  
        <p>

            -----------------------------------
        </p>
        <div className="prescription-card">
            <h3>Prescription #2</h3>
            <p><strong>Doctor:</strong> Dr. afsana</p>
            <p><strong>Date:</strong> 2024-05-15</p>
            <p><strong>Medicines:</strong></p>
            <ul>
                <li>Medicine C - 1 tablet daily</li>
                <li>Medicine D - 1 tablet before sleep</li>
            </ul>
        </div>  
      </div>
    </Layout>
    
  );
}

export default Prescriptions;