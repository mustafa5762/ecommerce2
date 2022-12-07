import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Footer from '../components/Footer'
import Cart from '../components/Cart'

function Layout(props) {

    const [openn, setOpenn] = useState(false)

  return (
    <div>
        <Cart/>
        <Navbar setOpenn={setOpenn}/>
        <Login setOpenn={setOpenn} openn={openn}/>
        {props.children}
        <Footer/>
    </div>
  )
}

export default Layout