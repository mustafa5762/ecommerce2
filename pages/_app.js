import '../styles/globals.css'
import React, { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {

  const [userr, setuserr] = useState(null);

  useEffect(() => {
    try {
      const getuser = localStorage.getItem('user')
      const parseUser = JSON.parse(getuser);
      setuserr(parseUser);
    } catch {}
  }, [])

  const noreload = (data) => {
    setuserr(data);
  }
  

  return <Component userr={userr} noreload={noreload} {...pageProps} />
}

export default MyApp
