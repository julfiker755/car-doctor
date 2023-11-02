import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsEyeSlashFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast';
import imgbb from '../../../assets/images/banner/6.jpg'
import useAuthState from '../../Hooks/useAuthState';


const Login = () => {
    const [passwordshow, setpasswordshow] = useState(false)
    const location=useLocation()
    const navigate=useNavigate()
    let from = location.state?.from?.pathname || "/";
    const {user,signinUser,googlelogin}=useAuthState()
    // hanlde form
    const handlefrom = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signinUser(email,password)
        .then(result=>{
            const user=result.user
            user && navigate(from, { replace: true })
        }).catch(error=>{
            toast.error(error.message)
        })
        
        
       
    }
    // google sign in
    const googlesi=(media)=>{
      media()
      .then(async(result)=>{
        const  user=result.user
        user && navigate(from, { replace: true })
        
      }).catch((error)=>{
        toast.error(error.message)
      })
    }
  
    return (
        <div className="flex flex-col md:flex-row h-screen items-center">

            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src={imgbb} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
    flex items-center justify-center">
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 capitalize text-center">Please Login</h1>

                    <form className="mt-6" onSubmit={handlefrom}>
                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input type="email" name="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700">Password</label>
                            <div className='relative'>
                                <input type={passwordshow ? 'text':'password'} name="password" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                focus:bg-white focus:outline-none" required />
                                <h1 onClick={() => setpasswordshow(!passwordshow)} className='absolute right-3 bottom-[13px] cursor-pointer'>{passwordshow ? <AiFillEye size={22} /> : <BsEyeSlashFill size={22} />}</h1>
                            </div>
                        </div>

                        <div className="text-right mt-2">
                            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                        </div>

                        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6">Log In</button>
                    </form>

                    <hr className="my-6 border-gray-300 w-full" />

                    <button onClick={()=>googlesi(googlelogin)} type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div className="flex items-center justify-center">
                            <FcGoogle />
                            <span className="ml-4">
                                Log in
                                with
                                Google</span>
                        </div>
                    </button>

                    <p className="mt-8 text-center"><span className='mr-2'>Don't have an account yet?</span><Link to="/register" className="text-blue-500 hover:text-blue-700 font-semibold">Register</Link></p>


                </div>
            </div>
            {/* React host tost */}
            <Toaster
                position="top-center"
                reverseOrder={true}
            />

        </div>
    );
};

export default Login;