import React from 'react'
import slogo from "../images/S-logo.png"
import { Link ,useHistory} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

function Adminpage() {
    const [orders, setOrders] = useState([])
    const history = useHistory();
    useEffect(() => {
        fetchOrders();
        if(!localStorage.getItem("isLoggedIn")){
            history.push("/login");

        }
        else if (localStorage.getItem("userType")==="user"){
           history.push("/userpage");
        }
    }, [])

    const fetchOrders = async () => {
        try {
            const res = await axios.get("http://localhost:4000/getallOrders");
            setOrders(res.data);
        }
        catch (e) {
            console.log("Error:", e);
        }
    }

    const deleteItem = async (_id) => {
        console.log(_id)

        try {
            const res = await axios.delete(`http://localhost:4000/deleteOrder/${_id}`);
            fetchOrders();
        }
        catch (e) {
            console.log("Error:", e);
        }

    }
    return (
        <div>
            <header>
                <div className="top">
                    <div className="left">
                        <img src={slogo} alt="" />
                    </div>
                    <h1>Admin Page</h1>
                    <div>
                        <Link to="/addproducts" id="admin-products" style={{ textDecoration: 'none' }}>See Products</Link>
                    </div>

                </div>
            </header>
            <div className="orders">
                <h1>Orders Details And Status</h1>
                <table className="orders-table">
                    <thead>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>user_id</th>
                        <th>Date and Time</th>
                        <th>Status</th>
                        <th>Remove orders</th>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) => {
                                return (
                                    <tr>
                                        <td>{order.product.name}</td>
                                        <td>{order.qty}</td>
                                        <td>{order.owner._id}</td>
                                        <td>{order.createdAt}</td>
                                        <td><input type="checkbox" /></td>
                                        <td><button onClick={()=>deleteItem(order._id)}>X</button></td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Adminpage;
