
import React from 'react'
import Image from 'next/image'
import profilePic2 from '@/public/ytt.png'

const UserSetModal = (props: { closePop: any; addFarm: any }) => {
    const closePop = props.closePop;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        closePop();
    };

    return (
        <div className='fixed flex justify-center items-center w-full p-4 md:inset-0 bg-black bg-opacity-50 z-50'>
            <div className='relative w-full max-w-2xl max-h-full'>
                {/* <!-- Modal content --> */}
                <div className='relative bg-white rounded-xl shadow'>
                    {/* <!-- Modal header --> */}
                    <div className='flex justify-between items-center px-6 py-4 rounded-t border-b'>
                        <h2 className='text-3xl text-center'>General Information</h2>
                        <button onClick={closePop} className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center'>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <div className='px-6 py-6 lg:px-8'>
                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div className='grid gap-4 mb-4 grid-cols-2'>
                                <div className='col-span-2 flex justify-center mb-2'>
                                    <Image src={profilePic2} alt={'user-profile'} className='object-cover w-min h-min' priority={true} />
                                </div>
                                <div>
                                    <label htmlFor="farmname" className='block mb-1 text-2xl'>First Name</label>
                                    {/* <input
                                        type="farmname"
                                        name='farm_name'
                                        id='farm_name'
                                        value={formData.farm_name}
                                        onChange={handleInputChange}
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    /> */}
                                    <div className='flex'>
                                        <span className="inline-flex items-center px-4 text-gray-900 bg-gray-200 border-2 border-r-0 border-gray-300 rounded-l-xl">
                                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="setuser"
                                            id="setuser"
                                            className="rounded-none rounded-r-xl bg-gray-50 border-2 text-gray-900 block flex-1 min-w-0 w-full text-2xl border-gray-300 py-2 px-4"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="farmname" className='block mb-1 text-2xl'>Last Name</label>
                                    <div className='flex'>
                                        <span className="inline-flex items-center px-4 text-gray-900 bg-gray-200 border-2 border-r-0 border-gray-300 rounded-l-xl">
                                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="setuser"
                                            id="setuser"
                                            className="rounded-none rounded-r-xl bg-gray-50 border-2 text-gray-900 block flex-1 min-w-0 w-full text-2xl border-gray-300 py-2 px-4"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="newpass" className='block mb-1 text-2xl'>New Password</label>
                                    <input
                                        type="newpass"
                                        name='newpass'
                                        id='farm_status'
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="compass" className='block mb-1 text-2xl'>Comfirm Password</label>
                                    <input
                                        type="compass"
                                        name='compass'
                                        id='farm_status'
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="status" className='block mb-1 text-2xl'>User Role</label>
                                    {/* <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer" />
                                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-yellow-500"></div>
                                    </label> */}
                                    <input
                                        type="status"
                                        name='farm_status'
                                        id='farm_status'
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    />
                                </div>
                                <div className='col-span-2'>
                                    <label htmlFor="dropzonefile" className='block mb-1 text-2xl'>Upload avatar</label>
                                    <input className="block w-full mb-2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="default_size" type="file"></input>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                                    {/* <input
                                        type="dropzonefile"
                                        name='farm_photo'
                                        id='farm_photo'
                                        value={formData.farm_photo}
                                        onChange={handleInputChange}
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    /> */}
                                </div>
                            </div>

                            <div className='flex space-x-8 items-center justify-center'>
                                <button type='button' className='w-full text-red-600 hover:text-white text-2xl border-2 border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-gray-300 py-2 px-4 rounded-xl mt-2'>
                                    Discard
                                </button>
                                <button type='submit' className='w-full bg-green-500 text-white hover:text-green-500 text-2xl border-2 border-green-500 hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 py-2 px-4 rounded-xl mt-2'>
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserSetModal
