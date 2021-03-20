import React from 'react'
import slogo from "../images/S-logo.png"

function Adminpage() {
    return (
        <div>
            <header>
                <div className="left">
                    <img src={slogo} />
                </div>
                <h1>Admin Page</h1>
                <div>
                    <h3>See your all orders here </h3>
                </div>

            </header>
            <div className="orders">
                <h1>Orders Details And Status</h1>
                <table className="orders-table">
                    <thead>
                        <th>S.no.</th>
                        <th>Product Id</th>
                        <th>Qty</th>
                        <th>user_id</th>
                        <th>Date and Time</th>
                        <th>Status</th>
                        <th>Remove orders</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>1001</td>
                            <td>2</td>
                            <td>100</td>
                            <td>1/2/2021 at 12:00 PM </td>
                            <td><input type="checkbox" /></td>
                            <td><button>X</button></td>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>1001</td>
                            <td>2</td>
                            <td>100</td>
                            <td>1/2/2021 at 12:00 PM </td>
                            <td><input type="checkbox" /></td>
                            <td><button>X</button></td>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>1001</td>
                            <td>2</td>
                            <td>100</td>
                            <td>1/2/2021 at 12:00 PM </td>
                            <td><input type="checkbox" /></td>
                            <td><button>X</button></td>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>1001</td>
                            <td>2</td>
                            <td>100</td>
                            <td>1/2/2021 at 12:00 PM </td>
                            <td><input type="checkbox" /></td>
                            <td><button>X</button></td>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>1001</td>
                            <td>2</td>
                            <td>100</td>
                            <td>1/2/2021 at 12:00 PM </td>
                            <td><input type="checkbox" /></td>
                            <td><button>X</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Adminpage;
