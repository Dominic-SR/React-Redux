import axios from "axios";
import {
    REGISTER_AUTHUSER_REQUEST,
    REGISTER_AUTHUSER_SUCCESS,
    REGISTER_AUTHUSER_FAILURE,
    LOGIN_AUTHUSER_REQUEST,
    LOGIN_AUTHUSER_SUCCESS
} from '../actiontype/Authuser';
import { useHistory } from "react-router";

export function registerauthuser(data){
    return(dispatch) => {
        dispatch({
            type: REGISTER_AUTHUSER_REQUEST
        });
        axios.post("http://localhost:2000/api/register",data)
        .then(function(res){
            console.log("res =>",res.data)
            setTimeout(()=>{
                dispatch({
                    type: REGISTER_AUTHUSER_SUCCESS,
                    payoad: res.data
                });
            }, 1000)
        })
        .catch(function (error){
            const { response } = error;
            console.log("err", response);
            if(response !== undefined){
              dispatch({
              type: REGISTER_AUTHUSER_FAILURE,
              payload: response.data,
              });  
            }
          })
    }
}

export function loginguserauth(data){
    console.log("123")
    return(dispatch) =>{
        console.log(data);
        dispatch({
            type:LOGIN_AUTHUSER_REQUEST
        })
        console.log(data)
        axios.post("http://localhost:2000/api/login",data)
        .then(function(res){
            console.log("res =>",res.data)
            setTimeout(() => {
                dispatch({
                    type: LOGIN_AUTHUSER_SUCCESS,
                    payload: res.data
                })
                localStorage.setItem('auth',JSON.stringify(res.data));
            })           
        })
        .catch(function (error){
            const { response } = error;
            console.log("err", response);
            if(response !== undefined){
              dispatch({
              type: REGISTER_AUTHUSER_FAILURE,
              payload: response.data,
              });  
            }
        })
    }
}