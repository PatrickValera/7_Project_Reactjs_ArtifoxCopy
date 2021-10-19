import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {userLogout} from '../global/actioncreators/userInfoActions'
const Profile = ({history}) => {
    const dispatch=useDispatch()
    const {userInfo}=useSelector(state=>state.userInfo)
    const handleClick=()=>{
        console.log("logout")
        dispatch(userLogout())
    }
    useEffect(()=>{
        if(!userInfo){
            history.push('')
        }
    },[userInfo])
    return (
        <div>
            <button onClick={handleClick}>LOGOUT</button>
        </div>
    )
}

export default Profile
