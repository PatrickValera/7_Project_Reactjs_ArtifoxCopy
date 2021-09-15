import React from 'react'

const Register = () => {
    return (
        <div>
        <div className="register-page">
            <h1>Create an account</h1>
            <form action="" className="register-form">
                <div className="input-container">
                    {/* <label htmlFor="firstName"></label> */}
                    <input type="text" placeholder="First Name"/>
                    {/* <label htmlFor="lastName"></label> */}
                    <input type="text" placeholder="Last Name"/>
                </div>
                <div className="input-container">
                    <label htmlFor="email"></label>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input-container">
                    <label htmlFor="password"></label>
                    <input type="password" placeholder="Password"/>
                </div>

                    <button>Create</button>

            </form>
        </div>
        </div>
    )
}

export default Register
