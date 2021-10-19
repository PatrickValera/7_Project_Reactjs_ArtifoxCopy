import { useState,useEffect } from "react"
import {userLogin} from '../global/actioncreators/userInfoActions'
import {useDispatch, useSelector} from 'react-redux'
const Login = ({history}) =>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const dispatch=useDispatch()
    const {userInfo}=useSelector(state=>state.userInfo)
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("SUBMIT")
        dispatch(userLogin(email,password))
    }
    const handleChange=(e)=>{
        if(e.target.type==="email")setEmail(e.target.value)
        else setPassword(e.target.value)
    }
    useEffect(()=>{
        if(userInfo){
            history.push('/user/profile')
        }
    },[userInfo])
    return(
        <div className="login-form">
            <form action="" onSubmit={handleSubmit} className="form">
                <h1 className="heading">Login</h1>
                {false&&
                <div className="error-message">
                    <i className="fas fa-exclamation-triangle"></i>
                    <span className="message">Incorrect email or password</span>
                </div>}
                <input className="input" type="email" placeholder="email" value={email} onChange={handleChange} />
                <input className="input" type="password" placeholder="password" value={password} onChange={handleChange}/>
                <input className="input button" type="submit" value="login" />
            </form>
        <div className="image">
            <img src="/images/home/home-table.jpg" alt="" />
        </div>
        </div>
    )
}
export default Login