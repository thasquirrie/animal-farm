/* eslint-disable @next/next/no-img-element */
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState, useEffect } from 'react';

import {
  Dialog,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from '@headlessui/react';
import {
  CurrencyDollarIcon,
  GlobeIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
  XIcon,
} from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt:
            'Model wearing minimalist watch with black wristband and white watch face.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Flats', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Heels', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
              { name: 'Accessories', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Tops', href: '#' },
              { name: 'Bottoms', href: '#' },
              { name: 'Swimwear', href: '#' },
              { name: 'Underwear', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
            ],
          },
        ],
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
          imageAlt:
            'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
        },
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Hoodies', href: '#' },
              { name: 'Swimsuits', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
};
// const product = {
//   name: 'Basic Tee',
//   price: '$35',
//   href: '#',
//   breadcrumbs: [
//     { id: 1, name: 'Women', href: '#' },
//     { id: 2, name: 'Clothing', href: '#' },
//   ],
//   images: [
//     {
//       id: 1,
//       imageSrc:
//         'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
//       imageAlt: "Back of women's Basic Tee in black.",
//       primary: true,
//     },
//     {
//       id: 2,
//       imageSrc:
//         'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
//       imageAlt: "Side profile of women's Basic Tee in black.",
//       primary: false,
//     },
//     {
//       id: 3,
//       imageSrc:
//         'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
//       imageAlt: "Front of women's Basic Tee in black.",
//       primary: false,
//     },
//   ],
//   colors: [
//     { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
//     {
//       name: 'Heather Grey',
//       bgColor: 'bg-gray-400',
//       selectedColor: 'ring-gray-400',
//     },
//   ],
//   sizes: [
//     { name: 'XXS', inStock: true },
//     { name: 'XS', inStock: true },
//     { name: 'S', inStock: true },
//     { name: 'M', inStock: true },
//     { name: 'L', inStock: true },
//     { name: 'XL', inStock: false },
//   ],
//   description: `
//     <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
//     <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
//   `,
//   details: [
//     'Only the best materials',
//     'Ethically and locally made',
//     'Pre-washed and pre-shrunk',
//     'Machine wash cold with similar colors',
//   ],
// };

import products from '../../../data/products.json';
import { useRouter } from 'next/dist/client/router';
// console.log(products);

