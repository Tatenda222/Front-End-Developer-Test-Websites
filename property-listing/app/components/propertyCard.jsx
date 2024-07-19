import Link from 'next/link';
import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { CiAt } from "react-icons/ci";

import { FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';

const PropertyCardHorizontal = ({property}) => {
    return (
        <div className='bg-white flex flex-col border shadow-xl rounded-md'>
            {/* Image */}
            <img src={property?.images[0]?.filePath} alt='house' className='h-[250px] object-cover rounded-t-md' />
            {/* Title */}
            <div className='p-2 border-b space-y-1'>
                <label className='text-sm text-red-500'>Property Type</label>
                <h1 className='text-black font-medium'>{property.type}</h1>
                <h2 className='text-black font-medium'>{property.status}</h2>

                <p className='text-[17px]'>{property.title}</p>
                <p className='text-[15px]'>{property.address}</p>

                <p>Beds: {property.bedrooms} Baths: {property.bathrooms} {property.propertySize}</p>
                <div className='flex flex-row border-t justify-between p-2 items-center'>
                <div className='space-x-2  flex flex-row items-center w-full'>
                <Link href='/' className='border border-red-300 text-red-400 p-2 rounded-lg'><FaWhatsapp size={20} /></Link>
                <Link href='/' className='border border-red-300 text-red-400 p-2 rounded-lg'><IoCallOutline size={20} /></Link>
                <Link href='/' className='border border-red-300 text-red-400 p-2 rounded-lg'><CiAt size={20} /></Link>

               
                </div>
                <Link href={`/property?id=`+property.id} className='border text-sm border-red-300 text-red-400 p-2 rounded-lg'>Details</Link>

            </div>
            </div>
           
        </div>
    );
}

export default PropertyCardHorizontal;
