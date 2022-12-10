import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router';
import Productdetail from '../../components/ProductDetail';
import axios from 'axios'
import Layout from '../../Layouts/Layout';
import Suggest from '../../components/Suggest';

function Productd({product}) {
  return (
    <Layout>
       {product ? <Productdetail product={product}/> : "Loading"}
       <Suggest/>
    </Layout>
  )
}

export default Productd

export async function getServerSideProps(context) {

  const {params} = context;
  const {_id} = params
  
  const res = await fetch('https://sore-cyan-twill.cyclic.app/api/products/' + _id)
  const product = await res.json()


  return { props: { product } }
}