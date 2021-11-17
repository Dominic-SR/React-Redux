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
    DELETE_FILE_REQUEST,
    DELETE_FILE_SUCCESS,
    DELETE_FILE_FAILURE
 } from '../actiontype/category'

 const initialState = {
     loading : false,
     data : "",
     datas : []
 }

 export const filereducer = (state = initialState, action) =>{
     switch (action.type) {
         case CREATE_FILE_REQUEST:
             return{
             ...state,
             loading: true,
             };
         case CREATE_FILE_SUCCESS:
                return{
                ...state,
                loading: true,
            };
        case CREATE_FILE_FAILURE:
             return{
             ...state,
             loading: true,
        };

        case GET_FILE_REQUEST:
            return{
            ...state
            };
        case GET_FILE_SUCCESS:
            return{
            ...state,
            datas: action.payload
            }
        case GET_FILE_FAILURE:
            return{
            ...state,
            datas: action.payload
            }
            case GET_FILE_BYID_REQUEST:
                return{
                    ...state,
                }
            case GET_FILE_BYID_SUCCESS:
                return{
                ...state,
                data: action.payload
                }
            case GET_FILE_BYID_FAILURE:
                return{
                ...state,
                data: action.payload
                }
        default:
            return state;
     }

 }