import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsEyeSlashFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast';
import imgbb from '../../../assets/images/banner/6.jpg'
import useAuthState from '../../Hooks/useAuthState';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [passwordshow, setpasswordshow] = useState(false)
    const [conpasswordshow,consetpasswordshow]=useState(false)
    const [error,seterror]=useState('')
    const [error1,seterror1]=useState('')
    const navigate=useNavigate()
    const {createUser}=useAuthState()
    // hanlde form
    const handlefrom = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const image=e.target.image.value
        const password = e.target.password.value
        const conpass = e.target.conpass.value
        if (password.length < 6) {
            return seterror("Password must be 6 characters");
         } else if (password !== conpass) {
             return seterror1('password does not match')
         } else if (!/[A-Z]/.test(password)) {
             return seterror("Password must be one uppercase");
         } else if (!/[@#$%^&+=!]/.test(password)) {
             return seterror("Password must be special symbol");
         }

      createUser(email, password)
      .then(async(result) => {
          const user = result.user
          updateProfile(user, {
              displayName: name, photoURL: image,
            }).then(() => { 
              user && navigate('/')
             }).catch((error) => { });
              // navigate('/')
      }).catch(error => {
         toast.error(error.message)
      })
    //   empty error
    seterror("")
    seterror1("")
    }
    return (
        <div className="flex flex-col md:flex-row h-screen items-center">

            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src={imgbb} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
    flex items-center justify-center">

                <div className="w-full h-100">


                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-3 capitalize text-center">Please Register</h1>

                    <form className="mt-2" onSubmit={handlefrom}>
                    <div>
                            <label className="block text-gray-700">Name</label>
                            <input type="text" name="name" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input type="email" name="email" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                        </div>
                        <div>
                            <label className="block text-gray-700">Image</label>
                            <input type="text" name="image" placeholder="Enter Your Image" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                        </div>

                        <div className="mt-3">
                            <label className="block text-gray-700">Password</label>
                            <div className='relative'>
                                <input type={passwordshow ? 'text':'password'} name="password" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                focus:bg-white focus:outline-none" required />
                                {error &&  <h1 className='text-xs text-[red]'>{error}</h1>}
                                <h1 onClick={() => setpasswordshow(!passwordshow)} className='absolute right-3 bottom-[13px] cursor-pointer'>{passwordshow ? <AiFillEye size={22} /> : <BsEyeSlashFill size={22} />}</h1>
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className="block text-gray-700">Confirm Password</label>
                            <div className='relative'>
                                <input name="conpass" type={conpasswordshow ? 'text':'password'} placeholder="Enter Confirm Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                focus:bg-white focus:outline-none" required />
                                {error1 &&  <h1 className='text-xs text-[red]'>{error1}</h1>}
                                <h1 onClick={() => consetpasswordshow(!conpasswordshow)} className='absolute right-3 bottom-[13px] cursor-pointer'>{conpasswordshow ? <AiFillEye size={22} /> : <BsEyeSlashFill size={22} />}</h1>
                            </div>
                        </div>

                        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6">Register</button>
                    </form>

                    <p className="mt-3 text-center"><span className='mr-2'>Already have an account?</span><Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold">Login</Link></p>


                </div>
            </div>
            {/* react hot tost */}
            <Toaster
                position="top-center"
                reverseOrder={true}
            />

        </div>
    );
};



export default Register;