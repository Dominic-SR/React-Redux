import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {NavLink,useHistory} from 'react-router-dom';
import { registerauthuser } from "../store/action/Authuser"

function Register() {
  let history = useHistory();
  const [Register,setRegister] = useState(false)
  const [data, setdata] = useState({
    name:"",
    email:"",
    password:""
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((data) => ({...data, [name] : value}))
    console.log(data);
  }

  const handelSubmit = (e) => {
    setRegister(true);
    dispatch(registerauthuser(data))
    setRegister(false);
    inpuChange();
    history.push("/login")
  }
  
  const inpuChange=()=>{
   setdata({name:"",
    email:"",
    password:""
  });
  }

    return (
        <>
        <div className="float-center">
        <div className="row">
        <div className="col-md-8" style={{margin:"auto",paddingTop:"20px"}}>
        <div className="card card-primary">
              <div className="card-header text-center">
                <h3 className="card-title">Register</h3>
              </div>
              
              <form onSubmit={handelSubmit}>
                <div className="card-body">
                <div className="form-group text-center">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" name="name" onChange={handleChange} className="form-control text-center"  placeholder="Enter Your Email Id" required />
                  </div>

                  <div className="form-group text-center">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" name="email" onChange={handleChange} className="form-control text-center"  placeholder="Enter Your Email Id" required/>
                  </div>

                  <div className="form-group text-center">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" onChange={handleChange} className="form-control text-center"  placeholder="Enter Your Password" required />
                  </div>

                </div>
                <div className="card-footer text-center">
                  <button type="submit" className="btn btn-primary">Register</button>
                </div>
                <div className="card-footer text-center">
                  <NavLink to='/login' exact>Login</NavLink>
                </div>
              </form>
            </div>
            </div>
            </div>
           </div>
    </>
    )
}

export default Register