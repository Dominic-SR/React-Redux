import axios from "axios";
import {
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_BYID_REQUEST,
  GET_USER_BYID_SUCCESS,
  GET_USER_BYID_FAILURE,
  UPDATE_USER_BYID_REQUEST,
  UPDATE_USER_BYID_SUCCESS,
  UPDATE_USER_BYID_FAILURE,
  DELETE_USER_BYID_FAILURE,
  DELETE_USER_BYID_REQUEST,
  DELETE_USER_BYID_SUCCESS,
} from '../actiontype/user';

export const createUser = (data) => {
return (dispatch) => {
  dispatch({ type: CREATE_USER_REQUEST });
  axios.post("http://localhost:2000/persons",data)
  .then(function(res){
    console.log("res=>",res.data)
    setTimeout(() => {
      dispatch({
        type: CREATE_USER_SUCCESS,
        payload: res.data,
      });
     dispatch(getUser());
    }, 1000)
  })
  .catch(function (error){
    const { response } = error;
    console.log("err", response);
    if(response !== undefined){
      dispatch({
      type: CREATE_USER_FAILURE,
      payload: response.data,
      });
      alert(response.data?.message);  
    }
  })
}
}

export const getUser = () =>{
  return (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    axios.get("http://localhost:2000/persons")
    .then(function(res){
      console.log("res=>", res.data);
      dispatch({
        type: GET_USER_SUCCESS,
        payload: res.data
      });  
    })
    .catch(function(error){
      const {response} = error;
      console.log("err",response);
      if(response !== undefined){
        dispatch({
          type: GET_USER_FAILURE,
          payload: response?.data,
        });
      }
    })
  };  
}

export function getUserById(id){
  return (dispatch) =>{
    dispatch({ type: GET_USER_BYID_REQUEST });
    axios .get(`http://localhost:2000/persons/${id}`)
      .then(function (res){
        console.log("res =>",res.data);
        dispatch({
          type: GET_USER_BYID_SUCCESS,
          payload: res.data,
        })
      })
      .catch(function (error) {
        const { response } = error;
        console.log("err",response);
        if(response !== undefined){
          dispatch({
            type: GET_USER_BYID_FAILURE,
            payload: response.data,
          })
        }
      })
  }
}

export function updateUserById(data){
  return(dispatch) =>{
    dispatch({type: UPDATE_USER_BYID_REQUEST});
    axios.put(`http://localhost:2000/persons/${data._id}`,data)
    .then(function (res){
      console.log("res=>", res.data);
      setTimeout(() =>{
        dispatch({
          type:UPDATE_USER_BYID_SUCCESS,
          payload: res.data
        });
        dispatch(getUser());
      }, 1000)
    })
    .catch(function (error){
      const { response } = error;
      console.log("err", response);
      if (response !== undefined){
        dispatch({
          type: UPDATE_USER_BYID_FAILURE,
          payload: response.data
        })
      }
    })
  }
}

export function deleteUserByID(id) {
  return (dispatch) => {
    console.log(id)
    dispatch({ type: DELETE_USER_BYID_REQUEST});
    axios.delete(`http://localhost:2000/persons/${id}`)
    .then(function(res) {
      console.log("res=>", res.data);
      dispatch({
        type: DELETE_USER_BYID_SUCCESS,
        payload: id,
      });
    })
    .catch(function(error){
      const { response } = error;
      console.log("err", response);
      if(response !== undefined){
        dispatch({
          type:DELETE_USER_BYID_FAILURE,
          payload: response.data,
        })
        alert(response.data?.message)
      }
    })
  }
}
