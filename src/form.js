import React, { useEffect, useState } from "react";

const Form =() =>{
    const [username,setUsername] =useState("");
    const [email,setemail] =useState("");
    const [phone,setPhone] =useState("");
    const [password,setPassword] =useState("");
    const [formData,setFormdata] =useState("");

      const [message, setMessage] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form data",username,email,phone,password);
    }
    const handlePhone = (e)=>{
    
     const value=  e.target.value;
    //  if(/^\d*$/.test(value)){
    //    setPhone(e.target.value);
    //    const regex = /^\d{10}$/;
    //       if(value.length === 0 || regex.test(value)){
    //         setMessage(value.length === 10 ? "" : '')
    //       }
    //       else{
    //         setMessage("Mobile number must be 10 digits")
    //       }
    //  }else{
    //     setMessage("only digits allowed")
       
    //  }
     
    };
    return(
        <div className="main">
          <div className="parent">
          <h2>Login</h2>
           <form onSubmit={handleSubmit} className="formstyle">
                <div className="field">
                <label>Username:</label>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                </div>

                <div className="field">
                <label>Email:</label>
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} required/><br/>
                </div>

                <div className="field">
                <label>Phone:</label>
                <input type="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} required/><br/>
                </div>
              <div className="field">
                <label>password:</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/><br/>
                </div>
                <button  type="submit" style={{marginLeft:"100px",marginTop:"10px"}}>Submit</button>
            </form>
           
            </div>
        </div>
    )
}

export default Form;