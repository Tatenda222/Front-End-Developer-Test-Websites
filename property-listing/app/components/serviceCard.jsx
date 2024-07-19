import Link from 'next/link';
import React from 'react';
import { FaHouseUser } from 'react-icons/fa';

const ServiceCard = ({title,description,link,linkTitle}) => {
    return (
        <div className='flex flex-col shadow-lg items-center justify-center gap-y-2 p-4 bg-white border rounded-lg'>
            <FaHouseUser size={100} className='text-red-400'/>
            <h1 className='text-lg font-semibold '>{title}</h1>
<p className='w-full text-wrap text-center text-gray-700'>{description}</p>
<Link href={link} className='text-red-400 border rounded-md border-red-400 p-2 w-full text-center my-2'>{linkTitle}</Link>
        </div>
    );
}

export default ServiceCard;
