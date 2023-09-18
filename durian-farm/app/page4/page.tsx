import React from 'react'
import Dropdown from '@/components/Dropdown'
import TryChart from '@/components/TryChart'
import Link from 'next/link'

export default function Home() {
    return (
        <section className="flex h-full w-full flex-col overflow-hidden">
            {/* head cont */}
            <div className='flex justify-center'>
                <div className="flex flex-row justify-center">
                    <h1 className="text-9xl font-bold">ทำนายผลผลิต</h1>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='mb-4'>
                    <select className="font-normal text-gray-900 rounded-lg border-0 px-4 py-3 text-3xl text-center focus:ring-white ">
                        <option selected>ฟาร์มทุเรียนสวรรค์สมบุญ</option>
                        <option value="US">ฟาร์มทุเรียนสวรรค์สมบุญ 1</option>
                        <option value="CA">ฟาร์มทุเรียนสวรรค์สมบุญ 2</option>
                        <option value="FR">ฟาร์มทุเรียนสวรรค์สมบุญ 3</option>
                        <option value="DE">ฟาร์มทุเรียนสวรรค์สมบุญ 4</option>
                    </select>
                </div>
            </div>
            {/* last cont: Display Charts */}
            <div className='my-14 m-6'>
                <div className="flex justify-between mb-5">
                    <div className="gap-4 items-center">
                        <p className="text-2xl leading-none font-semibold">จำนวนทุเรียน (พันลูก)</p>
                    </div>
                    <div>
                        <Dropdown />
                    </div>
                </div>
                <div>
                    <TryChart />
                    <div className='flex flex-between pt-4'>
                        <div className='w-1/2'>
                            <p className=" text-xl font-medium">24 มิ.ย.</p>
                        </div>
                        <div className='w-1/2 text-end'>
                            <p className=" text-xl font-medium">24 ก.ค.</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center space-x-12 mt-2.5">
                    <div className="pt-5">
                        <a href="#" className="px-5 py-2 text-2xl font-normal inline-flex items-center rounded-full text-center border-2 border-yellow-500 text-yellow-500">
                            <svg width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-6'>
                                <path d="M0 1H60" stroke="#B46A07" stroke-width="2" />
                            </svg>

                            ผลผลิตจริง
                        </a>
                    </div>
                    <div className="pt-5">
                        <a href="#" className="px-5 py-2 text-2xl font-normal inline-flex items-center rounded-full text-center border-2 border-black">
                            <svg width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-4'>
                                <path d="M0 1H60" stroke="black" stroke-width="2" stroke-dasharray="10 10" />
                            </svg>
                            ผลผลิตที่ทำนาย
                        </a>
                    </div>
                </div>
            </div>
            {/* table cont */}
            <div className='flex justify-center my-8'>
                <div className='flex justify-end mr-2'>
                    <input type="number" className="flex border-2 border-yellow-500 text-3xl font-normal text-yellow-500 text-md text-center w-2/5 p-1 drop-shadow-md" placeholder="วัน"/>
                </div>

                <div className='flex items-center text-3xl font-normal justify-start lg:mr-44'>
                    จะมีทุเรียนพร้อมที่จะเก็บทั้งหมด 500 ลูก
                </div>
            </div>
            <div className='flex justify-center m-4'>
                <div className="w-2/3 overflow-x-auto rounded-lg border-2 border-black">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-gray-700 uppercase bg-gray-50 text-lg ">
                            <tr className='border-b-2 border-black'>
                                <th scope="col" className="px-6 py-3">
                                    วันที่
                                </th>
                                <th scope="col" className="px-6 py-3 lg:text-end">
                                    ผลผลิต (ลูก)
                                </th>
                                <th scope="col" className="px-6 py-3 lg:text-end">
                                    เปลี่ยนแปลง
                                </th>
                                <th scope="col" className="px-6 py-3 lg:text-end">
                                    % เปลี่ยนแปลง
                                </th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className="border hover:bg-gray-50 ">
                                <th className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap ">
                                    24/06/2566
                                </th>
                                <td className="px-6 py-4 text-end font-semibold">
                                    1500
                                </td>
                                <td className="px-6 py-4 text-green-500 text-end font-semibold">
                                    + 300
                                </td>
                                <td className="px-6 py-4 text-green-500 text-end font-semibold">
                                    30%
                                </td>
                            </tr>
                            <tr className="border hover:bg-gray-50 ">
                                <th scope="row" className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap ">
                                    25/06/2566
                                </th>
                                <td className="px-6 py-4 text-end font-semibold">
                                    1600
                                </td>
                                <td className="px-6 py-4 text-red-600 text-end font-semibold">
                                    - 300
                                </td>
                                <td className="px-6 py-4 text-red-600 text-end font-semibold">
                                    - 30%
                                </td>
                            </tr>
                            <tr className="border hover:bg-gray-50 ">
                                <th scope="row" className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                                    26/06/2566
                                </th>
                                <td className="px-6 py-4 text-end font-semibold">
                                    1700
                                </td>
                                <td className="px-6 py-4 text-green-500 text-end font-semibold">
                                    + 300
                                </td>
                                <td className="px-6 py-4 text-green-500 text-end font-semibold">
                                    30%
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* tail cont */}
            <div className='flex justify-center space-x-8 mt-6'>
                <nav className=''>
                    <ul className="flex items-center -space-x-px h-full text-md font-medium">
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 ml-0  border-2 border-black rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 text-gray-500  border-2 border-black hover:bg-gray-100 hover:text-black ">1</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 text-gray-500  border-2 border-black hover:bg-gray-100 hover:text-black ">2</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 border-2 border-black bg-yellow-50 hover:bg-yellow-100 hover:text-yellow-700">3</a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center justify-center px-4 h-10 border-2 border-black rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
                <button className="flex items-center justify-center border-2 border-black font-medium py-2 px-4 rounded-full h-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="mr-2"
                        viewBox="0 0 50 50"
                    >
                        <path d="M 28.875 0 C 28.855469 0.0078125 28.832031 0.0195313 28.8125 0.03125 L 0.8125 5.34375 C 0.335938 5.433594 -0.0078125 5.855469 0 6.34375 L 0 43.65625 C -0.0078125 44.144531 0.335938 44.566406 0.8125 44.65625 L 28.8125 49.96875 C 29.101563 50.023438 29.402344 49.949219 29.632813 49.761719 C 29.859375 49.574219 29.996094 49.296875 30 49 L 30 44 L 47 44 C 48.09375 44 49 43.09375 49 42 L 49 8 C 49 6.90625 48.09375 6 47 6 L 30 6 L 30 1 C 30.003906 0.710938 29.878906 0.4375 29.664063 0.246094 C 29.449219 0.0546875 29.160156 -0.0351563 28.875 0 Z M 28 2.1875 L 28 6.53125 C 27.867188 6.808594 27.867188 7.128906 28 7.40625 L 28 42.8125 C 27.972656 42.945313 27.972656 43.085938 28 43.21875 L 28 47.8125 L 2 42.84375 L 2 7.15625 Z M 30 8 L 47 8 L 47 42 L 30 42 L 30 37 L 34 37 L 34 35 L 30 35 L 30 29 L 34 29 L 34 27 L 30 27 L 30 22 L 34 22 L 34 20 L 30 20 L 30 15 L 34 15 L 34 13 L 30 13 Z M 36 13 L 36 15 L 44 15 L 44 13 Z M 6.6875 15.6875 L 12.15625 25.03125 L 6.1875 34.375 L 11.1875 34.375 L 14.4375 28.34375 C 14.664063 27.761719 14.8125 27.316406 14.875 27.03125 L 14.90625 27.03125 C 15.035156 27.640625 15.160156 28.054688 15.28125 28.28125 L 18.53125 34.375 L 23.5 34.375 L 17.75 24.9375 L 23.34375 15.6875 L 18.65625 15.6875 L 15.6875 21.21875 C 15.402344 21.941406 15.199219 22.511719 15.09375 22.875 L 15.0625 22.875 C 14.898438 22.265625 14.710938 21.722656 14.5 21.28125 L 11.8125 15.6875 Z M 36 20 L 36 22 L 44 22 L 44 20 Z M 36 27 L 36 29 L 44 29 L 44 27 Z M 36 35 L 36 37 L 44 37 L 44 35 Z"></path>
                    </svg>
                    ส่งออกเป็น Excel
                </button>
                <button className="bg-yellow-500 text-white flex items-center justify-center font-medium py-2 px-4 rounded-full h-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="mr-2"
                        viewBox="0 0 32 32"
                    >
                        <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 15 8 L 15 17 L 22 17 L 22 15 L 17 15 L 17 8 Z"></path>

                    </svg>
                    <Link href="/page5" scroll={false}>
                        ดูผลผลิตย้อนหลัง
                    </Link>

                </button>
            </div>
        </section>
    )
}
