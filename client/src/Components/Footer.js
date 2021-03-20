import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
                <div className="left-footer">
                    <h1>ABOUT</h1>
                    <p>our company</p>
                    <p>About Us</p>
                    <p>Terms of Services</p>
                </div>
                <div className="right-footer">
                    <h1>CONTACT</h1>
                    <h3>Contact Admin</h3>
                    <input type="email" placeholder="Email"/>
                    <button className="subscribe">Subscribe</button>
                </div>
            </footer>
        </div>
    )
}


export default Footer

