import React from 'react'
import PakilLogo from "@/public/pakil-logo.png"
import Link from "next/link"
import Image from "next/image"
import { Menu } from 'lucide-react'

const nav = [
  {
    title: 'HOME',
    href: '#'
  },
  {
    title: 'TRANSPARENCY',
    href: '#'
  },
  {
    title: 'ABOUT US',
    href: '#'
  },
  {
    title: 'SERVICES',
    href: '#'
  },
  {
    title: 'NEWS',
    href: '#'
  },
  {
    title: 'CONTACT',
    href: '#'
  }
]

const Header = () => {
  return (
    <div className="bg-blue-900">
      <div className="flex h-20 justify-between">
        <div className="flex flex-row text-sm text-white items-center">

          <div className="px-2">
            <Image className="p-2" src={PakilLogo} alt="pakilogo" width={80} height={80} />
          </div>
                <div className="text-white font-bold text-lg text-wrap">
                    <span>MUNICIPAL GOVERNMENT OF PAKIL</span>
                </div>
          </div>
     <div className="flex">
        <div className="flex-1 hidden md:ml-6 md:flex md:space-x-6">
            {nav.map((item)=> 
              <Link
                href={item.href}
                key={item.title}
                className="grid items-center border-b-2 border-white px-1 pt-1 text-l font-medium text-white">
                {item.title}
              </Link>
            )}
        </div>
    </div>
        <div className="flex items-center ">
          <div className="flex items-center space-x-1 md:order-2 md:space-x-1 rtl:space-x-reverse">
            <button data-collapse-toggle="menu">
              <Menu className="text-white w-auto h-auto px-6">
              </Menu>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header