const policies = [
  {
    name: 'International delivery',
    icon: GlobeIcon,
    description: 'Get your order in 2 years',
  },
  {
    name: 'Loyalty rewards',
    icon: CurrencyDollarIcon,
    description: "Don't look at other tees",
  },
];
const reviews = {
  average: 3.9,
  totalCount: 512,
  featured: [
    {
      id: 1,
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
      `,
      author: 'Risako M',
      date: 'May 16, 2021',
      datetime: '2021-01-06',
    },
    // More reviews...
  ],
};
const relatedProducts = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'Aspen White',
  },
  // More products...
];
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example({ match }) {
  const router = useRouter('');
  console.log(router.query);
  const { id } = router.query;
  console.log(id);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const [prod] = products.filter((product) => product.id === Number(id));
    console.log(prod);
    setProduct(prod);
  }, [id]);
  console.log(product);

  // const [open, setOpen] = useState(false);

  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <>
      {product && (
        <div className='bg-white'>
          {/* Mobile menu */}

          <main className='mt-8 max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <div className='lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8'>
              <div className='lg:col-start-8 lg:col-span-5'>
                <div className='flex justify-between'>
                  <h1 className='text-xl font-medium text-gray-900'>
                    {product.name}
                  </h1>
                  <p className='text-xl font-medium text-gray-900'>
                    {product.price}
                  </p>
                </div>
                {/* Reviews */}
                <div className='mt-4'>
                  <h2 className='sr-only'>Reviews</h2>
                  <div className='flex items-center'>
                    <p className='text-sm text-gray-700'>
                      {reviews.average}
                      <span className='sr-only'> out of 5 stars</span>
                    </p>
                    <div className='ml-1 flex items-center'>
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? 'text-yellow-400'
                              : 'text-gray-200',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden='true'
                        />
                      ))}
                    </div>
                    <div
                      aria-hidden='true'
                      className='ml-4 text-sm text-gray-300'
                    >
                      ·
                    </div>
                    <div className='ml-4 flex'>
                      <a
                        href='#'
                        className='text-sm font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        See all {reviews.totalCount} reviews
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image gallery */}
              <div className='mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3'>
                <h2 className='sr-only'>Images</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8'>
                  {/* {product.images.map((image) => (
                <img
                  key={image.id}
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  className={classNames(
                    image.primary
                      ? 'lg:col-span-2 lg:row-span-2'
                      : 'hidden lg:block',
                    'rounded-lg'
                  )}
                />
              ))} */}
                </div>
              </div>

              <div className='mt-8 lg:col-span-5'>
                <form>
                  {/* Color picker */}
                  <div>
                    <h2 className='text-sm font-medium text-gray-900'>Color</h2>

                    <RadioGroup
                      // value={selectedColor}
                      // onChange={setSelectedColor}
                      className='mt-2'
                    >
                      <RadioGroup.Label className='sr-only'>
                        Choose a color
                      </RadioGroup.Label>
                      <div className='flex items-center space-x-3'>
                        {/* {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedColor,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as='p' className='sr-only'>
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden='true'
                          className={classNames(
                            color.bgColor,
                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                          )}
                        />
                      </RadioGroup.Option>
                    ))} */}
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Size picker */}
                  <div className='mt-8'>
                    <div className='flex items-center justify-between'>
                      <h2 className='text-sm font-medium text-gray-900'>
                        Size
                      </h2>
                      <a
                        href='#'
                        className='text-sm font-medium text-indigo-600 hover:text-indigo-500'
                      >
                        See sizing chart
                      </a>
                    </div>

                    <RadioGroup
                      // value={selectedSize}
                      // onChange={setSelectedSize}
                      className='mt-2'
                    >
                      <RadioGroup.Label className='sr-only'>
                        Choose a size
                      </RadioGroup.Label>
                      <div className='grid grid-cols-3 gap-3 sm:grid-cols-6'>
                        {/* {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        className={({ active, checked }) =>
                          classNames(
                            size.inStock
                              ? 'cursor-pointer focus:outline-none'
                              : 'opacity-25 cursor-not-allowed',
                            active
                              ? 'ring-2 ring-offset-2 ring-indigo-500'
                              : '',
                            checked
                              ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                              : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                            'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
                          )
                        }
                        disabled={!size.inStock}
                      >
                        <RadioGroup.Label as='p'>{size.name}</RadioGroup.Label>
                      </RadioGroup.Option>
                    ))} */}
                      </div>
                    </RadioGroup>
                  </div>

                  <button
                    type='submit'
                    className='mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Add to cart
                  </button>
                </form>

                {/* Product details */}
                <div className='mt-10'>
                  <h2 className='text-sm font-medium text-gray-900'>
                    Description
                  </h2>

                  <div
                    className='mt-4 prose prose-sm text-gray-500'
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>

                <div className='mt-8 border-t border-gray-200 pt-8'>
                  <h2 className='text-sm font-medium text-gray-900'>
                    Fabric &amp; Care
                  </h2>

                  <div className='mt-4 prose prose-sm text-gray-500'>
                    <ul role='list'>
                      {/* {product.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))} */}
                    </ul>
                  </div>
                </div>

                {/* Policies */}
                <section aria-labelledby='policies-heading' className='mt-10'>
                  <h2 id='policies-heading' className='sr-only'>
                    Our Policies
                  </h2>

                  <dl className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
                    {policies.map((policy) => (
                      <div
                        key={policy.name}
                        className='bg-gray-50 border border-gray-200 rounded-lg p-6 text-center'
                      >
                        <dt>
                          <policy.icon
                            className='mx-auto h-6 w-6 flex-shrink-0 text-gray-400'
                            aria-hidden='true'
                          />
                          <span className='mt-4 text-sm font-medium text-gray-900'>
                            {policy.name}
                          </span>
                        </dt>
                        <dd className='mt-1 text-sm text-gray-500'>
                          {policy.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </div>
            </div>

            {/* Reviews */}
            <section
              aria-labelledby='reviews-heading'
              className='mt-16 sm:mt-24'
            >
              <h2
                id='reviews-heading'
                className='text-lg font-medium text-gray-900'
              >
                Recent reviews
              </h2>

              <div className='mt-6 border-t border-b border-gray-200 pb-10 divide-y divide-gray-200 space-y-10'>
                {reviews.featured.map((review) => (
                  <div
                    key={review.id}
                    className='pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8'
                  >
                    <div className='lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start'>
                      <div className='flex items-center xl:col-span-1'>
                        <div className='flex items-center'>
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                review.rating > rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-200',
                                'h-5 w-5 flex-shrink-0'
                              )}
                              aria-hidden='true'
                            />
                          ))}
                        </div>
                        <p className='ml-3 text-sm text-gray-700'>
                          {review.rating}
                          <span className='sr-only'> out of 5 stars</span>
                        </p>
                      </div>

                      <div className='mt-4 lg:mt-6 xl:mt-0 xl:col-span-2'>
                        <h3 className='text-sm font-medium text-gray-900'>
                          {review.title}
                        </h3>

                        <div
                          className='mt-3 space-y-6 text-sm text-gray-500'
                          dangerouslySetInnerHTML={{ __html: review.content }}
                        />
                      </div>
                    </div>

                    <div className='mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3'>
                      <p className='font-medium text-gray-900'>
                        {review.author}
                      </p>
                      <time
                        dateTime={review.datetime}
                        className='ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0'
                      >
                        {review.date}
                      </time>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Related products */}
            <section
              aria-labelledby='related-heading'
              className='mt-16 sm:mt-24'
            >
              <h2
                id='related-heading'
                className='text-lg font-medium text-gray-900'
              >
                Customers also purchased
              </h2>

              <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className='group relative'>
                    <div className='w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
                      <img
                        src={relatedProduct.imageSrc}
                        alt={relatedProduct.imageAlt}
                        className='w-full h-full object-center object-cover lg:w-full lg:h-full'
                      />
                    </div>
                    <div className='mt-4 flex justify-between'>
                      <div>
                        <h3 className='text-sm text-gray-700'>
                          <a href={relatedProduct.href}>
                            <span
                              aria-hidden='true'
                              className='absolute inset-0'
                            />
                            {relatedProduct.name}
                          </a>
                        </h3>
                        <p className='mt-1 text-sm text-gray-500'>
                          {relatedProduct.color}
                        </p>
                      </div>
                      <p className='text-sm font-medium text-gray-900'>
                        {relatedProduct.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          <footer aria-labelledby='footer-heading'>
            <h2 id='footer-heading' className='sr-only'>
              Footer
            </h2>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='border-t border-gray-200 py-20'>
                <div className='grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min'>
                  {/* Image section */}
                  <div className='col-span-1 md:col-span-2 lg:row-start-1 lg:col-start-1'>
                    <img
                      src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
                      alt=''
                      className='h-8 w-auto'
                    />
                  </div>

                  {/* Sitemap sections */}
                  <div className='mt-10 col-span-6 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6'>
                    <div className='grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8'>
                      <div>
                        <h3 className='text-sm font-medium text-gray-900'>
                          Products
                        </h3>
                        <ul role='list' className='mt-6 space-y-6'>
                          {footerNavigation.products.map((item) => (
                            <li key={item.name} className='text-sm'>
                              <a
                                href={item.href}
                                className='text-gray-500 hover:text-gray-600'
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className='text-sm font-medium text-gray-900'>
                          Company
                        </h3>
                        <ul role='list' className='mt-6 space-y-6'>
                          {footerNavigation.company.map((item) => (
                            <li key={item.name} className='text-sm'>
                              <a
                                href={item.href}
                                className='text-gray-500 hover:text-gray-600'
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <h3 className='text-sm font-medium text-gray-900'>
                        Customer Service
                      </h3>
                      <ul role='list' className='mt-6 space-y-6'>
                        {footerNavigation.customerService.map((item) => (
                          <li key={item.name} className='text-sm'>
                            <a
                              href={item.href}
                              className='text-gray-500 hover:text-gray-600'
                            >
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Newsletter section */}
                  <div className='mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4'>
                    <h3 className='text-sm font-medium text-gray-900'>
                      Sign up for our newsletter
                    </h3>
                    <p className='mt-6 text-sm text-gray-500'>
                      The latest deals and savings, sent to your inbox weekly.
                    </p>
                    <form className='mt-2 flex sm:max-w-md'>
                      <label htmlFor='email-address' className='sr-only'>
                        Email address
                      </label>
                      <input
                        id='email-address'
                        type='text'
                        autoComplete='email'
                        required
                        className='appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                      />
                      <div className='ml-4 flex-shrink-0'>
                        <button
                          type='submit'
                          className='w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className='border-t border-gray-100 py-10 text-center'>
                <p className='text-sm text-gray-500'>
                  &copy; 2021 Workflow, Inc. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}
