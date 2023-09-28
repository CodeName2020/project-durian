'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import profilePic2 from '@/public/srr.png'
import CardPage2 from '@/components/CardPage2'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import AddFarmModal from '@/components/AddFarmModal'
import Navbar from '@/components/Navbar'

function Farm() {
  const [totalNumOfFruit, setTotalNumOfFruit] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fchTotalNumberOfFruit = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'farm-name'));
        let total = 0;

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          total += parseInt(data.numoffruit);
        })
        setTotalNumOfFruit(total);
      } catch (error) {
        console.log(error)
        alert(error)
      }
    }
    fchTotalNumberOfFruit()
  })

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className='container flex mx-auto flex-col justify-center items-center'>
        {/* Content Section 1 */}
        <div className="flex justify-center items-center mx-auto">
          <div className="w-2/3 mb-8 aspect-square">
            <Image src={profilePic2} alt={'Durian Farm 2'} className='object-cover w-full h-full' priority={true} />
          </div>
          <div className="w-2/3">
            <div className='flex flex-col items-center'>
              <h1 className="text-9xl font-bold mb-4">ผลผลิตจาก</h1>
              <h1 className="text-9xl font-bold bg-yellow-500 text-white py-4 mb-4">ฟาร์มทุเรียน</h1>
            </div>
            <div className="text-3xl flex justify-end items-end font-semibold lg:mr-36">
              24 มิ.ย. 2566
            </div>
          </div>
        </div>

        {/* Content Section 2 */}
        <div className="flex mb-[150px] space-x-12">
          <div className=''>
            <button className="bg-yellow-500 w-80 text-white text-3xl flex items-center justify-center py-4 px-6 border-2 border-yellow-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 50 50"
              >
                <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
              </svg>
              ค้นหาฟาร์ม
            </button>
          </div>
          <div className='w-max'>
            <button className="text-3xl w-80 ml-2 border-2 border-black text-black flex items-center justify-center py-4 px-6 rounded-full">
              การทำนาย
            </button>
          </div>

        </div>

        {/* progress content */}
        <div className="w-1/2 flex flex-col items-center mb-4">
          <h1 className="text-8xl mb-4 w-max">เก็บแล้วรวม {totalNumOfFruit} ลูก</h1>
          <div className="w-full h-12 border-black border-2 px-1.5 p-1 rounded-full overflow-hidden">
            <div className="bg-yellow-500 h-full w-3/4 rounded-full"></div>
          </div>
          <div className='mt-1 lg:ml-[380px]'>
            <div className='border-l-[50px] border-l-transparent border-b-[30px] border-b-yellow-500 border-r-[50px] border-r-transparent'></div>
            <div className='bg-yellow-500'>
              <p className="text-4xl text-white font-bold text-center p-2">90%</p>
            </div>
          </div>
        </div>

        {/* Content Section 3 */}
        <div className="flex flex-col items-center justify-center">
          <div className='inline-flex items-center justify-center mb-12'>
            <div className='w-2/3'>
              <input type="text" placeholder="ค้นหา"
                className="border-2 border-black rounded-full py-2 px-4 w-full" />
            </div>

            <div className="w-1/3">
              <div className="flex ml-2">
                <select className="border-2 border-black rounded-full py-2 px-4 w-full appearance-none">
                  <option defaultValue='msg' disabled selected>
                    จัดเรียงตาม
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                </div>
              </div>
            </div>

          </div>

          {/* card content */}
          <CardPage2 />

          <button onClick={togglePopup} className="bg-yellow-500 text-white text-3xl w-60 flex items-center justify-center py-4 px-6 mt-4 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="mr-4 -ml-4"
              viewBox="0 0 24 24"
            >
              <path d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
            </svg>
            เพิ่มฟาร์ม
          </button>
        </div>
        {isPopupOpen && <AddFarmModal closePop={togglePopup} addFarm={undefined} />}
      </div>

    </section>
  )
}

export default Farm
