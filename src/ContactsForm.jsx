import React, { useState } from 'react';
class ContactsForm extends Component {
    constructor(props) {
        super();
        this.state = {students:[{
            name:"",
            phonenumber:"",
            location:""
        } ]}
    }

    HandleSubmit = (e) => {
        e.preventDefault();
        setInfo([...info,{
            name:this.state.name,
            phonenumber:this.state.phonenumber,
            location:this.state.location}])
        
    }

    render() { 
        return (  
            <>
            <h2>Contact form</h2>
            <form>
              <label>Name:</label>
               <input
                type="text"
                value={this.state.name}
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
}
 
export default ContactsForm;