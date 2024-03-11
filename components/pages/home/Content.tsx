"use client"
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import combineClasses from '@/helpers/combineClasses'
import PakilLogo from "@/public/pakil-logo.png"
import Image from "next/image"
import Link from "next/link"


export default function Content() {
  return (
    <Disclosure as="nav" className="bg-blue-900 shadow">
      {({ open }) => (
        <>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="p-2">
            <Image src={PakilLogo} alt="" width={80} height={80} /> 
            </div>

            <div className="flex flex-col gap-1 divide-y text-sm text-white py-3">
              <div>
                <span>Republic of the Philippines</span>
                 </div>
              <div className="mx-auto font-semibold text-sm">
                <span>Municipal Government of Pakil</span>
                 </div>
            </div>

                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  <Link
                    href="#"
                    className="inline-flex items-center border-b-2 border-white px-1 pt-1 text-sm font-medium text-white"
                  >
                    Home
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-white"
                  >
                    Transparency
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-white"
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-white"
                  >
                    Programs and Projects
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-white"
                  >
                    News
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-300 hover:border-gray-300 hover:text-white"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                </div>
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
        </>
      )}
    </Disclosure>
  )
}