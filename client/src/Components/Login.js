import React from 'react'
import {Route,Switch,Link} from "react-router-dom"


export default function Login() {
    return (
        <div className="login-body">
            <div className="login-page">
                <h1>Login</h1>

                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="password" />
                    <button id="login-btn">Login</button>
                    <p>No Account?<Link to="/signup" className="linking">Signup</Link></p>
                </form>
            </div>
        </div>
    )
}
