import React from 'react'
import Header from './Header';
import Imagesslider from "./Imagesslider"
import Welcome from "./Welcome"
import Product from "./Product"
import Footer from "./Footer"

export default function Home() {
    return (
        <div>
      <Header/>
      <Imagesslider/>
      <Welcome/>
      <Product/>
      <Footer/>
        </div>
    )
}
