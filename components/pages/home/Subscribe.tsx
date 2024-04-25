import React from 'react'
import { ChevronRight } from 'lucide-react'

const Subscribe = () => {
  return (
    <div className="relative text-start mx-10 -m-16 mt-10">
    <div className='flex-wrap bg-darkblue h-auto mt-11 mx-11 border-2 rounded-sm border-skyblue shadow-lg'>
        <div className='p-14 '>
            <h1 className='flex text-white text-4xl font-semibold'>Subscribe to our newsletter</h1>
            <p className='text-white font-light pt-6 pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <div className="flex h-11 w-full min-w-[200px] p-2">
                    <input placeholder="Enter your email" className="h-full w-full bg-darkblue text-white p-2 border-b-2 border-white"/>
                    <button className="flex text-white justify-between font-extralight first-letter:p-2 border-b-2">
                        Subscribe
                    <ChevronRight className="text-white"/>
                    </button>
                </div>
                <p className='text-white font-thin pt-10 pb-7'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>

            <div className='flex flex-cols space-x-4 justify-end'>
                <span className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-1 border border-blue-500 hover:border-transparent rounded-full text-white [&>svg]:h-5 [&>svg]:w-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 320 512">
                        <path
                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                    </svg>
                </span>

                <span className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white p-1 border border-blue-500 hover:border-transparent rounded-full text-white [&>svg]:h-5 [&>svg]:w-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 512 512">
                        <path
                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                    </svg>
                </span>
            </div>
            <div className='pt-10'></div>
        </div>
    </div>
</div>
  )
}

export default Subscribe