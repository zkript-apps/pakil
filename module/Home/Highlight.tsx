import React from 'react'

const Highlight = () => {
  return (
    <div className="h-auto w-full mb-4 flex flex-1 flex-wrap py-36 md:py-20 lg:py-36">
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 ">

        <div className="h-full w-full object-contain bg-center py-60 bg-no-repeat bg-[url('/churchh.jpg')] md:py-40 lg:py-60"> 
          </div>
          
          <div className="p-10">
            <h1 className="text-5xl font-bold text-blue-900 pb-10 top-[117px] md:text-4xl lg:text-5xl">Lorem Ipsum Dolor Sit Amet, Consectetur</h1>
              <p className="text-black text-sm pb-5 md:text-base lg:text-sm">Lorem ipsum Lorem ipsum ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-full 
                text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  View more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

  )
}

export default Highlight