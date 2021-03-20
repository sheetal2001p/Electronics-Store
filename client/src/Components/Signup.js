import React from 'react'
import {Route,Switch,Link} from "react-router-dom"


function Signup() {
    return (
        <div className="login-body">
            <div className="login-page">
                <h1>SignUp</h1>

                <form>
                    <input type="text" placeholder="FirstName"/>
                    <input type="text" placeholder="LastName"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="password" />
                    <input type="password" placeholder="confirm password" />
                    <button id="login-btn">Signup</button>
                    <p>Already have an account?<Link to="/login" className="linking">login</Link>
</p>
                </form>
            </div>
        </div>
    )
}

export default Signup
