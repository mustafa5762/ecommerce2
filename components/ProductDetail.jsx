import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { MinusIcon, PlusIcon, StarIcon } from '@heroicons/react/20/solid'
import { useStatePersist } from 'use-state-persist';
import Breadcrumb from './Breadcrumb';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';


const product = {
  name: 'ITACHI UCHIHA GENJUTSU SWEATSHIRT',
  price: '2,800',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://outlander.com.pk/wp-content/uploads/2021/10/Itachi-Uchiha.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Productdetail() {

  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  const [cart, setcart] = useStatePersist('@cart', [])
  const [count, setcount] = useState(0)

  const addToCart = (pro) => {
    const data = {
      name: product.name,
      price: product.price,
      color: 'Black',
      size: 'XL',
      image: pro.imageSrc,
      quantity: 1
    }
    setcart([...cart, data])
  }

  return (
    <>
        <div className="lg:px-32 mt-8">
        <Breadcrumb/>
        <div className="mt-6"></div>
        <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-20">
                    <div className="aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-6">
                    <InnerImageZoom zoomType="hover" zoomPreload={true} src={product.imageSrc} zoomSrc={product.imageSrc} className="border-1 object-cover object-senter" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-6 px-4">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                      <section aria-labelledby="information-heading" className="mt-2">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">Rs {product.price}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">{product.rating} out of 5 stars</p>
                            <a href="#" className="ml-3 text-sm font-medium text-emerald-500 hover:text-emerald-400">
                              {product.reviewCount} reviews
                            </a>
                          </div>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-10">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <div>
                          {/* Colors */}
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Color</h4>

                            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                              <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                              <span className="flex items-center space-x-3">
                                {product.colors.map((color) => (
                                  <RadioGroup.Option
                                    key={color.name}
                                    value={color}
                                    className={({ active, checked }) =>
                                      classNames(
                                        color.selectedClass,
                                        active && checked ? 'ring ring-offset-1' : '',
                                        !active && checked ? 'ring-2' : '',
                                        '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                      )
                                    }
                                  >
                                    <RadioGroup.Label as="span" className="sr-only">
                                      {' '}
                                      {color.name}{' '}
                                    </RadioGroup.Label>
                                    <span
                                      aria-hidden="true"
                                      className={classNames(
                                        color.class,
                                        'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                      )}
                                    />
                                  </RadioGroup.Option>
                                ))}
                              </span>
                            </RadioGroup>
                          </div>

                          {/* Sizes */}
                          <div className="mt-10">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900">Size</h4>
                              <a href="#" className="text-sm font-medium text-emerald-500 hover:text-emerald-400">
                                Size guide
                              </a>
                            </div>

                            <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                              <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                              <div className="grid grid-cols-4 gap-4">
                                {product.sizes.map((size) => (
                                  <RadioGroup.Option
                                    key={size.name}
                                    value={size}
                                    disabled={!size.inStock}
                                    className={({ active }) =>
                                      classNames(
                                        size.inStock
                                          ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                          : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                        active ? 'ring-2 ring-emerald-500' : '',
                                        'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                      )
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                        {size.inStock ? (
                                          <span
                                            className={classNames(
                                              active ? 'border' : 'border-2',
                                              checked ? 'border-emerald-500' : 'border-transparent',
                                              'pointer-events-none absolute -inset-px rounded-md'
                                            )}
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                          >
                                            <svg
                                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                              viewBox="0 0 100 100"
                                              preserveAspectRatio="none"
                                              stroke="currentColor"
                                            >
                                              <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                            </svg>
                                          </span>
                                        )}
                                      </>
                                    )}
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>
                          <div className="flex space-x-2 lg:space-x-5">
                            <div className="mt-6 border-2 w-3/6 lg:w-2/6 py-3 px-4 lg:px-8 text-base rounded-md text-gray-800 flex items-center justify-between">
                              <div>
                                <MinusIcon onClick={() => setcount(count - 1)} className="h-5 w-5 text-gray-500"/>
                              </div>
                              <span>{count}</span>
                              <div>
                                <PlusIcon onClick={() => setcount(count + 1)} className="h-5 w-5 text-gray-500"/>
                              </div>
                            </div>              
                            <button
                              className="mt-6 flex w-3/6 lg:w-4/6 items-center justify-center rounded-md border border-transparent bg-emerald-500 py-3 px-8 text-base font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                              onClick={() => addToCart(product)}
                              >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                        <div className="mt-8">
                          <h3 className="font-semibold text-lg text-gray-900">Description</h3>
                          <p className="text-gray-600 mt-2 text-base leading-relaxed">The Basic is an honest new take on a classic.The tee uses super soft, pre shrunk cotton for true comfort and dependable fit.They are hand-cut and sewn locally, with a special dying technique that gives each tee its own look</p>
                        </div>
                      </section>
                    </div>
                  </div>
        </div>
    </>
  )
}

export default Productdetail