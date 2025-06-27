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
           <form onSubmit={handleSubmit} className="formstyle">
                <h4>Login</h4>
                <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                </div>

                
                <label>Email:</label>
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} required/><br/>
                <label>Phone:</label><br></br>
                <input type="phone" value={phone} onChange={handlePhone} required/><br/>
                <label>password:</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/><br/>
                <button type="submit">Submit</button>
            </form>
           
            </div>
        </div>
    )
}

export default Form;