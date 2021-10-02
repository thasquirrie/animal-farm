/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from 'react';
import Link from 'next/link';
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import Header from '../components/Header';

import {
  Dialog,
  Disclosure,
  Popover,
  Tab,
  Transition,
} from '@headlessui/react';
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon, PlusSmIcon } from '@heroicons/react/solid';
// import Header from '../components/Header';
import products from '../data/products.json';

export default function Home() {
  const [modal, setModal] = useState(false);
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
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', href: '#' },
              { name: 'Dresses', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Denim', href: '#' },
              { name: 'Sweaters', href: '#' },
              { name: 'T-Shirts', href: '#' },
              { name: 'Jackets', href: '#' },
              { name: 'Activewear', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
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
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
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
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Sweaters', href: '#' },
              { name: 'T-Shirts', href: '#' },
              { name: 'Jackets', href: '#' },
              { name: 'Activewear', href: '#' },
              { name: 'Browse All', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
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
      },
    ],
    pages: [
      { name: 'Company', href: '#' },
      { name: 'Stores', href: '#' },
    ],
  };
  const breadcrumbs = [{ id: 1, name: 'Men', href: '#' }];
  const filters = [
    // {
    //   id: 'color',
    //   name: 'Color',
    //   options: [
    //     { value: 'white', label: 'White' },
    //     { value: 'beige', label: 'Beige' },
    //     { value: 'blue', label: 'Blue' },
    //     { value: 'brown', label: 'Brown' },
    //     { value: 'green', label: 'Green' },
    //     { value: 'purple', label: 'Purple' },
    //   ],
    // },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'All New Arrivals' },
        { value: 'tees', label: 'Tees' },
        { value: 'crewnecks', label: 'Crewnecks' },
        { value: 'sweatshirts', label: 'Sweatshirts' },
        { value: 'pants-shorts', label: 'Pants & Shorts' },
      ],
    },
    // {
    //   id: 'sizes',
    //   name: 'Sizes',
    //   options: [
    //     { value: 'xs', label: 'XS' },
    //     { value: 's', label: 'S' },
    //     { value: 'm', label: 'M' },
    //     { value: 'l', label: 'L' },
    //     { value: 'xl', label: 'XL' },
    //     { value: '2xl', label: '2XL' },
    //   ],
    // },
  ];
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Basic Tee 8-Pack',
  //     // href: `/products/${this.id}`,
  //     price: '$256',
  //     description:
  //       'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
  //     options: '8 colors',
  //     imageSrc:
  //       'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
  //     imageAlt:
  //       'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Basic Tee',
  //     href: '#',
  //     price: '$32',
  //     description:
  //       'Look like a visionary CEO and wear the same black t-shirt every day.',
  //     options: 'Black',
  //     imageSrc:
  //       'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
  //     imageAlt: 'Front of plain black t-shirt.',
  //   },
  //   // More products...
  // ];

  console.log(products);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  // export default function Example() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className='bg-white'>
      {/* <Header /> */}
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 flex z-40 lg:hidden'
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto'>
                <div className='px-4 flex items-center justify-between'>
                  <h2 className='text-lg font-medium text-gray-900'>Filters</h2>
                  <button
                    type='button'
                    className='-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500'
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </button>
                </div>

                {/* Filters */}
                <form className='mt-4'>
                  {filters.map((section) => (
                    <Disclosure
                      as='div'
                      key={section.name}
                      className='border-t border-gray-200 pt-4 pb-4'
                    >
                      {({ open }) => (
                        <fieldset>
                          <legend className='w-full px-2'>
                            <Disclosure.Button className='w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500'>
                              <span className='text-sm font-medium text-gray-900'>
                                {section.name}
                              </span>
                              <span className='ml-6 h-7 flex items-center'>
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? '-rotate-180' : 'rotate-0',
                                    'h-5 w-5 transform'
                                  )}
                                  aria-hidden='true'
                                />
                              </span>
                            </Disclosure.Button>
                          </legend>
                          <Disclosure.Panel className='pt-4 pb-2 px-4'>
                            <div className='space-y-6'>
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className='flex items-center'
                                >
                                  <input
                                    id={`${section.id}-${optionIdx}-mobile`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type='checkbox'
                                    className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                                  />
                                  <label
                                    htmlFor={`${section.id}-${optionIdx}-mobile`}
                                    className='ml-3 text-sm text-gray-500'
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </fieldset>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        {/* <div className='border-b border-gray-200'>
          <nav
            aria-label='Breadcrumb'
            className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
          >
            <ol role='list' className='flex items-center space-x-4 py-4'>
              {breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className='flex items-center'>
                    <a
                      href={breadcrumb.href}
                      className='mr-4 text-sm font-medium text-gray-900'
                    >
                      {breadcrumb.name}
                    </a>
                    <svg
                      viewBox='0 0 6 20'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      className='h-5 w-auto text-gray-300'
                    >
                      <path
                        d='M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z'
                        fill='currentColor'
                      />
                    </svg>
                  </div>
                </li>
              ))}
              <li className='text-sm'>
                <a
                  href='#'
                  aria-current='page'
                  className='font-medium text-gray-500 hover:text-gray-600'
                >
                  New Arrivals
                </a>
              </li>
            </ol>
          </nav>
        </div> */}

        <main className='max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8'>
          <div className='border-b border-gray-200 pt-24 pb-10'>
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
              New Arrivals
            </h1>
            <p className='mt-4 text-base text-gray-500'>
              Checkout out the latest release of Basic Tees, new and improved
              with four openings!
            </p>
          </div>

          <div className='pt-12 pb-24 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4'>
            <aside>
              <h2 className='sr-only'>Filters</h2>

              <button
                type='button'
                className='inline-flex items-center lg:hidden'
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className='text-sm font-medium text-gray-700'>
                  Filters
                </span>
                <PlusSmIcon
                  className='flex-shrink-0 ml-1 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </button>

              <div className='hidden lg:block'>
                <form className='divide-y divide-gray-200 space-y-10'>
                  {filters.map((section, sectionIdx) => (
                    <div
                      key={section.name}
                      className={sectionIdx === 0 ? null : 'pt-10'}
                    >
                      <fieldset>
                        <legend className='block text-sm font-medium text-gray-900'>
                          {section.name}
                        </legend>
                        <div className='pt-6 space-y-3'>
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className='flex items-center'
                            >
                              <input
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type='checkbox'
                                className='h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500'
                              />
                              <label
                                htmlFor={`${section.id}-${optionIdx}`}
                                className='ml-3 text-sm text-gray-600'
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  ))}
                </form>
              </div>
            </aside>

            <section
              aria-labelledby='product-heading'
              className='mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3'
            >
              <h2 id='product-heading' className='sr-only'>
                Products
              </h2>

              <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3'>
                {products.map((product) => (
                  <div
                    key={product.id}
                    className='group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden'
                  >
                    <div className='aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96'>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className='w-full h-full object-center object-cover sm:w-full sm:h-full'
                      />
                    </div>
                    <div className='flex-1 p-4 space-y-2 flex flex-col'>
                      <h3 className='text-sm font-medium text-gray-900'>
                        <Link href={`/products/${product.id}`}>
                          {/* {console.log(`/products/${product.id}`)} */}
                          <a>
                            <span
                              aria-hidden='true'
                              className='absolute inset-0'
                            />
                            {product.name}
                          </a>
                        </Link>
                      </h3>
                      <p className='text-sm text-gray-500'>
                        {product.description}
                      </p>
                      <div className='flex-1 flex flex-col justify-end'>
                        <p className='text-sm italic text-gray-500'>
                          {product.options}
                        </p>
                        <p className='text-base font-medium text-gray-900'>
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

// }
