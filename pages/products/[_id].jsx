import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import {useRouter} from 'next/router';
import Productdetail from '../../components/ProductDetail';
import axios from 'axios'
import Login from '../../components/Login'
import Layout from '../../Layouts/Layout';

function Productd() {

    const router = useRouter();
    const _id = router.query._id

    const [product, setproduct] = useState(null);

    const fetchpro = async () => {
        const res = await axios.get('https://sore-cyan-twill.cyclic.app//api/products/' + _id)
        setproduct(res.data);
    }

    useEffect(() => {
      fetchpro();
    }, [])
    

  return (
    <Layout>
       {product ? <Productdetail product={product}/> : "Loading"}
    </Layout>
  )
}

export default Productd