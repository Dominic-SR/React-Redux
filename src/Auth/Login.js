import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { NavLink,useHistory } from 'react-router-dom';
import {loginguserauth} from '../store/action/Authuser'
import { Authuser } from '../store/reducer/Authuser';
import { Formik,useFormik } from 'formik';
import * as yup from 'yup';

function Login() {
  const history = useHistory();
  const Dispatch = useDispatch();
  const [Submit,setSubmit] = useState(false);
  const [Data, setData] = useState({
    email: "",
    password: ""
  });
  
  const AuthData = useSelector((state) => state.loginguserauth?.Data);

  const formik = useFormik({
    initialValues:{
      email : '',
      password : ''
    },
    validationSchema : yup.object({
      email : yup.string()
      .strict()
      .trim()
      .required(),
      password : yup.string()
      .strict()
      .trim()
      .required()
    }),
    onSubmit: (d) =>{
      handleSubmit(d);
    }
  })

function handleSubmit(e){
  setSubmit(true);
    Dispatch(loginguserauth(e))
    history.push('/home');
  setSubmit(false);
  resetData();
}

useEffect(() => {
  console.log(Data)
  //Dispatch(loginguserauth(Data))
}, [Data])

function resetData(){
setData({
  email: "",
  password: ""
})
}

console.log(AuthData);
    return (
      <>
        <div className="float-center">
        <div className="row">
        <div className="col-md-8" style={{margin:"auto",paddingTop:"80px"}}>
        <div className="card card-primary">
              <div className="card-header text-center">
                <h3 className="card-title">Login</h3>
              </div>
              
              <form onSubmit={formik.handleSubmit} >
                <div className="card-body">
                  <div className="form-group text-center">
                    <label for="exampleInputEmail1">Email</label>
                  
                    <input type="email" name="email" onChange={formik.handleChange} className="form-control text-center" value={formik.values.email} placeholder="Enter Your Email Id" />
                    {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div>:null}
                  </div>
                  <div className="form-group text-center">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" name="password" onChange={formik.handleChange} className="form-control text-center" value={formik.values.password}  placeholder="Enter Your Password" />
                    {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div>:null}
                  </div>
                  
                </div>
                <div className="card-footer text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <div className="card-footer text-center">
                  <NavLink to='/register' exact>Register</NavLink>
                </div>
                
              </form>
            </div>
            </div>
            </div>
           </div>
    </>
    )
}

export default Login
