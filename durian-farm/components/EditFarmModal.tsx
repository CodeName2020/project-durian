import React, { useState } from 'react'
import { updateFarm } from '@/app/context/WriteDB';

const EditFarmModal = (props: { closePop: any; farmData: any }) => {
    const closePop = props.closePop;
    const initialData = props.farmData; 

    const [formData, setFormData] = useState(initialData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        const farmDataWithId = { ...formData, id: formData.id }; 
        await updateFarm(formData.id, farmDataWithId);
        closePop();
    };

    const handleDiscard = () => {
        setFormData(initialData); 
        closePop();
    };
    return (
        <div className='fixed flex justify-center items-center w-full p-4 md:inset-0 bg-black bg-opacity-10 z-50'>
            <div className='relative w-full max-w-2xl max-h-full'>
                {/* <!-- Modal content --> */}
                <div className='relative bg-white rounded-xl shadow'>
                    {/* <!-- Modal header --> */}
                    <div className='flex justify-between items-center px-6 py-4 rounded-t border-b'>
                        <h2 className='text-3xl text-center'>
                            เพิ่มฟาร์ม
                        </h2>
                        <button onClick={closePop} className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 ml-auto inline-flex justify-center items-center'>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>

                    {/* <!-- Modal body --> */}
                    <div className='px-6 py-6'>
                        <form className='space-y-6' onSubmit={handleSave}>
                            <div className='grid gap-4 mb-4 grid-cols-4'>
                                <div className='col-span-2'>
                                    <label htmlFor="farmname" className='block mb-2 text-2xl'>ชื่อฟาร์ม</label>
                                    <input
                                        type="farmname"
                                        name='farm_name'
                                        id='farm_name'
                                        value={formData.farm_name}
                                        onChange={handleInputChange}
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    />
                                </div>
                                <div className='col-span-2'>
                                    <label htmlFor="species" className='block mb-2 text-2xl'>พันธุ์ทุเรียน</label>
                                    <input
                                        type="species"
                                        name='farm_durian_species'
                                        id='farm_durian_species'
                                        value={formData.farm_durian_species}
                                        onChange={handleInputChange}
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4' placeholder="ชื่อพันธู์ของทุเรียน"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="farmtree" className='block mb-2 text-2xl'>จำนวนต้น</label>
                                    <input
                                        type="farmtree"
                                        name='farm_tree'
                                        id='farm_tree'
                                        value={formData.farm_tree}
                                        onChange={handleInputChange}
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="durianamount" className='block mb-2 text-2xl'>จำนวนผล</label>
                                    <input
                                        type="durianamount"
                                        name='durian_amount'
                                        id='durian_amount'
                                        value={formData.durian_amount}
                                        onChange={handleInputChange}
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="farmsize" className='block mb-2 text-2xl'>ขนาดไร่</label>
                                    <input
                                        type="farmsize"
                                        name='farm_space'
                                        id='farm_space'
                                        value={formData.farm_space}
                                        onChange={handleInputChange}
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="datepollina" className='block mb-2 text-2xl'>วันที่ผสมเกสร</label>
                                    <input
                                        type="datepollina"
                                        name='farm_pollination_date'
                                        id='farm_pollination_date'
                                        value={formData.farm_pollination_date}
                                        onChange={handleInputChange}
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    />
                                </div>

                                <div className='col-span-2'>
                                    <label htmlFor="location" className='block mb-2 text-2xl'>ที่อยู่</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg className="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name='farm_location'
                                            id="farm_location"
                                            value={formData.farm_location}
                                            onChange={handleInputChange}
                                            className="bg-gray-50 border-2 border-gray-300 text-2xl rounded-xl focus:ring-black focus:border-black block w-full pl-10 p-2.5 py-2 px-4" placeholder="ที่อยู่ฟาร์ม"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='col-span-2'>
                                    <label htmlFor="province" className='block mb-2 text-2xl'>จังหวัด</label>
                                    <input
                                        type="province"
                                        name='farm_province'
                                        id='farm_province'
                                        value={formData.farm_province}
                                        onChange={handleInputChange}
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    />
                                </div>
                                <div className='col-span-2'>
                                    <label htmlFor="latitude" className='block mb-2 text-2xl'>latitude</label>
                                    <input
                                        type="latitude"
                                        name='latitude'
                                        id='latitude'
                                        value={formData.latitude}
                                        onChange={handleInputChange}
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    />
                                </div>
                                <div className='col-span-2'>
                                    <label htmlFor="longitude" className='block mb-2 text-2xl'>longitude</label>
                                    <input
                                        type="longitude"
                                        name='longitude'
                                        id='longitude'
                                        value={formData.longitude}
                                        onChange={handleInputChange}
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="status" className='block mb-2 text-2xl'>สถานะ</label>
                                    {/* <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer" />
                                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-600"></div>
                                    </label> */}
                                    <input
                                        type="status"
                                        name='farm_status'
                                        id='farm_status'
                                        value={formData.farm_status}
                                        onChange={handleInputChange}
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    />
                                </div>
                                <div className='col-span-4'>
                                    {/* <div className="flex items-center justify-center w-full">
                                        <label htmlFor="dropzonefile" className="flex flex-col items-center justify-center w-full h-50 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                            </div>
                                            <input id="dropzonefile" type="file" className="hidden" />
                                        </label>
                                    </div> */}
                                    <label htmlFor="dropzonefile" className='block mb-2 text-2xl'>Picture</label>
                                    <input
                                        type="dropzonefile"
                                        name='farm_photo'
                                        id='farm_photo'
                                        value={formData.farm_photo}
                                        onChange={handleInputChange}
                                        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-2xl rounded-xl  block w-full py-2 px-4'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='flex w-1/2 space-x-4'>
                                <button type='submit' onSubmit={handleSave} className='w-full text-green-600 hover:text-white text-2xl border-2 border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-gray-300 py-2 px-4 rounded-xl mt-2'>
                                    save
                                </button>
                                <button type='button' onClick={handleDiscard} className='w-full text-red-600 hover:text-white text-2xl border-2 border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-gray-300 py-2 px-4 rounded-xl mt-2'>
                                    discard
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditFarmModal
