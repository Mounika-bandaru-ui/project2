import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap"; 

function App() {
  const [user,setUser] =useState("");

   const [users,setUsers] =useState([]);
  const [editIndex,setEditIndex]= useState(null)
   const addHandle = () => {
    const value =user.trim();
    if(value?.length <3){
      alert("please enter more than 3 characters");
      return;
    }
    if(users?.includes(user)){
      alert("you are entered duplicate value");
      return;
    }
    setUsers([...users,value]);
    setUser("");
   };
   console.log(users);


   const handleDelete = (index)=>{
    const list =[...users];
    list.splice(index,1);
    setUsers(list);
   }
   console.log("users",users)
   const editHandle =(user,index) => {
     setUser(user);
     setEditIndex(index);
    // setUser("");
   }
   const handleEdit = () => {
   const list =[...users];
   list[editIndex] =user;

   setUsers(list);
   setUser("");


  }
  return (
    <div className="main-body">
      <div className="todo">   
          <h6>todo app</h6>
          <div>
            <div>
              <input type='text' value={user}  onChange={(e)=>setUser(e.target.value)}  placeholder="Enter your name" />
          <button className='btn btn-danger btn-sm' onClick={editIndex!==null?handleEdit:addHandle}>{editIndex !== null ? "Edit" : "add"}</button>
            </div>
          </div>{users.length > 0 ? <table style={{width:"50%"}} border={"1px"}  className="table table-bordered">
                <thead>
              <tr>
                <td>s.no</td>
                <th>name</th>
                <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                  
                    {users.map((user,index)=><tr key={index}><td>{index+1}</td><td>{user}</td>
                    <td> <button  className ="btn btn-danger" onClick={()=>handleDelete(index)}>X</button> <span></span>
                          <button className ="btn btn-info" onClick={()=>editHandle(user,index)}>Edit</button>
                    </td>
                    </tr>
                  )}
            
                  
              </tbody>
                
                </table> : " "
          }
              
          {/* <tr>
             {users.map((user,index)=>(<div key={`${user}-${index} `}>
          
                
                {user} 
              <span style={{backgroundColor:"red",
                cursor:"pointer"
              }} onClick={()=>handleDelete(index)}>X</span>
              <span style={{cursor:"pointer",backgroundColor:"orange",marginLeft:"10px"}} onClick={()=>editHandle(user,index)}>Edit</span></div>)
              
             )}              
          </tr> */}
      </div>
    </div>
  );
}

export default App;
