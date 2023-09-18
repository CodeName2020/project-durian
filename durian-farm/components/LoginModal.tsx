
import React, { useState } from 'react'
import { UserAuth } from '@/app/context/AuthContext';
import Link from 'next/link';

interface LoginModalProps {
    onClose: () => void; // Define the type of onClose prop as a function that doesn't return anything
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
    const closePop = () => {
        onClose(); // Call the onClose function when the close button is clicked
    }

    const { user, googleSignIn } = UserAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    console.log(user)
    return (
        <div className='fixed flex justify-center items-center w-full p-4 md:inset-0 bg-black bg-opacity-50 z-50'>
            <div className='relative w-full max-w-md max-h-full'>
                <div className='static bg-white rounded-xl shadow'>
                    <button onClick={closePop} className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center'>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                    <div className='px-6 py-6 lg:px-8'>
                        <h2 className='font-bold text-2xl mb-4 text-center'>เข้าสู่ระบบ</h2>
                        <form action="#" className='space-y-6'>
                            <div>
                                <label htmlFor="username" className='block mb-2 text-lg font-bold'>ชื่อผู้ใช้</label>
                                <input type="username" name='username' id='username' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-2.5' required />
                            </div>
                            <div>
                                <label htmlFor="password" className='block mb-2 text-lg font-bold'>รหัสผ่าน</label>
                                <input type="password" name='password' id='password' placeholder='••••••••' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5' required />
                            </div>
                            <div className='flex justify-between'>
                                <div className='flex items-start'>
                                    <div className='flex items-center h-5'>
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" />
                                    </div>
                                    <label htmlFor="remember" className='ml-2 text-sm'>จดจำฉัน</label>
                                </div>
                                <a href="#" className='ml-2 text-sm hover:underline'>ลืมรหัสผ่าน?</a>
                            </div>
                            <button type='submit' className='w-full bg-yellow-500 font-meduim text-lg text-white py-2 px-4 rounded-xl'>
                                <Link href={'/page2'} scroll={false}>
                                    เข้าสู่ระบบ
                                </Link>
                            </button>
                            <button type='submit' onClick={handleSignIn} className='w-full text-black font-bold text-lg border border-black py-2 px-4 flex items-center justify-center rounded-xl mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="30" height="30" viewBox="0 0 30 30" className='mx-4'>
                                    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
                                </svg>
                                <Link href={'/page2'} scroll={false}>
                                    เข้าสู่ระบบด้วย Google
                                </Link>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal
