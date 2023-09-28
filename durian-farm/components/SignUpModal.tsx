'use client'
import React, { useState } from 'react'
import { UserAuth } from '@/app/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignUpModal = (props: { closePop: any; }) => {
    const closePop = props.closePop;
    const navigate = useNavigate()

    const { user, googleSignIn } = UserAuth();

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user)
        try {
            await googleSignIn();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }
    

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
                        <h2 className='text-3xl mb-4 text-center'>สมัครสมาชิก</h2>
                        <form onClick={handleSignIn} className='space-y-6'>
                            <div>
                                <label htmlFor="username" className='block mb-2 text-2xl'>ชื่อผู้ใช้</label>
                                <input type="username" name='username' id='username' className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4' required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-2xl">อีเมล</label>
                                <input type="email" id="email" placeholder='sample@company.com' className="bg-gray-50 border-2 focus:ring-black focus:border-black border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4" required />
                            </div>
                            <div>
                                <label htmlFor="password" className='block mb-2 text-2xl'>รหัสผ่าน</label>
                                <input type="password" name='password' id='password' placeholder='••••••••' className='bg-gray-50 border-2 focus:ring-black focus:border-black border-gray-300 text-gray-900 text-2xl rounded-xl block w-full py-2 px-4' required />
                            </div>
                            <div>
                                <label htmlFor="setpassword" className='block mb-2 text-2xl'>ยืนยันรหัสผ่าน</label>
                                <input type="password" name='setpassword' id='setpassword' placeholder='••••••••' className='bg-gray-50 border-2 focus:ring-black focus:border-black border-gray-300 text-gray-900 text-2xl rounded-xl block w-full py-2 px-4' required />
                            </div>
                            <button type='submit' className='w-full bg-yellow-500 text-2xl text-white py-2 px-4 rounded-xl'>
                                สมัครสมาชิก
                            </button>
                            <button type='submit' className='w-full text-black text-2xl border-2 border-black py-2 px-4 flex items-center justify-center rounded-xl mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="black" width="30" height="30" viewBox="0 0 30 30" className='mx-4'>
                                    <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
                                </svg>
                                เข้าสู่ระบบด้วย Google
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal
