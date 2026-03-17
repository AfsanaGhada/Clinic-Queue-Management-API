import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../api/api";

function Users(){

  const [users,setUsers] = useState([]);

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:"",
    role:""
  });

  const [editId,setEditId] = useState(null);

  useEffect(()=>{
    fetchUsers();
  },[]);

  const fetchUsers = async ()=>{
    const res = await API.get("/admin/users");
    setUsers(res.data);
  };

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  // ADD OR UPDATE
  const handleSubmit = async ()=>{
    try{

      if(editId){
        await API.put(`/admin/users/${editId}`,form);
        alert("User Updated");
      }else{
        await API.post("/admin/users",form);
        alert("User Added");
      }

      setForm({name:"",email:"",password:"",role:""});
      setEditId(null);
      fetchUsers();

    }catch(err){
      alert("Error");
    }
  };
  // EDIT (FIXED)
  const handleEdit = (user)=>{
    setForm({
      name:user.name,
      email:user.email,
      password:"",
      role:user.role
    });

    setEditId(user._id); 
  };

  // DELETE (FIXED)
  const handleDelete = async (id)=>{
    try{
      await API.delete(`/admin/users/${id}`);
      alert("User Deleted");
      fetchUsers();
    }catch(err){
      alert("Delete Error");
    }
  };

  return(

    <Layout>

      <h2>User Management</h2>

      {/* FORM */}
      <div className="form">

        <input name="name" value={form.name} placeholder="Name" onChange={handleChange}/>
        <input name="email" value={form.email} placeholder="Email" onChange={handleChange}/>
        <input name="password" value={form.password} placeholder="Password" onChange={handleChange}/>

        <select name="role" value={form.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="doctor">Doctor</option>
          <option value="receptionist">Receptionist</option>
          <option value="patient">Patient</option>
        </select>

        <button className="btn btn-add" onClick={handleSubmit}>
          {editId ? "Update User" : "Add User"}
        </button>

      </div>

      {/* TABLE */}
      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {users.map((u)=>(
            <tr key={u._id}> 

              <td>{u.name}</td>
              <td>{u.email}</td>

              {/* ROLE COLOR */}
              <td>
                <span className={`role ${u.role}`}>
                  {u.role}
                </span>
              </td>

              <td>
                <button className="btn btn-edit" onClick={()=>handleEdit(u)}>
                  Edit
                </button>

                <button className="btn btn-delete" onClick={()=>handleDelete(u._id)}>
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </Layout>
  );
}

export default Users;