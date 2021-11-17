import React,{ useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { createfile,getfile,getfilebyid,updatefilebyid,deleteFileById } from '../store/action/category'


const CRUD = () => {

  const dispatch = useDispatch();
  //const loading = useSelector((state) => state.getUser?.loading);
  const file = useSelector((state) => state.getfile?.datas);
  const idfile = useSelector((state) => state.getfile?.data);
  const [userId, setUserId] = useState("");
  const [editId, setEditId] = useState("");
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({
      id:"",
      catgoryname:"",
      description:"",
      image:[]
  })
  const [submitted, setSubmitted] = useState(false);
  const [error, seterror] = useState({});
  

//CreateUser
function handleChange(e){
  const { name, value } = e.target;
  setInputs((inputs) => ({...inputs , [name] : value}))
  if(name === "image"){
   var file = e.target.files[0]
  setInputs((prevInputs) => ({...prevInputs,[name] : file}))
  } 
}

function handleSubmit(e){
  e.preventDefault();
  setSubmitted(true);
  if(inputs._id !== undefined){
   
    var fu = new FormData();
    fu.append("id",inputs._id);
    fu.append("catgoryname",inputs.catgoryname);
    fu.append("description",inputs.description);
    fu.append("image",inputs.image);
    fu.append("myfile",inputs.image.name);

    dispatch(updatefilebyid(fu));
  }
  else{  
    console.log(inputs)
    var fd = new FormData();
    fd.append("catgoryname",inputs.catgoryname);
    fd.append("description",inputs.description);
    fd.append("image",inputs.image);
    fd.append("myfile",inputs.image.name);
    dispatch(createfile(fd));
  }
  setSubmitted(false);
  inputChange()
}

function inputChange(){
  setInputs({
      id:"",
      catgoryname:"",
      description:"",
      image:[]
  })
}

//getAllfile
useEffect(() =>{
  dispatch(getfile())
},[])
console.log(file)

//Editfile
const editFunc = (id) =>{
setUserId(id)
}
  useEffect(() => {
  dispatch(getfilebyid(userId))
  },[userId]) 

useEffect(() =>{
  if(idfile){
    setInputs(idfile);
  }
}, [idfile]);
//console.log(idfile)

//Deletefile
const delFunc = (id) =>{
  var result = window.confirm('Do Yoy want Sure Delete ?')
  if(result === true){
    dispatch(deleteFileById(id))
  }
}

  return (
    <>
        <div className="row">
        <div className="col-md-12">
        <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">CRUD</h3>
              </div>
              <form onSubmit={handleSubmit} enctype="multipart/form-data">
                <div className="card-body">
                  <div className="form-group">
                  <input type="hidden" value={inputs._id}/>
                    <label for="exampleInputEmail1">Category Name</label>
                    <input type="text" name="catgoryname" value ={inputs.catgoryname} onChange={handleChange} className="form-control"  placeholder="Enter Name"/>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">description</label>
                    <input type="text" name="description" value={inputs.description} className="form-control" onChange={handleChange} placeholder="Enter description" />
                  </div>

                  <div className="form-group">
                    <input type="file" name="image" onChange={handleChange} />
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
                    <th>Category Name</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {!file?(
                    <tr>
                      <td>No Data</td>
                    </tr>
                  ):(
                    file.map((files)=>(
                      <tr>
                      <td>{files.catgoryname}</td>
                      <td>{files.description}</td>
                      <td><img src={`uploads/${files.image}`} height="100px" width="100px" /></td>
                      <td><button className="btn btn-primary" onClick = {() => editFunc(files._id)}>Edit</button></td>
                      <td><button className="btn btn-danger" onClick={() => delFunc(files._id)}>Delete</button></td>
                      </tr>
                    ))
                  )
                  }
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
