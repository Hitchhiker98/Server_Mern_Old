// import {
//     LOGIN_USER
// } from '../actions/types';



export default function( state ={}, action){
    switch(action.type) {
        case 'login_user':
            return {...state, loginSuccess: action.payload}
        default: 
        return state;
    }
}