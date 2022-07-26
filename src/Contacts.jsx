import React, { useState } from 'react';

function Contacts() {
    const [name,setName]=useState("");
    const [phonenumber,setPhonenumber]=useState("");
    const [location,setLocation]=useState("");
    const [info,setInfo]=useState([{
      name:(""),
      phonenumber:(""),
      location:(""),
    },
     ]);
  const HandleSubmit = (e) => {
      e.preventDefault();
      setInfo([...info,{name,phonenumber,location}])
      
  }
  
    return (
      <>
      <h2>Contact form</h2>
      <form>
        <label>Name:</label>
         <input
          type="text"
          value={name}
          onChange={
            (e)=>{setName(e.target.value)}
            }/>
  
  <br/>
  
  <label>Phonenumber:</label>
         <input
          type="text"
          value={phonenumber}
          onChange={
            (e)=>{setPhonenumber(e.target.value)}
            }/>
            <br/>
  
            <label>Location:</label>
         <input
          type="text"
          value={location}
          onChange={
            (e)=>{setLocation(e.target.value)}
            }/>
            <br/>
  
            <button onClick={HandleSubmit}>Submit</button>
      </form>
      
  {info.map((input,index)=>{
           return(
            <>
            <h3>Name:{input.name}</h3>
            <h3>Phone:{input.phone}</h3>
            <h3>Location:{input.location}</h3>
            </>
           );
  })}
      
      </>
    );
  }
  
  export default Contacts;
  