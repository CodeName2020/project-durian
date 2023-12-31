"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import LoginModal from './LoginModal'
import { UserAuth } from '@/app/context/AuthContext'

import Image from 'next/image'
import profilePic from '@/public/ytt.png'
import UserSetModal from './UserSetModal'

const Navbar = () => {
    const [state, setState] = useState(false)
    const { user, logOut } = UserAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
    const togglePopup = () => {
        setState(!state)
    }
    const closePop = () => {
        setState(false);
    }

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error)
        }
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleSetting = () => {
      setIsPopupOpen(!isPopupOpen);
    };

    console.log(user)
    
    return (
        <nav className="flex justify-between items-center">
            <div className="text-black font-semibold text-lg">
                <Link href="/">
                    <svg width="150" height="30" viewBox="0 0 185 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M125.885 0.487541C119.548 2.23198 114.564 6.8957 112.428 13.0547C111.787 14.9059 111.609 16.2231 111.609 19C111.609 21.7769 111.787 23.0941 112.428 24.9454C114.564 31.1755 119.583 35.8036 126.027 37.5125C130.228 38.6517 136.387 37.7261 140.232 35.4476C142.083 34.3796 146.32 30.4635 146.32 29.8939C146.32 29.7159 144.967 28.719 143.329 27.6154L140.339 25.6218L138.772 27.1526C136.173 29.6447 134.251 30.3923 130.477 30.3923C127.807 30.3923 127.024 30.2499 125.742 29.5735C123.357 28.3274 121.15 26.0846 120.082 23.8417C119.263 22.1685 119.085 21.3853 119.085 19C119.085 16.6147 119.263 15.8315 120.082 14.1583C121.221 11.8086 123.606 9.45897 125.956 8.39094C127.273 7.78572 128.306 7.60772 130.655 7.60772C134.251 7.64332 136.173 8.39094 138.737 10.883L140.374 12.485L143.329 10.4202C144.967 9.31656 146.32 8.28414 146.32 8.10613C146.32 7.53652 142.048 3.62042 140.232 2.55239C136.387 0.273937 130.014 -0.651688 125.885 0.487541Z" fill="black" />
                        <path d="M161.023 0.487564C157.712 1.19958 154.686 2.97963 151.802 5.8277C141.834 15.7247 145.928 32.4216 159.421 37.0497C161.236 37.6549 162.589 37.8685 165.188 37.8685C170.671 37.8685 174.622 36.1953 178.574 32.208C182.383 28.3631 184.057 24.3758 184.057 19C184.057 13.6243 182.383 9.637 178.574 5.7921C173.661 0.879177 167.645 -0.93647 161.023 0.487564ZM170.03 8.64017C172.308 9.7082 174.409 11.7374 175.548 14.0515C176.26 15.5111 176.402 16.33 176.402 19C176.402 21.6701 176.26 22.4889 175.548 23.9486C172.059 30.9975 162.767 32.5996 157.178 27.1526C154.793 24.803 153.974 22.7737 153.974 19C153.974 15.2263 154.686 13.4463 157.107 11.0254C160.596 7.46534 165.509 6.57532 170.03 8.64017Z" fill="black" />
                        <path d="M0 19V37.6905H7.51179C18.1921 37.6905 20.8265 36.8716 25.4902 32.2079C29.2995 28.363 30.9728 24.3757 30.9728 19C30.9728 13.5887 29.4063 9.77937 25.6326 6.00567C20.9689 1.34196 17.6936 0.309528 7.22698 0.309528H0V19ZM17.2664 8.92494C20.9689 10.883 23.1406 14.1939 23.4254 18.3592C23.6746 22.0261 22.8558 24.0909 20.1145 26.8322C17.3732 29.6091 15.6644 30.2143 10.9651 30.2143H7.47619V18.9644V7.71451L11.4991 7.85692C14.9524 7.96372 15.7356 8.10612 17.2664 8.92494Z" fill="black" />
                        <path d="M34.5329 12.9479C34.5329 24.803 34.5685 25.7642 35.2805 27.7934C38.2354 36.5869 47.6696 40.4317 56.1426 36.2664C58.5279 35.0916 61.1268 32.4928 62.3728 30.0719C63.9392 27.0102 64.0816 25.693 64.0816 12.6631V0.309551H60.3435H56.6054V12.4851C56.6054 26.1914 56.5342 26.4406 54.0066 28.6835C51.2297 31.1043 47.3848 31.1043 44.6079 28.6835C42.0803 26.4406 42.0091 26.1914 42.0091 12.4851V0.309551H38.271H34.5329V12.9479Z" fill="black" />
                        <path d="M68.7097 18.9644V37.6905H72.4478H76.1859V22.5601V7.42971L80.0308 7.46531C82.1313 7.46531 84.4097 7.64331 85.0861 7.89252C86.7594 8.46213 87.9342 10.3134 87.9342 12.307C87.9342 15.4755 86.1542 17.1487 82.3449 17.576L80.102 17.8252V21.3853V24.9453L84.4809 31.3179L88.8242 37.6549L93.3811 37.6905H97.938L96.7988 35.9816C96.158 35.056 93.9863 31.9231 91.9215 29.0394C89.8922 26.1202 88.2902 23.6993 88.3614 23.6637C88.397 23.6281 89.2158 23.1653 90.1058 22.6313C94.2712 20.246 96.2292 15.6535 95.3748 10.349C94.6984 6.07687 92.2063 2.73039 88.6462 1.30635C86.8306 0.558735 85.9761 0.487534 77.7167 0.380733L68.7097 0.238327V18.9644Z" fill="black" />
                        <path d="M103.527 1.51995L100.038 2.62358V20.1392V37.6905H103.777H107.515V19C107.515 8.71134 107.408 0.345127 107.265 0.345127C107.087 0.38073 105.414 0.879139 103.527 1.51995Z" fill="black" />
                    </svg>
                </Link>
            </div>
            {!user ? (
                <div>
                    <button onClick={togglePopup} className="bg-yellow-500 text-3xl font-semibold text-white py-2 px-6 w-auto rounded-full block">
                        เข้าสู่ระบบ
                    </button>
                </div>
            ) : (
                <div>
                    <button className="bg-yellow-500 text-2xl font-semibold text-white py-1 pr-1 pl-6 w-auto rounded-full inline-flex justify-center items-center">
                        
                        <div className='pt-1 mr-6'>
                            {/* {user.displayName} */}
                            hello user
                        </div>
                        <div
                            id="user-menu-button"
                            aria-expanded="false"
                        >
                            <Image onClick={toggleDropdown} src={profilePic} alt={'user photo'} className='w-12 h-12 rounded-full' priority={true} />
                        </div>
                    </button>
                    <div
                        id="user-dropdown"
                        className={`z-50 ${isDropdownOpen ? 'block' : 'hidden'} my-4 text-base list-none bg-white divide-y right-12 divide-gray-200 rounded-lg shadow absolute`}
                    >
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900">Bonnie Green</span>
                            <span className="block text-sm text-gray-500 truncate">name@flowbite.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li onClick={handleSetting}>
                                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                            </li>
                            <li onClick={handleSignOut}>
                                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                            </li>
                        </ul>
                    </div>
                    {isPopupOpen && <UserSetModal closePop={handleSetting} addFarm={undefined} />}
                </div>
            )}
            {state && <LoginModal closePop={closePop} />}
        </nav>
    )
}

export default Navbar;
