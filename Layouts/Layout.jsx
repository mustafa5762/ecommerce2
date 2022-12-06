import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'

function Layout(props) {

    const [openn, setOpenn] = useState(false)

  return (
    <div>
        <Navbar setOpenn={setOpenn}/>
        <Login setOpenn={setOpenn} openn={openn}/>
        {props.children}
    </div>
  )
}

export default Layout