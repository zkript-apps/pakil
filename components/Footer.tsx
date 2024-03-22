import React from 'react'
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-white">
    <div className="text-start mx-20">
      <div className="grid grid-cols-2 gap-3 p-10 lg:py-6 md:grid-cols-5">
        <div>
            <ul className="text-black text-sm">
                <li className="mb-2">
                    <Link href="#" className="hover:underline">Home</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="hover:underline">The Municipality</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="hover:underline">Barangays</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="hover:underline">Business</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="hover:underline">Residents</Link>
                </li>
                <li className="mb-2">
                    <Link href="#" className="hover:underline">Visitors</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-black text-sm">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">The Mayor's Corner</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Pakil News</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Pakil Videos</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Pakil Events</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Publications</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">National Government</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-black text-sm">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Gawad Kalinga</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">DILG</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Make it Pakil</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Other Links</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Emergency Hotlines</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Newsletter</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-black text-sm">
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Survey Poll</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Site Feedback</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Privacy</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Disclaimer</Link>
                </li>
                <li className="mb-4">
                    <Link href="#" className="hover:underline">Site Map</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-black text-sm">
                <li className="mb-4">
                    <span>Trunkline: (632) XXXX-XXXX</span>
                </li>
                <li className="mb-4">
                    <span>Fix No.: (632) XXXX-XXXX</span>
                </li>
                <li className="mb-4">
                    <span>Email: loremipsum@gmail.com</span>
                </li>
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
    </div>
    <div className="relative mx-10 flex py-1">
    <div className="flex-grow border-t border-gray-300"></div>
    <span className="text-black"></span>
    <div className="flex-grow border-t border-gray-300"></div>
  </div>
  <span className="mx-10 flex justify-between text-sm sm:text-start p-5">
    <p className="space-between">Copyright 2024 All Right Reserved | Municipal Government of Pakil.</p>
    <p className="font-bold text-blue-700">7,777,777 Visitors.</p>
  </span>
</footer>
  )
}

export default Footer
