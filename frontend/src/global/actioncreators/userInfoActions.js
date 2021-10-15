import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS} from '../constants/userInfoConstants'
import axios from 'axios'

export const userLogin =(email,password)=>async(dispatch)=>{
    try{
        dispatch({
        type:USER_LOGIN_REQUEST
        })

        const {data}=axios.post('/api/user/login')
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
    }catch(err){
        dispatch({
            type:USER_LOGIN_FAIL})
    }
}