import React from 'react'
import municipalImage from './municipal.jpg' // Import the image

const Header = () => {
  return (
    <div className="pt-2">
      <section className="bg-cover bg-center bg-no-repeat bg-[url('/municipal.jpg')] bg-gray-300 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl py-24 lg:py-56">
        <h1 className="text-9xl font-semibold tracking-tight leading-none text-white ">WELCOME TO PAKIL</h1>
        <div className="py-5"></div>
          <div className="grid grid-cols-2 flex-wrap">
            <div></div>
              <div className="border-t-2">
                <p className="py-8 text-lg font-normal text-white">Where fun starts with faith. This is the official website of the Municipal Government of Pakil.</p>
                <p className="pb-4 text-md font-normal text-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet augue eget tellus cursus, in ornare quam finibus.</p>
                <div className="flex space-y-4 sm:flex-row sm:space-y-0">
                    <a href="#" className="inline-flex py-3 px-5 text-base font-medium text-center text-blue rounded-full bg-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        View More
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>  
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

export default Header