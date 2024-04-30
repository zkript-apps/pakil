import React from 'react'
import { ChevronRight } from 'lucide-react'

const UpdateSection = () => {
  return (
  <div className="flex-1 h-auto w-full items-center text-center ">
    <h1 className="text-6xl pt-16 font-semibold text-blue-800 text-wrap md:text-balance underline">Stay Updated with the</h1>
    <h1 className="text-6xl font-semibold text-blue-800 text-wrap md:text-balance underline">Latest News about Pakil</h1>
      <h1 className="text-xl  py-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia sapiente temporibus ut magni nobis? </h1>
        <div className="flex flex-wrap justify-center gap-28">
        
              <div className="bg-white">
                  <div className="size-96 object-contain bg-center bg-no-repeat bg-cover bg-[url('/pic1.jpg')]"></div>
                    <p className="text-gray-500 text-left text-xl text-wrap pt-10">21 February 2024</p>
                    <p className="text-black text-left text-3xl font-bold pt-4">Elize Joins VP Sara </p>
                    <p className="text-black text-left text-3xl font-bold">in Malaysia</p>
              </div>
              <div className="bg-white">
                  <div className="size-96 object-contain bg-center bg-no-repeat bg-cover bg-[url('/pic2.jpg')]"></div>
                    <p className="text-gray-500 text-left text-xl text-wrap pt-10">21 February 2024</p>
                    <p className="text-black text-left text-3xl font-bold pt-4">Malaysian</p>
                    <p className="text-black text-left text-3xl font-bold">Education Ministera</p>
                    <p className="text-black text-left text-3xl font-bold">Receives VP Duterte</p>
              </div>
              <div className="bg-white">
                  <div className="size-96 object-contain bg-center bg-no-repeat bg-cover bg-[url('/pic3.jpg')]"></div>
                    <p className="text-gray-500 text-left text-xl text-wrap pt-10">20 February 2024</p>
                    <p className="text-black text-left text-3xl font-bold pt-4">More than 11k</p>
                    <p className="text-black text-left text-3xl font-bold">Families In Davao</p>
                    <p className="text-black text-left text-3xl font-bold">Region Get Aid</p>
              </div>
              <div className="bg-white">
                  <div className="size-96 object-contain bg-center bg-no-repeat bg-cover bg-[url('/pic4.jpg')]"></div>
                    <p className="text-gray-500 text-left text-xl text-wrap pt-10">19 February 2024</p>
                    <p className="text-black text-left text-3xl font-bold pt-4">VP Sara Attends</p>
                    <p className="text-black text-left text-3xl font-bold">125th Founding</p>
                    <p className="text-black text-left text-3xl font-bold">Anniversary Of DoTr</p>
              </div>
        </div>
        <div className="flex justify-center py-16">
            <button className="flex text-white justify-between bg-blue mt-3 bg-blue-700 hover:bg-blue-800 font-semibold py-2 px-7 rounded-full">
                                View More News
                <ChevronRight className="text-white"/>
            </button>
        </div>
  </div>
  )
}

export default UpdateSection