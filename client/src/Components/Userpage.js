import React from 'react'
import Userheader from "./Userheader"
import Userproduct from "./Userproducts"
import Footer from "./Footer"

export default function Userpage() {
    return (
        <div className="userpage">
            <Userheader/>
            <Userproduct/>
            <Footer/>
        </div>
    )
}
