import axios from "axios";
import {
    CREATE_FILE_REQUEST,
    CREATE_FILE_SUCCESS,
    CREATE_FILE_FAILURE,
    GET_FILE_REQUEST,
    GET_FILE_SUCCESS,
    GET_FILE_FAILURE,
    GET_FILE_BYID_REQUEST,
    GET_FILE_BYID_SUCCESS,
    GET_FILE_BYID_FAILURE,
    UPDATE_FILE_REQUEST,
    UPDATE_FILE_SUCCESS,
    UPDATE_FILE_FAILURE,
    DELETE_FILE_REQUEST,
    DELETE_FILE_SUCCESS,
    DELETE_FILE_FAILURE,
    
} from '../actiontype/category';

export const createfile = (data) =>{
    console.log(data)
    return(dispatch) =>{
        dispatch({ type: CREATE_FILE_REQUEST});
       axios.post("http://localhost:2000/api/category",data)
        .then(function(res){
            console.log("res=>",res.data)
            setTimeout(() => {
                dispatch({
                    type: CREATE_FILE_SUCCESS,
                    payload: res.data,
                });
                dispatch(getfile())
            },1000)
        })
        .catch(function (error){
            const { response } = error;
            console.log("err", response);
            if(response !== undefined){
                dispatch({
                    type: CREATE_FILE_FAILURE,
                    payload: response.data
                });
               
            }
        })
     }
}

export const getfile = () =>{
    return(dispatch) =>{
        dispatch({ type:GET_FILE_REQUEST });
        axios.get("http://localhost:2000/api/category")
        .then(function(res){
            console.log("res=>", res.data);
            dispatch({
                type:GET_FILE_SUCCESS,
                payload:res.data
            })
        })
        .catch(function(error){
            const {response} = error;
            console.log("err",response);
            if(response !== undefined){
                dispatch({
                type:GET_FILE_FAILURE,
                payload: response?.data
                })
            }
        })
    }
}

export function getfilebyid(id){
    return(dispatch) => {
        console.log(id)
        dispatch({ type: GET_FILE_BYID_REQUEST });
        axios.get(`http://localhost:2000/api/category/${id}`)
        .then(function(res){
            console.log("res =>",res.data);
            dispatch({
                type: GET_FILE_BYID_SUCCESS,
                payload:res.data
            })
        })
        .catch(function(error){
            const { response } = error;
            console.log("err",response);
            if(response !== undefined){
              dispatch({
                type: GET_FILE_BYID_FAILURE,
                payload: response.data,
              })
            }
        })
    }
}

export function updatefilebyid(data){
    return(dispatch) => {
        console.log(...data)
        var getID = Object.fromEntries(data).id
       
        dispatch({ type: UPDATE_FILE_REQUEST });
        axios.put(`http://localhost:2000/api/category/${getID}`,data)
        .then(function(res){
            console.log("res=>", res.data);
            setTimeout(() => {
                dispatch({
                    type: UPDATE_FILE_SUCCESS,
                    payload: res.data
                  });
                  dispatch(getfile())
            },1000)
        })
        .catch(function (error){
            const { response } = error;
            console.log("err", response);
            if (response !== undefined){
              dispatch({
                type: UPDATE_FILE_FAILURE,
                payload: response.data
              })
            }
          })
    }
}

export function deleteFileById(id) {
    return(dispatch) => {
        console.log(id)
        dispatch({type: DELETE_FILE_REQUEST});
        axios.delete(`http://localhost:2000/api/category/${id}`)
        .then(function(res){
            console.log("res=>",res.data)
            setTimeout(() =>{
            dispatch({
                type:DELETE_FILE_SUCCESS,
                payload: res.data
            })
            dispatch(getfile())
            },1000)
        })
        .catch(function(error){
            const { response } = error;
            console.log("err", response);
      if(response !== undefined){
        dispatch({
          type:DELETE_FILE_FAILURE,
          payload: response.data,
        })
        alert(response.data?.message)
      }
        })
    }
}