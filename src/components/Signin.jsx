
function Signin() {
  return (
    <form action=""  className='h-[100vh] bg-gray-800 flex justify-center place-items-center'>
        
        <div  className='flex flex-col lg:w-[25%] w-[80%]  bg-gray-700 border  border-gray-300 pt-5 pb-5 pl-1 pr-1 rounded-lg' >
            <h1 className=' text-center m-5 text-4xl text-white'>Login</h1>
        <label className='ml-2 text-white' id="email" htmlFor="">Email:</label>
        <input className='border m-2 p-1' type="email"  />
        <label  className='ml-2 text-white'htmlFor="" >Password:</label>
        <input className='border m-2 p-1' type="password" id="password" />
        <button className='border m-auto w-[92%] bg-green-400 transition-all duration-500 text-black font-semibold hover:bg-green-500 rounded'>Login</button>
        </div>
    </form>
  )
}

export default Signin