'use client'
import React, { useState } from 'react'
import 'flowbite';
import Link from 'next/link';
import Image from 'next/image';
import FarmPic from '@/public/rrr.png'
import Ico1 from '@/public/ico1.png'
import Ico2 from '@/public/ico2.png'
import GridTreePage3 from '@/components/GridTreePage3';

import ReadFarmName from '../context/ReadName';
import ReadToCFirestore from '../context/ReadTry';
import ReadTreeCF from '../context/ReadTree'
import ReadCollected from '../context/ReadDone'
import ReadCollecting from '../context/ReadReady';
import ReadNotReady from '../context/ReadNotReady'

export default function Home() {
  
  return (
    <section className="space-y-12 overflow-hidden">
      {/* text side */}
      <div className=''>
        <div className="flex flex-row justify-center px-8">
          <h1 className="text-9xl font-bold my-8">ฟาร์มทุเรียน</h1>
          <h1 className="text-9xl font-bold my-8 bg-yellow-500 text-white mb-4">{<ReadFarmName farmId={'2TZyg8ml44iNsV4NFut5'} />}</h1>
        </div>
      </div>

      {/* content dashboard */}
      <div className='relative flex items-center justify-center'>
        <Image src={FarmPic} alt={'Farm Page 3'} className='w-4/5' priority={true} />
        {/* Overlay Box left*/}
        <div className='absolute left-0 top-0 h-full w-2/3 flex items-center justify-center'>
          <div className='font-bold'>
            <div className='flex space-x-8'>
              <div className='bg-white flex flex-col w-6/7 px-4 py-8'>
                <div className=''>
                  <Image src={Ico1} alt={'Farm Page 4'} className='w-[30px] h-[34px]' priority={true} />
                </div>
                <div>
                  <h2 className="text-4xl font-medium">{<ReadTreeCF farmId={'2TZyg8ml44iNsV4NFut5'} />} ต้น</h2>
                  <p className="text-gray-600 text-md font-thin">จำนวนต้นทุเรียน</p>
                </div>
              </div>
              <div className='bg-white flex flex-col w-6/7 px-4 py-8'>
                <div className=''>
                  <Image src={Ico2} alt={'Farm Page 5'} className='w-[34px] h-[34px]' priority={true} />
                </div>
                <div>
                  <h2 className="text-4xl font-medium">{<ReadToCFirestore farmId={'2TZyg8ml44iNsV4NFut5'} />} ลูก</h2>
                  <p className="text-gray-600 text-md font-thin">จำนวนผล</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Overlay Box right */}
        <div className='absolute right-0 top-0 h-full w-1/2 flex items-start justify-center'>
          <div className='flex flex-col h-auto w-2/4 text-start p-6 bg-white'>
            <div className='font-bold text-2xl'>สถานะ : พร้อมที่จะทำการเก็บเกี่ยวแล้ว</div>
            <div className='space-y-4'>
              <div>
                <p className="text-lg text-green-500 mt-12">เก็บแล้ว {<ReadCollected farmId={'2TZyg8ml44iNsV4NFut5'} />} ลูก</p>
                <div className="w-full h-6 border-black border-2 p-0.5 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-3/4 rounded-full"></div>
                </div>
              </div>
              <div>
                <p className="text-lg">พร้อมที่จะเก็บ {<ReadCollecting farmId={'2TZyg8ml44iNsV4NFut5'} />} ลูก</p>
                <div className="w-full h-6 border-black border-2 p-0.5 rounded-full overflow-hidden">
                  <div className="bg-black h-full w-1/4 rounded-full"></div>
                </div>
              </div>
              <div>
                <p className="text-lg text-red-800">ยังไม่พร้อมที่จะเก็บ {<ReadNotReady farmId={'2TZyg8ml44iNsV4NFut5'} />} ลูก</p>
                <div className="w-full h-6 border-black border-2 p-0.5 rounded-full overflow-hidden">
                  <div className="bg-red-800 h-full w-1/5 rounded-full"></div>
                </div>
              </div>
              <p className="text-lg">ผสมเกสรเมื่อ 24 มิถุนายน 2565</p>
            </div>
          </div>
        </div>
      </div>
      {/* mid cont */}
      <GridTreePage3 />

      {/* last cont */}
      <div className='flex flex-col items-center'>
        <div className='flex'>
          <div className='grid place-items-end mr-2'>
            <input type="number" className="border-2 border-yellow-500 text-3xl font-normal text-yellow-500 text-md block text-center w-2/5 p-1 drop-shadow-md"
              placeholder="วัน"
              required
            />
          </div>
          <div className='flex items-center text-3xl font-normal justify-start lg:mr-44'>
            จะมีทุเรียนพร้อมที่จะเก็บทั้งหมด {<ReadCollecting farmId={'2TZyg8ml44iNsV4NFut5'} />} ลูก
          </div>
        </div>
        <div className='mt-8'>
          <button className="ml-2 border border-black text-black font-semibold py-2 px-4 rounded-full">
            <Link href="/page4" scroll={false}>
              ดูการทำนายผลผลิต
            </Link>
          </button>
        </div>
      </div>
    </section>
  )
}
