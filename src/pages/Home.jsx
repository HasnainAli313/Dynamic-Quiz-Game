import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

function Home() {
  const [isSignup, setIsSignup] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  //Toggle Form
  const toggleForm = () => {
    setIsSignup(!isSignup)
  }
  // console.log(localStorage.getItem("user"))
  const navigate = useNavigate();

    // Redirect to Quiz page
  const startQuiz = () => {
    navigate("./quiz")
  }

  //saving to local storage
  const saveToLocalStorage = (userData)=>{
    localStorage.setItem('user', JSON.stringify(userData));
  }

  //Signup/Signin validation
  const validateForm= (event) => {
    event.preventDefault()
    if(isSignup){
      if(!username || !password || !email){
        alert("All fields are required")
        return false
      }else{
        const userData = {username,  password,  email};
        saveToLocalStorage(userData)
        startQuiz()
      }
    }
      else{
        if( !email || !password)
        {
          alert("All fields are required")
          return false
        }
        else {
          const userData = {email,password};
          saveToLocalStorage(userData);
          startQuiz()
        }
      }
  }



  return (
    <>
    {isSignup ? (
      <form action="" onSubmit={validateForm}  className='h-[100vh]   bg-gray-800 flex justify-center place-items-center '>
          
      <div className='flex flex-col lg:w-[25%] w-[80%]  bg-gray-700 border  border-gray-300 pt-5 pb-5 pl-1 pr-1 rounded-lg' >
          <h1 className=' text-center m-5 text-4xl text-white'>Signup</h1>
      <label className='ml-2 text-white'  htmlFor="">User Name:</label>
      <input className='border m-2 p-1' type="text" value={username} onChange={e => setUsername(e.target.value)} id="usename" />
      <label className='ml-2 text-white'  htmlFor="">Email:</label>
      <input className='border m-2 p-1' value={email} onChange={e => setEmail(e.target.value)} type="email" id="email"  />
      <label  className='ml-2 text-white'htmlFor="" >Password:</label>
      <input className='border m-2 p-1' type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" />
      <button className='border m-auto w-[92%] bg-green-400 transition-all duration-500 text-black font-semibold hover:bg-green-500 rounded' >Signup</button>
      <p className="text-white text-center">Already have account? <span className="text-blue-500" onClick={toggleForm}>Login</span></p>
      </div>
  </form>
    ) : (
      <form action=""  onSubmit={validateForm} className='h-[100vh] bg-gray-800 flex justify-center place-items-center'>
        
        <div  className='flex flex-col lg:w-[25%] w-[80%]  bg-gray-700 border  border-gray-300 pt-5 pb-5 pl-1 pr-1 rounded-lg' >
            <h1 className=' text-center m-5 text-4xl text-white'>Login</h1>
        <label className='ml-2 text-white' id="email" htmlFor="">Email:</label>
        <input className='border m-2 p-1' type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label  className='ml-2 text-white'htmlFor="" >Password:</label>
        <input className='border m-2 p-1' type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" />
        <button className='border m-auto w-[92%] bg-green-400 transition-all duration-500 text-black font-semibold hover:bg-green-500 rounded' >Login</button>
        <p className="text-white text-center">New account? <span className="text-blue-500" onClick={toggleForm}>Signup</span></p>
        </div>
    </form>
    )}
    </>
  )
}

export default Home