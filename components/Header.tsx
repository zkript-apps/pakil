import React from 'react'
import PakilLogo from "@/public/pakil-logo.png"
import Link from "next/link"
import Image from "next/image"

const nav = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Transparency',
    href: '#'
  },
  {
    title: 'About',
    href: '#'
  },
  {
    title: 'Program and Projects',
    href: '#'
  },
  {
    title: 'News',
    href: '#'
  },
  {
    title: 'Contact',
    href: '#'
  }
]

const Header = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 item-start bg-blue-900 shadow">
      <div className="flex h-16 justify-between">
        <div className="flex">
          <div className="p-2">
            <div className="w-full max-w-screen mx-auto">
              <div className="sm:flex sm:items-center sm:justify-between">
                <Link href="#" className="flex items-center mb-5 sm:mb-0 rtl:space-x-reverse">
                  <Image src={PakilLogo} alt="pakilogo" width={80} height={80} /> 
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                </Link>
              </div>
            </div>
          </div>
      <div className="flex flex-col gap-1 divide-y text-sm text-white py-3">
        <div>
          <span>Republic of the Philippines</span>
            </div>
        <div className="font-semibold text-sm space-x-1">
          <span>Municipal Government of Pakil</span>
            </div>
      </div>
      <div className="flex justify-between"></div>
          <div className="hidden md:ml-6 md:flex md:space-x-8">
            {nav.map((item)=> 
              <Link
                href={item.href}
                key={item.title}
                className="inline-flex items-center border-b-2 border-white px-1 pt-1 text-sm font-medium text-white"
              >
                {item.title}
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-1 md:order-2 md:space-x-1 rtl:space-x-reverse">
            <button className="flex items-center px-3 py-2 border rounded-lg space-x-1 text-sm font-medium bg-blue-700 text-white border-blue-800  md:px-3 md:py-2.5">
              <svg className="fill-current h-5 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg focus:outline-none"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/>
              <button data-collapse-toggle="menu" type="button" className="dark:hover:bg-white">
              </button>
              </svg><p>Menu</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header