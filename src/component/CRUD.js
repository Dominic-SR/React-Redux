import React,{ useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getUser,deleteUserByID,createUser, getUserById,updateUserById} from '../store/action/user';


const CRUD = () => {

  const dispatch = useDispatch();
  //const loading = useSelector((state) => state.getUser?.loading);
  const users = useSelector((state) => state.getUser?.items);
  const iduser = useSelector((state) => state.getUser?.item);
  const [userId, setUserId] = useState("");
  const [editId, setEditId] = useState("");
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const [inputs, setInputs] = useState({
      id:"",
      Name:"",
      Age:""
  })
 
  const [submitted, setSubmitted] = useState(false);
  const [error, seterror] = useState({});
  
 /* useEffect(() =>{
      console.log("loading", loading)
      if(!loading) {
      setOpen(loading);
      }
  },[loading]);*/

//CreateUser
function handleChange(e){
  const { name, value } = e.target;
  setInputs((inputs) => ({ ...inputs , [name] : value }))
  console.log(e.target.value)
}

function handleSubmit(e){
  e.preventDefault();
  setSubmitted(true);
  if(inputs._id !== undefined){
    dispatch(updateUserById(inputs));
  }
  else{
    dispatch(createUser(inputs));
  }
  setSubmitted(false);
  inputChange()
}

function inputChange() {
  setInputs({
      id:"",
      Name:"",
      Age:""
  })
}

//GetAllUser
useEffect(() => {
  dispatch(getUser());
  },[])
console.log(users)

//EditUser
const editFunc = (id) =>{
  setEditId(id);
}
useEffect(() =>{
dispatch(getUserById(editId))
},[editId]);

useEffect(() => {
  if (iduser) {
    setInputs(iduser);
  }
}, [iduser]);
console.log(iduser);

//DeleteUser
const delFunc = (id) =>{
//setUserId(id)

var result = window.confirm(`Do You Want Sure Delete ? `);
if(result === true){
  dispatch(deleteUserByID(id))
  }
}

/*function handValidate(values){
  const {name,value} = values.target;
  setInputs((inputs)=> ({...inputs, [name]:values}));
  let errors = {}
  let isValid = true;
  if(!values["Name"]){
      isValid = true;
      errors["Name"] = "Enter a Name";
  }
  if(!values["AGE"]){
      isValid = true;
      errors["Age"] = "Enter a Age";
  }
  seterror(errors);
  return isValid
}*/
  return (
    <>
        <div className="row">
        <div className="col-md-12">
        <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">CRUD</h3>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="hidden" value={inputs.id} onChange={handleChange}/>
                    <input type="text" name="Name" value ={inputs.Name} onChange={handleChange} className="form-control"  placeholder="Enter Name"/>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Age</label>
                    <input type="text" name="Age" value ={inputs.Age} onChange={handleChange} className="form-control"  placeholder="Enter Age" />
                  </div>
                  
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
            </div>
            </div>
            <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">CRUD Table</h3>

              <div className="card-tools">
                <div className="input-group input-group-sm" >
                  <input type="text" name="table_search" className="form-control float-right" placeholder="Search"/>

                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body table-responsive p-0" >
              <table className="table table-head-fixed text-nowrap">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {!users?(
                    <tr>
                      <td>No Data</td>
                     </tr> 
                  ):(
                    users.map((user)=>(
                  <tr>
                    <td>{user.Name}</td>
                    <td>{user.Age}</td>
                    <td><button className="btn btn-primary" onClick={() => editFunc(user._id)}>Edit</button></td>
                    <td><button className="btn btn-danger" onClick={() => delFunc(user._id)}>Delete</button></td>
                  </tr>
                  ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default CRUD
