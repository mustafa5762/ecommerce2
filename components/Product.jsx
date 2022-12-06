import React from 'react'
import Link from 'next/link'

function Product({product}) {


  return (
    <div>
        <Link href={"/products/" + product._id}>
        <div key={product._id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg"
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-medium">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
        </Link>
    </div>
  )
}

export default Product