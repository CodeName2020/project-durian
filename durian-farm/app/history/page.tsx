'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import TryChart from '@/components/TryChart';
import Dropdown from '@/components/Dropdown';

// import ReadFarmName from '../context/ReadDB'
import { db } from '../firebase'
import { collection, doc, getDoc } from 'firebase/firestore'

function HistoryPage() {
    const [collectingValue, setCollectingValue] = useState(0);
    const [selectedFarm, setSelectedFarm] = useState('');

    const handleChoose = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedFarm(event.target.value); // Update selectedFarm state when user changes selection
    }

    useEffect(() => {
        const readData = async () => {
            try {
                if (selectedFarm) { // Make sure there's a selectedFarm before trying to fetch data
                    const farmRef = doc(collection(db, "farm-name"), selectedFarm);
                    const farmDoc = await getDoc(farmRef);

                    if (farmDoc.exists()) {
                        const data = farmDoc.data();
                        setCollectingValue(data.year);
                    } else {
                        console.log("No such document!");
                    }
                }
            } catch (error) {
                console.log(error);
                alert(error);
            }
        };

        readData();
    }, [selectedFarm]);
    return (
        <section className='container flex mx-auto flex-col'>
            {/* head cont */}
            <div className='flex flex-col'>
                <div className='flex flex-row justify-center px-8'>
                    <h1 className='text-9xl font-bold my-8'>ผลผลิตย้อนหลัง</h1>
                </div>
            </div>

            {/* mid cont */}
            <div className='w-5/6 mx-auto'>
                <div className='flex justify-start'>
                    <div className='mb-4'>
                        <select id='large' className='font-bold rounded-lg border-0 text-start focus:ring-white text-3xl'
                            onChange={handleChoose} // Added event handler for select change
                        >
                            <option selected>ฟาร์มทุเรียน</option>
                            {/* <option value='2TZyg8ml44iNsV4NFut5'>ฟาร์มทุเรียน{<ReadFarmName farmId={'2TZyg8ml44iNsV4NFut5'} />}</option>
                            <option value='7ZS26vW3GjYqGROCwXaE'>ฟาร์มทุเรียน{<ReadFarmName farmId={'7ZS26vW3GjYqGROCwXaE'} />}</option>
                            <option value='DKZINIOnADgd1Z8MboJK'>ฟาร์มทุเรียน{<ReadFarmName farmId={'DKZINIOnADgd1Z8MboJK'} />}</option>
                            <option value='L5Nzl2VVQoqph92p1qto'>ฟาร์มทุเรียน{<ReadFarmName farmId={'L5Nzl2VVQoqph92p1qto'} />}</option>
                            <option value='TgFDUOrFJjlV88tGgWUX'>ฟาร์มทุเรียน{<ReadFarmName farmId={'TgFDUOrFJjlV88tGgWUX'} />}</option>
                            <option value='s81qBNfOgRc8E7gGfS7q'>ฟาร์มทุเรียน{<ReadFarmName farmId={'s81qBNfOgRc8E7gGfS7q'} />}</option> */}
                        </select>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex justify-between rounded-2xl w-full bg-yellow-500 m-4 p-6 text-white text-2xl font-semibold'>
                        <div className='w-1/2'>
                            <div className='mb-8'>
                                ผลผลิตในปีนี้
                            </div>
                            <div className='font-medium text-5xl'>
                                {collectingValue?.toLocaleString()} ลูก
                            </div>
                        </div>
                        <div className='w-1/2 space-y-4'>
                            <div className='flex justify-end'>
                                <button className="flex items-center border-2 border-white font-extralight py-2 px-4 rounded-full">
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
                            </div>
                            <div className='flex justify-end'>
                                <button className="flex items-center border-2 border-white font-extralight  bg-white text-yellow-500 py-2 px-4 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="mr-2"
                                        viewBox="0 0 48 48"
                                    >
                                        <path d="M44.8 27.2H43.2V46.4H41.6V18.4H40V46.4H38.4V20.8H36.8V46.4H35.2V27.2H33.6V46.4H32V37.6H30.4V46.4H28.8V36.8H27.2V46.4H25.6V30.4H24V46.4H22.4V28.8H20.8V46.4H19.2V32.8H17.6V46.4H16V41.6H14.4V46.4H12.8V39.2H11.2V46.4H9.6V36H8V46.4H6.4V42.4H4.8V46.4H1.6V0H0V47.2C0 47.6424 0.3576 48 0.8 48H48V46.4H44.8V27.2Z" fill="#B46A07" />
                                        <path d="M38.8241 10.744C38.8073 10.744 38.8001 10.752 38.7921 10.7608L37.9113 12.0968C37.9033 12.1048 37.9033 12.1128 37.9033 12.12C37.9033 12.1368 37.9113 12.144 37.9193 12.152L39.1833 12.9928C39.1921 12.9928 39.2001 13.0008 39.2073 13.0008C39.2145 13.0008 39.2313 12.9928 39.2393 12.9768L40.1273 11.6488C40.1353 11.6328 40.1353 11.6088 40.1185 11.5936L38.8465 10.7528C38.8401 10.744 38.8321 10.744 38.8241 10.744Z" fill="#B46A07" />
                                        <path d="M40.9843 10.3361C40.9931 10.3361 41.0083 10.3281 41.0163 10.3193L41.9043 8.98328C41.9123 8.96728 41.9123 8.94328 41.8875 8.92808L40.6243 8.08728C40.6155 8.07928 40.6075 8.07928 40.6003 8.07928C40.5835 8.07928 40.5763 8.08728 40.5683 8.09608L39.6803 9.43208C39.6803 9.44008 39.6723 9.44808 39.6803 9.46408C39.6803 9.47208 39.6883 9.48008 39.6971 9.48728L40.9611 10.3281C40.9691 10.3361 40.9771 10.3361 40.9843 10.3361Z" fill="#B46A07" />
                                        <path d="M37.0482 13.4079C37.0402 13.4079 37.025 13.4159 37.025 13.4247L36.137 14.7607C36.1202 14.7767 36.129 14.8007 36.145 14.8159L37.409 15.6559C37.417 15.6559 37.4258 15.6647 37.433 15.6647H37.441C37.449 15.6559 37.457 15.6559 37.465 15.6479L38.3522 14.3119C38.369 14.2959 38.361 14.2719 38.3442 14.2559L37.0802 13.4159C37.0642 13.4079 37.0554 13.3999 37.0482 13.4079Z" fill="#B46A07" />
                                        <path d="M5.5393 37.108L8.9641 28.888L12.9353 34.844C13.0785 35.0592 13.3161 35.1912 13.5737 35.1992C13.8577 35.2296 14.0785 35.092 14.2353 34.8872L21.7529 25.1136L27.5209 29.44C27.6985 29.5736 27.9257 29.6272 28.1425 29.588C28.3617 29.548 28.5545 29.4192 28.6737 29.232L36.3545 17.232L35.0065 16.3696L27.7905 27.644L22.0809 23.36C21.7305 23.0968 21.2337 23.1648 20.9665 23.512L13.6473 33.0272L9.4665 26.756C9.3025 26.5096 9.0145 26.3752 8.7233 26.404C8.4297 26.432 8.1753 26.6208 8.0625 26.892L4.0625 36.492L5.5393 37.108Z" fill="#B46A07" />
                                        <path d="M45.403 0H43.3966C41.9646 0 40.7998 1.1648 40.7998 2.5968V4H42.3998V2.5968C42.3998 2.0472 42.847 1.6 43.3966 1.6H45.403C45.9526 1.6 46.3998 2.0472 46.3998 2.5968C46.3998 3.0552 46.0894 3.4528 45.6462 3.564L45.167 3.6832C44.0086 3.9728 43.1998 5.0096 43.1998 6.2032V7.2H44.7998V6.2032C44.7998 5.7448 45.1102 5.3472 45.5534 5.236L46.0326 5.1168C47.191 4.8272 47.9998 3.7904 47.9998 2.5968C47.9998 1.1648 46.835 0 45.403 0Z" fill="#B46A07" />
                                        <path d="M44.8002 8.79999H43.2002V10.4H44.8002V8.79999Z" fill="#B46A07" />
                                        <path d="M8.79863 2.40009H5.59863V4.00009H8.79863V2.40009Z" fill="#B46A07" />
                                        <path d="M21.6014 2.40009H10.4014V4.00009H21.6014V2.40009Z" fill="#B46A07" />
                                        <path d="M21.6014 5.59991H10.4014V7.19991H21.6014V5.59991Z" fill="#B46A07" />
                                        <path d="M8.79863 8.79999H5.59863V10.4H8.79863V8.79999Z" fill="#B46A07" />
                                        <path d="M21.6014 8.79999H10.4014V10.4H21.6014V8.79999Z" fill="#B46A07" />
                                    </svg>
                                    ดูผลผลิตย้อนหลัง
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* last cont: Display Charts */}
            <div className='my-24 m-6'>
                <div className='w-5/6 mx-auto'>
                    <div className="flex justify-between mb-5">
                        <div className="grid gap-4 items-center">
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
                </div>

                <div className="flex items-center justify-center space-x-12 mt-2.5">
                <div className="pt-5">
                        <a href="#" className="w-80 px-6 py-4 text-3xl inline-flex items-center rounded-full text-center border-2 border-yellow-500 text-yellow-500">
                            <svg width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-6'>
                                <path d="M0 1H60" stroke="#B46A07" strokeWidth="2" />
                            </svg>
                            ผลผลิตจริง
                        </a>
                    </div>
                    <div className="pt-5">
                        <a href="#" className="w-80 px-6 py-4 text-3xl inline-flex items-center rounded-full text-center border-2 border-black">
                            <svg width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-4'>
                                <path d="M0 1H60" stroke="black" strokeWidth="2" strokeDasharray="10 10" />
                            </svg>
                            ผลผลิตที่ทำนาย
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HistoryPage

