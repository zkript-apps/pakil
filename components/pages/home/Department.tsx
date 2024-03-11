import React from 'react'

const Department = () => {
  return (<>

    <div className="flex bg-no-repeat bg-auto bg-center max-w-full py-20 bg-[url('/municipal.jpg')]">
  <div className="flex my-auto flex-col gap-12 px-12 lg:flex-row lg:items-center lg:gap-24"> 
    <div className="flex-1 items-center justify-center rounded-md px-11 py-7 opacity-65"></div>
      <div className="flex-1 items-center justify-center rounded-md bg-blue-300 px-11 py-5 opacity-65 lg:flex-row">
        <h1 className="flex-1 py-4 text-4xl font-semibold text-blue-950">DEPARTMENTS & OFFICES</h1>
          <p>The Municipality of Pakil departments and offices are divided into clusters that will work hand in hand to focus on the different programs instituted by the municipality. Listed below are the following clusters.</p>
        <div className="p-4">
          <ul className='space-y-4 list-disc list-inside'>
            <li>Economic Development</li>
            <li>Fiscal Management</li>
            <li>Infrastructure</li>
            <li>Public Administration</li>
            <li>Social Services</li>
          </ul>
        </div>
      <button type="button" className="mb-2 me-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-blue-800 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View More Departments & Offices</button>
    </div>
  </div>
</div>

</>
  )
}

export default Department