import {
    REGISTER_AUTHUSER_REQUEST,
    REGISTER_AUTHUSER_SUCCESS,
    REGISTER_AUTHUSER_FAILURE,
    LOGIN_AUTHUSER_REQUEST,
    LOGIN_AUTHUSER_SUCCESS,
    LOGIN_AUTHUSER_FAILURE
} from "../actiontype/Authuser";

const initialState = {
    loading : false,
    Data : "",
    Datas : []
};

export const Authuser = (state = initialState, action) => {
    switch(action.type){
            case REGISTER_AUTHUSER_REQUEST:
            return{
            ...state,
            loading: true,    
            };
            case REGISTER_AUTHUSER_SUCCESS:
            return{
            ...state,
            loading: false,
            };
            case REGISTER_AUTHUSER_FAILURE:
            return{
            ...state,
            loading: false,
            };

            case LOGIN_AUTHUSER_REQUEST:
            return{
            ...state,
            loading: true    
            };

            case LOGIN_AUTHUSER_SUCCESS:
            return{
            ...state,
            loading: false,
            Data: action.payload
            }

            case LOGIN_AUTHUSER_FAILURE:
            return{
            ...state,
            loading: false,
            Data: action.payload
            }

            default:
            return state;
    }
}