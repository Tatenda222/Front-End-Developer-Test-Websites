import Link from 'next/link';
import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { CiAt } from "react-icons/ci";

import { FaWhatsapp } from "react-icons/fa";

const PropertyCard = () => {
    return (
        <div className='bg-white border flex flex-row shadow-xl rounded-md'>
            {/* Image */}
            <img src='/house.jpg' alt='house' className='h-full object-cover w-1/2 object-cover rounded-t-md' />
            {/* Title */}
            <div className='p-2 border-b space-y-1 w-full'>
                <label className='text-sm text-gray-700'>Property Type</label>
                <h1 className='text-black font-medium'>House for sale</h1>
                <p className='text-[15px]'>4 bedroom house in Cape Town</p>
                <p>Beds: 1 Baths: 2 2000 SQM</p>
                <p className='text-[15px] text-gray-500'>4 bedroom house in Cape Town sds saf af sf sfsfsfsf sf sf sfsf sfsfs sa s a s</p>

 <div className='flex flex-row justify-between py-2 border-t items-center'>
                <div className='space-x-2  flex flex-row items-center w-full'>
                <Link href='/' className='border border-red-300 text-red-400 p-2 rounded-lg'><FaWhatsapp size={20} /></Link>
                <Link href='/' className='border border-red-300 text-red-400 p-2 rounded-lg'><IoCallOutline size={20} /></Link>
                <Link href='/' className='border border-red-300 text-red-400 p-2 rounded-lg'><CiAt size={20} /></Link>

               
                </div>
                <Link href={`/property?id=`} className='border text-sm border-red-300 text-red-400 p-2 rounded-lg'>Details</Link>

            </div>
            </div>
           
        </div>
    );
}

export default PropertyCard;
