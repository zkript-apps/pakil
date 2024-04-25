import React from 'react'
import Link from "next/link"
import PakilLogo from "@/public/pakil-logo.png"
import Image from "next/image"


const Footer = () => {
  return (

<footer>
<div className="bg-blue flex-wrap">
    <div className='pt-24'>
    <div className="grid grid-cols-2 p-10 md:grid-cols-7 grid-flow-row auto-rows-max">
        <div className="flex-wrap p-2">
            <Link href="/" className="flex items-center left-0 top-0">
                <Image src={PakilLogo} alt="SalesKits logo" width={80} height={80} />
                <div className=''>
                    <div className='text-white pl-2 '>MUNICIPAL GOVERNMENT</div>
                    <div className='text-white pl-2'>OF PAKIL</div>
                </div>
            </Link>
        </div>

    <div></div>
        <div>
            <ul className="text-white text-sm space-y-8">
                <li>
                    <Link href="#" className="hover:underline">Home</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">The Municipality</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Barangays</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Business</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Residents</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Visitors</Link>
                </li>
            </ul>
        </div>
        <div> 
            <ul className="text-white text-sm space-y-8">
                <li>
                    <Link href="#" className="hover:underline">The Mayor's Corner</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Pakil News</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Pakil Videos</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Pakil Events</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Publications</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">National Government</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-white text-sm space-y-8">
                <li>
                    <Link href="#" className="hover:underline">Gawad Kalinga</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">DILG</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Make it Pakil</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Other Links</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Emergency Hotlines</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Newsletter</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-white text-sm space-y-8">
                <li>
                    <Link href="#" className="hover:underline">Survey Poll</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Site Feedback</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Privacy</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Disclaimer</Link>
                </li>
                <li>
                    <Link href="#" className="hover:underline">Site Map</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-white text-sm space-y-8">
                <li>
                    <span>Trunkline: (632) XXXX-XXXX</span>
                </li>
                <li>
                    <span>Fix No.: (632) XXXX-XXXX</span>
                </li>
                <li>
                    <span>Email: loremipsum@gmail.com</span>
                </li>
            </ul>
            <ul className='text-white text-sm py-4'>
                <li>
                    <span>Office Hours</span>
                </li>
                <li>
                    <span>8:00 AM to 5:00 PM</span>
                </li>
                <li>
                    <span>Monday to Friday</span>
                </li>
            </ul>
        </div>
    </div>
    <div className="border-t border-gray-300 text-white mx-10 flex py-1"></div>
    <p className="mx-10 flex justify-between text-sm sm:text-start p-5 text-white space-between ">© 2024 All Right Reserved | Municipal Government of Pakil.</p>
    <div className='pb-7'></div>
    </div>
    </div>
    
    
</footer>
  )
}

export default Footer
