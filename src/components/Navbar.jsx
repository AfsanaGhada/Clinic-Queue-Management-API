function Navbar(){

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = ()=>{
    localStorage.removeItem("token");
    window.location.href="/";
  }

  return(
    <div className="navbar">

      <div>
        <h3>{user?.clinicName}</h3>
        <p>Clinic ID: {user?.clinicId}</p>
      </div>

      <button onClick={logout}>
        Logout
      </button>

    </div>
  )
}

export default Navbar