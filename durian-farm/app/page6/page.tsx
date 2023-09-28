'use client'
import React, { useState } from 'react'
import { AddDisease, AddPrediction, AddTree, AddTreePhoto, AddUser, AddUserFarm } from '../context/WriteDB'
import Link from 'next/link'

import SignUpModal from '@/components/SignUpModal';

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className='space-y-8'>
      <div>
        <AddTree />
      </div>
      <div>
        <AddUser />
      </div>
      <div>
        <AddPrediction />
      </div>
      <div>
        <AddTreePhoto />
      </div>
      <div>
        <AddDisease />
      </div>
      <div>
        <AddUserFarm />
      </div>
      <div>
        <button onClick={togglePopup} className="bg-yellow-500 w-1/3 text-white text-3xl flex items-center justify-center py-4 px-4 rounded-full">
          <Link href="#" scroll={false}>
            เริ่มใช้งาน
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="ml-2"
          >
            <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
          </svg>
        </button>
      </div>
      {isPopupOpen && <SignUpModal closePop={togglePopup} />}

    </div>
  )
}


