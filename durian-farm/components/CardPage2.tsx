'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CardPic from '@/public/card.png'
import { db } from '@/app/firebase'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import EditFarmModal from './EditFarmModal'
import { deleteFarm } from '@/app/context/WriteDB';

type FarmDataType = {
    farm_name: string;
    durian_amount: string;
    farm_location: string;
    farm_province: string;
    farm_durian_species: string;
};

const CardPage2 = () => {
    const [farmData, setFarmData] = useState<FarmDataType[]>([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editFarmData, setEditFarmData] = useState<FarmDataType | null>(null);

    const readFarmId = async () => {
        const farmRef = collection(db, 'Farm');
        const farmSnapshot = await getDocs(farmRef);
        return farmSnapshot.docs.map(doc => doc.data() as FarmDataType);
    }

    useEffect(() => {
        const fetchData = async () => {
            const allFarmData = await readFarmId();
            setFarmData(allFarmData);

            const unsubscribe = onSnapshot(collection(db, 'Farm'), (querySnapshot) => {
                const updatedData = querySnapshot.docs.map(doc => doc.data() as FarmDataType);
                setFarmData(updatedData);
            });

            return () => unsubscribe();
        };

        fetchData();
    }, []);

    const handleEditClick = (farm: FarmDataType) => {
        setEditFarmData(farm);
        setIsEditModalOpen(true);
    };

    const handleDelete = (farmId: string) => {
        deleteFarm(farmId);
    };

    return (
        <div className='w-5/6 items-center mb-4'>
            <div className="flex flex-wrap">
                {farmData.map((data, index) => (
                    <div key={index} className="w-1/3 mb-8 px-4">
                        <div className="border border-gray-300 p-4 rounded-md shadow-md">
                            <Image src={CardPic} alt={'Card Pic'} className='w-full h-40 object-cover mb-2' priority={true} />
                            <h2 className="text-xl font-semibold">ฟาร์มทุเรียน {data?.farm_name}</h2>
                            <p className="text-gray-600">
                                ที่อยู่ {data?.farm_location}, จังหวัด {data?.farm_province}, ประเทศไทย
                                สายพันธุ์ทุเรียน {data?.farm_durian_species} จำนวนทุเรียนวันนี้ {data?.durian_amount} ลูก
                            </p>
                            <div className='flex justify-end mt-4 pt-2 -mb-2 border-t'>
                                <button type="button" onClick={() => handleDelete(`id${index + 1}`)} className='inline-flex text-red-600 rounded-xl px-4 py-1 hover:bg-red-100'>
                                    <svg className="mr-1 w-[20px] h-[20px] text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                                    </svg>
                                    delete
                                </button>
                                <button type='button' onClick={() => handleEditClick(data)} className='inline-flex text-green-600 rounded-xl px-4 py-1 hover:bg-green-100'>
                                    <svg className="mr-1 w-[20px] h-[20px] text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                                        <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                                    </svg>
                                    edit
                                </button>
                            </div>
                            {isEditModalOpen && <EditFarmModal closePop={() => setIsEditModalOpen(false)} farmData={editFarmData} />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardPage2
