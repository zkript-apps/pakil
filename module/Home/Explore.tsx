import React from 'react';
import { ChevronRight } from 'lucide-react'

const Explore = () => {
  return (
    <div className="flex-1 h-auto w-full items-center text-center ">
      <h1 className="text-6xl pt-16 font-semibold text-blue-800 text-wrap md:text-balance">Explore Pakil, Laguna</h1>
      <h1 className="text-6xl font-semibold text-blue-800 text-wrap md:text-balance">without missing anything!</h1>
        <h1 className="text-xl mb-8 py-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia sapiente temporibus ut magni nobis? </h1>
          <div className="flex flex-wrap justify-center gap-8">
          
                <div className="bg-white p-2">
                    <div className="size-80 object-contain bg-center bg-no-repeat bg-cover py-60 bg-[url('/turumba.png')]">
                      <p className="text-white text-left text-3xl px-4 font-bold">Turumba Festival</p>
                      <p className="text-white text-left text-xl text-wrap pt-10 px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                      <div className="flex text-left px-4">
                        <button className="flex text-blue-800 justify-between bg-white mt-3 hover:bg-gray-100 font-semibold py-2 px-10 rounded-full">
                            Explore
                          <ChevronRight className="text-blue-800"/>
                        </button>
                      </div>
                    </div>
                </div>
                <div className="bg-white p-2 ">
                    <div className="size-80 object-contain bg-center bg-no-repeat bg-cover py-60 bg-[url('/inside.png')]">
                      <p className="text-white text-left text-3xl px-4 font-bold">St. Peter of Alcantara Parish</p>
                      <p className="text-white text-left text-xl text-wrap pt-1 px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                      <div className="flex text-left px-4">
                        <button className="flex text-blue-800 justify-between bg-white mt-3 hover:bg-gray-100 font-semibold py-2 px-10 rounded-full">
                            Explore
                          <ChevronRight className="text-blue-800"/>
                        </button>
                      </div>
                      
                    </div>
                </div>
                <div className="bg-white p-2">
                    <div className="size-80 object-contain bg-center bg-no-repeat bg-cover py-60 bg-[url('/pingas.png')]">
                      <p className="text-white text-left text-3xl px-4  font-bold">Mt. Ping-As</p>
                      <p className="text-white text-left text-xl text-wrap pt-10 px-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                      <div className="flex text-left px-4">
                        <button className="flex text-blue-800 justify-between bg-white mt-3 hover:bg-gray-100 font-semibold py-2 px-10 rounded-full">
                            Explore
                          <ChevronRight className="text-blue-800"/>
                        </button>
                      </div>
                    </div>
                </div>
          </div>
      </div>
  );
}

export default Explore;