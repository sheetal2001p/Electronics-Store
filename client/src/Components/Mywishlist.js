import React from 'react'
import note from "../images/note.png"
import cart from "../images/6.png"

export default function Mywishlist() {
    return (
        <div className="wishlist">
            <div className="wishlist-heading">
                <img src={note} alt="img"></img>
                <h1>My Wishlist</h1>
                <img src={cart} alt="img"></img>
            </div>

          <div className="items-container">
              <div className="item-name">
             <ol>
                 <li>
                     <p>Product Name</p>
                </li>
             </ol>

              </div>
              <div className="item-btns">
              <button className="order">Order</button>
              <button id="remove">X</button>
              </div>
          </div>
          <div className="items-container">
              <div className="item-name">
             <ol>
                 <li>
                     <p>Product Name</p>
                </li>
             </ol>

              </div>
              <div className="item-btns">
              <button className="order">Order</button>
              <button id="remove">X</button>
              </div>
          </div>
          <div className="items-container">
              <div className="item-name">
             <ol>
                 <li>
                     <p>Product Name</p>
                </li>
             </ol>

              </div>
              <div className="item-btns">
              <button className="order">Order</button>
              <button id="remove">X</button>
              </div>
          </div>
          <div className="items-container">
              <div className="item-name">
             <ol>
                 <li>
                     <p>Product Name</p>
                </li>
             </ol>

              </div>
              <div className="item-btns">
              <button className="order">Order</button>
              <button id="remove">X</button>
              </div>
          </div>
          <div className="items-container">
              <div className="item-name">
             <ol>
                 <li>
                     <p>Product Name</p>
                </li>
             </ol>

              </div>
              <div className="item-btns">
              <button className="order">Order</button>
              <button id="remove">X</button>
              </div>
          </div>
        </div>
    )
}
