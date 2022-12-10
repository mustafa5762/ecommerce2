import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Cart from '../components/Cart'

function Layout(props) {

    const [openn, setOpenn] = useState(false)
    const [opin, setopin] = useState(false)

  return (
    <div>
        <Cart opin={opin} setopin={setopin}/>
        <Navbar setopin={setopin} setOpenn={setOpenn}/>
        <Login setOpenn={setOpenn} openn={openn}/>
        {props.children}
    </div>
  )
}

export default Layout