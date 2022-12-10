import React, { useState } from 'react'
import Link from 'next/link'
import {AnimatePresence, motion} from 'framer-motion'

function Product({product}) {

  const [open, setopen] = useState(false)

  return (
    <div>
        <Link href={"/products/" + product._id}>
        <div onMouseEnter={() => setopen(true)} onMouseLeave={() => setopen(false)} key={product._id} className="relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:h-80">
                <img
                  src={product.image}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <div className="absolute bottom-0 w-full flex items-end">
                 <AnimatePresence> {open && <motion.div initial={{height:0}} animate={{height:40}} exit={{height:0,opacity:0}} transition={{type:'spring',stiffness:100}} className="h-12 bg-gray-900 text-white w-full flex justify-center items-center text-sm font-medium cursor-pointer">Add to Cart</motion.div>}</AnimatePresence>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-medium">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-gray-500">{product.price}</p>
                </div>
              </div>
            </div>
        </Link>
    </div>
  )
}

export default Product