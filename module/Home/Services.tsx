import { AppWindowIcon, Banknote, Building, Building2Icon, FileCheck2, Gavel, HandCoinsIcon, Stamp, UserRoundSearch } from 'lucide-react'
import React from 'react'

const options = [
  {
    title: 'Online Business Permit and Licensing System', 
    href: '#',
    icon: <Stamp className='h-10 w-10 p-1'/>
  },
  {
    title: 'Online Building Permit System', 
    href: '#',
    icon: <Building2Icon className='h-10 w-10 p-1'/>
  },
  {
    title: 'Online Cedula Application', 
    href: '#',
    icon: <AppWindowIcon className='h-10 w-10 p-1'/>
  },
  {
    title: 'Social Services', 
    href: '#',
    icon: <HandCoinsIcon className='h-10 w-10 p-1'/>
  },
  {
    title: 'Online Payment', 
    href: '#',
    icon: <Banknote className='h-10 w-10 p-1'/>
  },
  {
    title: 'Civil Status Registry', 
    href: '#',
    icon: <FileCheck2 className='h-10 w-10 p-1'/>
  }, {
    title: 'Career Opportunities', 
    href: '#',
    icon: <UserRoundSearch className='h-10 w-10 p-1'/>
  },
  {
    title: 'Sangguniang Pang Munisipalidad', 
    href: '#',
    icon: <Gavel className='h-10 w-10 p-1'/>
  },

]

const Services = () => {
  return (
    <div className=" bg-blue-400">
  <div className="p-16">
    <div className="flex flex-row">
      <div className="flex hover:inline-flex flex-col md:flex-row md:space-x-2">
        <div className="grid gap-5 grid-cols-3 grid-rows-3">

          {options.map((item) => 

    <div className='mb-2 box-border border-2 border-black items-center text-center justify-center rounded-md bg-white p-4 py-4 text-xl shadow-md hover:scale-110 transition-transform duration-300 ease-in-out'>
      <div className="flex items-center justify-center ">
          {item.icon}
        </div>
      <a className="flex-1 item-center justify-center" href={item.href}> {item.title} </a>
    </div>

          )}

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