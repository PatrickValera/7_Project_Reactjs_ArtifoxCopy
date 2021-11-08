import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {userLogout} from '../global/actioncreators/userInfoActions'

const Profile = ({history}) => {
    const[email,setEmail]=useState("")
    const dispatch=useDispatch()
    const {userInfo}=useSelector(state=>state.userLogin)
    const handleClick=()=>{
        console.log("logout")
        dispatch(userLogout())
    }
    useEffect(()=>{
        if(!userInfo){
            history.push('')
        }else{
            setEmail(userInfo.name)
        }
    },[userInfo,history])
    return (
        <div>
            <button onClick={handleClick}>LOGOUT</button>
            <form action="">
                <label htmlFor="">Name: </label>
                <input type="text" value={email} onChange={(e)=>setEmail()}></input>
            </form>
        </div>
    )
}

export default Profile
