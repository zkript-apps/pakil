import React from 'react'


const Services = () => {
  return (
    <div className=" bg-blue-400">
  <div className="p-16">
    <div className="flex flex-row">
      <div className="flex hover:inline-flex flex-col md:flex-row md:space-x-2">
        <div className="grid gap-5 grid-cols-3 grid-rows-3">

            <div className='mb-2 box-border border-2 border-black items-center text-center justify-center rounded-md bg-white p-4 py-4 text-xl shadow-md hover:scale-110 transition-transform duration-300 ease-in-out'>
              <div className="flex items-center justify-center ">
                 <img className="h-10 w-10 p-1" src="/stamp.png" ></img>
              </div>
             <a className="flex-1 item-center justify-center" href="#">Online Business Permit and Licensing System</a>
            </div>

            <div className='mb-2 box-border border-2 border-black items-center text-center justify-center rounded-md bg-white p-4 py-4 text-xl shadow-md hover:scale-110 transition-transform duration-300 ease-in-out'>
              <div className="flex items-center justify-center">
                 <img className="h-10 w-10 p-1" src="/building.png" ></img>
              </div>
             <a className="flex-1 item-center justify-center" href="#">Online Building Permit System</a>
            </div>

            <div className='mb-2 box-border border-2 border-black items-center text-center justify-center rounded-md bg-white p-4 py-4 text-xl shadow-md hover:scale-110 transition-transform duration-300 ease-in-out'>
              <div className="flex items-center justify-center">
                 <img className="h-10 w-10 p-1" src="/id-card.png" ></img>
              </div>
             <a className="flex-1 item-center justify-center" href="#">Online Cedula Application</a>
            </div>

            <div className='mb-2 box-border border-2 border-black items-center text-center justify-center rounded-md bg-white p-4 py-4 text-xl shadow-md hover:scale-110 transition-transform duration-300 ease-in-out'>
              <div className="flex items-center justify-center">
                 <img className="h-10 w-10 p-1" src="/saving.png" ></img>
              </div>
             <a className="flex-1 item-center justify-center" href="#">Social Services</a>
            </div>

            <div className='mb-2 box-border border-2 border-black items-center text-center justify-center rounded-md bg-white p-4 py-4 text-xl shadow-md hover:scale-110 transition-transform duration-300 ease-in-out'>
              <div className="flex items-center justify-center">
                 <img className="h-10 w-10 p-1" src="/financing.png" ></img>
              </div>
             <a className="flex-1 item-center justify-center" href="#">Online Payment</a>
            </div>

            <div className='mb-2 box-border border-2 border-black items-center text-center justify-center rounded-md bg-white p-4 py-4 text-xl shadow-md hover:scale-110 transition-transform duration-300 ease-in-out'>
              <div className="flex items-center justify-center">
                 <img className="h-10 w-10 p-1" src="/documents-folder.png" ></img>
              </div>
             <a className="flex-1 item-center justify-center" href="#">Civil Status Registry</a>
            </div>

            <div className='mb-2 box-border border-2 border-black items-center text-center justify-center rounded-md bg-white p-4 py-4 text-xl shadow-md hover:scale-110 transition-transform duration-300 ease-in-out'>
              <div className="flex items-center justify-center">
                 <img className="h-10 w-10 p-1" src="/job-search.png" ></img>
              </div>
             <a className="flex-1 item-center justify-center" href="#">Career Opportunities</a>
            </div>

            <div className='mb-2 box-border border-2 border-black items-center text-center justify-center rounded-md bg-white p-4 py-4 text-xl shadow-md hover:scale-110 transition-transform duration-300 ease-in-out'>
              <div className="flex items-center justify-center">
                 <img className="h-10 w-10 p-1" src="/auction.png" ></img>
              </div>
             <a className="flex-1 item-center justify-center" href="#">Sangguniang Pang Munisipalidad</a>
            </div>


        </div>
        <div className="w-auto pt-11 md:w-1/3 lg:w-2/3">
          <div className="p-auto m-6">
              <h2 className="flex-1 order-1 mb-10 text-3xl font-bold text-white">SERVICES</h2>
                <p className="mb-5 text-wrap text-white">The Municipality of Pakil offers various services that will cater to the needs of the people. From business matters to career opportunities, the Municipality Government of Pakil encourages its citizens to reach out to the different departments to inquire of the services that are available in the municipality.</p>
                  <a className="inline-flex rounded-xl bg-white px-4 py-2 text-blue-500 transition-colors duration-200 hover:bg-blue-600 hover:text-white" href="#"> View More Services </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Services