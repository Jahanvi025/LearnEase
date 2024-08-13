import React, {useState} from 'react';
import {Button, Dialog, DialogPanel, DialogTitle} from '@headlessui/react'

//Redux
import {useDispatch, useSelector} from "react-redux";
//import { signIn } from '../../redux/slice/authSlice'

const SignIn = ( {isOpen, setIsOpen} ) => {

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const [showPassword, setShowPassword] = useState(false)

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);


    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleChange = ( e ) => {
        setUserData(( prev ) => ({...prev, [e.target.id]: e.target.value}))
    }

    /*const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(signIn(userData));
        if(auth.isAuthenticated) {
            setIsOpen(false)
            window.location.reload();
        }

    }*/


    return (
        <>

            <Dialog open={isOpen} as="div" className=" relative z-10 focus:outline-none" onClose={() => setIsOpen(false)}>

                {isOpen && <div className='fixed inset-0 bg-black/50 z-0'></div>}
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="  w-full max-w-md rounded-xl bg-white/60 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className=" flex justify-between text-base/7 font-medium text-white">
                                <div className=' text-xl font-bold text-black '>
                                    Login
                                </div>
                                <div className='text-md font-semibold'>
                                    <a href='/create-account' className='text-blue-500 font-sans'>
                                        Register For Free
                                    </a>
                                </div>
                            </DialogTitle>
                            <form className='flex flex-col gap-2 mt-1 '  >
                                <div className='w-full flex flex-col my-3'>
                                    <label htmlFor='email' className='text-md  '>Email ID </label>
                                    <input type='email' id='email' value={userData.email}
                                           placeholder='Enter your active email ID'
                                           onChange={handleChange}
                                           className=' my-1 w-full border border-gray-400 p-3 rounded-2xl '
                                    />
                                </div>
                                <div className='w-full my-3 relative '>
                                    <label htmlFor='password' className='text-md'> Password </label>
                                    <input type={showPassword ? 'text' : 'password'}
                                           id='password'
                                           value={userData.password}
                                           onChange={handleChange}
                                           placeholder='Enter your password'
                                           className='my-1 w-full border border-gray-400 p-3 rounded-2xl '

                                    />
                                    <button type='button' onClick={togglePassword} className=' hover:cursor-pointer text-sm text-blue-500 absolute right-2 top-[3.2rem] transform -translate-y-2 ' >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>

                            <div className="mt-4 ">
                                <Button
                                    className="flex justify-center items-center w-full text-center rounded-3xl gap-2 bg-blue-500 py-2 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-blue-700 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                    type='submit'
                                >
                                    Login
                                </Button>
                            </div>
                            </form>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default SignIn;