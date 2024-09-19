import { useState } from 'react'

function Home() {
  const [isSignup, setIsSignup] = useState(false)
  
  const toggleForm = () => {
    setIsSignup(!isSignup)
  }
  return (
    <>
    {isSignup ? (
      <form action=""  className='h-[100vh]   bg-gray-800 flex justify-center place-items-center '>
          
      <div className='flex flex-col lg:w-[25%] w-[80%]  bg-gray-700 border  border-gray-300 pt-5 pb-5 pl-1 pr-1 rounded-lg' >
          <h1 className=' text-center m-5 text-4xl text-white'>Signup</h1>
      <label className='ml-2 text-white' htmlFor="">User Name:</label>
      <input className='border m-2 p-1' type="text" id="usename" />
      <label className='ml-2 text-white' htmlFor="">Email:</label>
      <input className='border m-2 p-1' type="email" id="email"  />
      <label  className='ml-2 text-white'htmlFor="">Password:</label>
      <input className='border m-2 p-1' type="password" id="password" />
      <button className='border m-auto w-[92%] bg-green-400 transition-all duration-500 text-black font-semibold hover:bg-green-500 rounded'>Signup</button>
      <p className="text-white text-center">Already have account? <span className="text-blue-500" onClick={toggleForm}>Login</span></p>
      </div>
  </form>
    ) : (
      <form action=""  className='h-[100vh] bg-gray-800 flex justify-center place-items-center'>
        
        <div  className='flex flex-col lg:w-[25%] w-[80%]  bg-gray-700 border  border-gray-300 pt-5 pb-5 pl-1 pr-1 rounded-lg' >
            <h1 className=' text-center m-5 text-4xl text-white'>Login</h1>
        <label className='ml-2 text-white' id="email" htmlFor="">Email:</label>
        <input className='border m-2 p-1' type="email"  />
        <label  className='ml-2 text-white'htmlFor="" >Password:</label>
        <input className='border m-2 p-1' type="password" id="password" />
        <button className='border m-auto w-[92%] bg-green-400 transition-all duration-500 text-black font-semibold hover:bg-green-500 rounded'>Login</button>
        <p className="text-white text-center">New account? <span className="text-blue-500" onClick={toggleForm}>Signup</span></p>
        </div>
    </form>
    )}
    </>
  )
}

export default Home