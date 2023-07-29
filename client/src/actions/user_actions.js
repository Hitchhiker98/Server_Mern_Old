import axios from 'axios'

import {
    LOGIN_USER
} from './types';
import { response } from 'express';


export function loginUser(dataToSubmit){
    const request = axios.post("/api/users/login", dataToSubmit)
                    .then(response => response.data)

    return {
        type:"login_user",
        payload:request
    }
}