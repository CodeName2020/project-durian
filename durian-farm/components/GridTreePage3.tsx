'use client'
import React, { useEffect } from 'react'
import 'flowbite';

const GridTreePage3 = () => {
    const RandomNumber = () => {
        const numbers = [100, 200, 300];
        const randomIndex = Math.floor(Math.random() * numbers.length);
        return numbers[randomIndex];
    };

    const fillClass = `fill-tree-${RandomNumber()}`;
    const bgClass = `bg-tree-${RandomNumber()}`;

    const svgElements = Array.from({ length: 72 }, (_, index) => (
        <div key={index} data-tooltip-target={`tooltip`} className='transition ease-in-out p-4 rounded-lg hover:-translate-y-1 hover:scale-110 duration-300'>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${fillClass} opacity-50 hover:opacity-100`}>
                <path d="M28.2919 2.24677C23.5961 3.90987 17.7264 9.19261 15.2807 13.8884C14.2046 16.1385 11.4654 19.4646 9.31314 21.3234C7.16091 23.1821 4.42171 26.9974 3.14993 29.6388C-1.15453 38.9325 0.508558 47.6393 8.1392 55.1721C13.7154 60.8462 18.1177 62.5093 27.118 62.5093H33.0855V66.9116C33.0855 71.1182 33.1833 71.3138 36.0204 71.3138H38.9552V61.8245V52.2372L45.9989 45.1936L53.0426 38.0521L50.8903 35.8998L48.7381 33.7476L43.8467 38.5412L38.9552 43.3348V30.9106V18.4863H36.0204H33.0855V27.9757V37.4651L28.1941 32.6715L23.3026 27.8779L21.1504 30.0301L18.9982 32.1824L26.0418 39.3239C32.9877 46.2697 33.0855 46.4654 33.0855 51.5524V56.6395H27.2158C17.6286 56.6395 11.7589 53.4112 8.53051 46.3675C5.00868 38.6391 7.16091 30.0301 13.9111 25.2365C16.3568 23.3778 18.8025 20.3451 20.3678 17.2146C27.118 3.22506 44.9228 3.32289 51.673 17.2146C53.1404 20.2473 55.5861 23.2799 57.5427 24.5517C61.6515 27.2909 65.369 34.2368 65.369 39.0304C65.369 43.0413 62.532 49.5959 59.8906 51.9438C57.1514 54.3895 51.2817 56.6395 47.7598 56.6395C45.1184 56.6395 44.825 56.933 44.825 59.5744C44.825 62.2158 45.1184 62.5093 47.8576 62.5093C56.7601 62.5093 67.619 54.5851 70.0648 46.2697C72.7061 37.1716 69.9669 27.5844 62.7276 21.3234C60.5754 19.4646 57.8362 16.1385 56.7601 13.9862C51.4773 3.61638 38.8574 -1.56854 28.2919 2.24677Z" />
            </svg>
            <div id={`tooltip`} role="tooltip" className={`absolute z-10 w-60 invisible inline-block px-3 py-2 text-md text-white text-center font-medium transition-opacity duration-300 ${bgClass} shadow-sm opacity-0 tooltip`}>
                เก็บแล้ว 100 ลูก พร้อมที่จะเก็บ 50 ลูก พร้อมที่จะเก็บในอีก 5 วัน จำนวน 50 ลูก
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </div>
    ));
    return (
        <div className='grid justify-items-center grow pt-8'>
            <div className='grid grid-cols-12 gap-4'>
                {svgElements.map((element, index) => (
                    <React.Fragment key={index}>{element}</React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default GridTreePage3
