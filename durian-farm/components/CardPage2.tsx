'use client'
import React from 'react'
import Image from 'next/image'
import CardPic from '@/public/card.png'
import ReadToCFirestore from '@/app/context/ReadTry'
import ReadFarmName from '@/app/context/ReadName'

const CardPage2 = () => {

    return (
        <div className='w-1/2 items-center mb-4'>
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 mb-4 px-2">
                    <div className="border border-gray-300 p-4 rounded-md shadow-md">
                        <Image src={CardPic} alt={'Card Pic'} className='w-full h-40 object-cover mb-2' priority={true} />
                        <h2 className="text-xl font-semibold">ฟาร์มทุเรียน{<ReadFarmName farmId={'7ZS26vW3GjYqGROCwXaE'} />}</h2>
                        <p className="text-gray-600">จังหวัดระยอง, ประเทศไทย
                            สายพันธุ์ทุเรียน ทุเรียนหมอนทอง จำนวนทุเรียนวันนี้ {<ReadToCFirestore farmId={'7ZS26vW3GjYqGROCwXaE'} />} ลูก
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 mb-4 px-2">
                    <div className="border border-gray-300 p-4 rounded-md shadow-md">
                        <Image src={CardPic} alt={'Card Pic'} className='w-full h-40 object-cover mb-2' priority={true} />
                        <h2 className="text-xl font-semibold">ฟาร์มทุเรียน{<ReadFarmName farmId={'2TZyg8ml44iNsV4NFut5'} />}</h2>
                        <p className="text-gray-600">จังหวัดชลบุรี, ประเทศไทยสายพันธุ์ทุเรียน ทุเรียนเขียวเสวยจำนวนทุเรียนวันนี้ {<ReadToCFirestore farmId={'2TZyg8ml44iNsV4NFut5'} />} ลูก</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 mb-4 px-2">
                    <div className="border border-gray-300 p-4 rounded-md shadow-md">
                        <Image src={CardPic} alt={'Card Pic'} className='w-full h-40 object-cover mb-2' priority={true} />
                        <h2 className="text-xl font-semibold">ฟาร์มทุเรียน{<ReadFarmName farmId={'DKZINIOnADgd1Z8MboJK'} />}</h2>
                        <p className="text-gray-600">จังหวัดนครราชสีมา, ประเทศไทยสายพันธุ์ทุเรียน ทุเรียนก้านยาวจำนวนทุเรียนวันนี้ {<ReadToCFirestore farmId={'DKZINIOnADgd1Z8MboJK'} />} ลูก</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-1/3 mb-4 px-2">
                    <div className="border border-gray-300 p-4 rounded-md shadow-md">
                        <Image src={CardPic} alt={'Card Pic'} className='w-full h-40 object-cover mb-2' priority={true} />
                        <h2 className="text-xl font-semibold">ฟาร์มทุเรียน{<ReadFarmName farmId={'L5Nzl2VVQoqph92p1qto'} />}</h2>
                        <p className="text-gray-600">จังหวัดสุพรรณบุรี, ประเทศไทยสายพันธุ์ทุเรียน ทุเรียนเขียวใหญ่จำนวนทุเรียนวันนี้ {<ReadToCFirestore farmId={'L5Nzl2VVQoqph92p1qto'} />} ลูก</p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 mb-4 px-2">
                    <div className="border border-gray-300 p-4 rounded-md shadow-md">
                        <Image src={CardPic} alt={'Card Pic'} className='w-full h-40 object-cover mb-2' priority={true} />
                        <h2 className="text-xl font-semibold">ฟาร์มทุเรียน{<ReadFarmName farmId={'TgFDUOrFJjlV88tGgWUX'} />}</h2>
                        <p className="text-gray-600">จังหวัดเพชรบุรี, ประเทศไทยสายพันธุ์ทุเรียน ทุเรียนมอญจำนวนทุเรียนวันนี้ {<ReadToCFirestore farmId={'TgFDUOrFJjlV88tGgWUX'} />} ลูก</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 mb-4 px-2">
                    <div className="border border-gray-300 p-4 rounded-md shadow-md">
                        <Image src={CardPic} alt={'Card Pic'} className='w-full h-40 object-cover mb-2' priority={true} />
                        <h2 className="text-xl font-semibold">ฟาร์มทุเรียน{<ReadFarmName farmId={'s81qBNfOgRc8E7gGfS7q'} />}</h2>
                        <p className="text-gray-600">จังหวัดระนอง, ประเทศไทยสายพันธุ์ทุเรียน ทุเรียนพวงกุญแจจำนวนทุเรียนวันนี้ {<ReadToCFirestore farmId={'s81qBNfOgRc8E7gGfS7q'} />} ลูก</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPage2
