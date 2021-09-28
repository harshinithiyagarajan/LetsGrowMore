import React ,{useEffect, useState} from 'react';
import "./index.css";


function App(){
  const [users,setUsers]=useState()
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false);
    },2000);
  },[])
  const getuser=async() =>{
    const a = await fetch("https://reqres.in/api/users?page=1");
    const b = await a.json();
    setUsers(b.data);
  }
return (
  <>
  <div>
    <div className="navbar">
  <div className="heading">LetsGrowMore</div>
  <div className="click">
    <button onClick={getuser}>Users</button>
    </div></div>
    {
      loading ?
      <div className="center">
      </div>
      :
  <div className="container">
  {users?.map((now,id) => {
    return(
      <div className="person" key={id}>
      <img src={now.avatar} alt="..."/>
        <div className="name">{now.first_name} {now.last_name}</div>
        <div className="mail">{now.email}</div>
        <p></p>
        </div>
    );
  })}  
  </div>
    }
  </div>
  </>
);
}
export default App;

