import React from 'react'

const signup = () => {
  return (
<div className="flex bg-no-repeat bg-cover bg-center max-w-full py-20 bg-[url('/hands.jpg')]">
    <div className="flex-1 px-4 py-11 mx-auto max-w-screen-xl text-center text-white">
        <h2 className="flex-1 font-extrabold tracking-tight leading-none text-white text-6xl">DON'T MISS A MOMENT</h2>
            <p className="flex-1 py-4 text-xl font-extralight">Sign up to our Pakil Web Portal</p>
                <div className="space-x-2">
                    <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="flex-1 bg-black-50 inline-flex w-3/12 rounded-lg px-4 py-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="loremipsum@lorem.com" />
                    <button className="flex-1 inline-flex items-center rounded-xl bg-white px-4 py-2 text-blue-500 transition-colors duration-200 hover:bg-blue-600 hover:text-white">SIGN UP</button>
        </div>
    </div>
</div>
  )
}

export default signup