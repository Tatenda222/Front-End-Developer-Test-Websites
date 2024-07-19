

"use client";
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Page = () => {
    const params = useSearchParams();
    const listingId = params.get('id');
    const [property, setProperty] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dialingCode, setDialingCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const fetchProperty = async () => {
        try {
            const response = await fetch(`https://fsboafrica.com/api/properties/details/${listingId}`);
            const data = await response.json();
            if (data.status === "success") {
                setProperty(data.data);
            } else {
                console.error('Error: Property data not found');
            }
        } catch (error) {
            console.error('Error fetching property:', error);
        }
    };
    const handleEnquirySubmit = async (e) => {
        e.preventDefault();
        const enquiryData = {
            firstName,
            lastName,
            email,
            dialingCode,
            phoneNumber,
            message,
            listingId: listingId,
            ownedBy: "tatendamhaka22@gmail.com",
        };
        console.log(enquiryData);

        try {
            const response = await fetch('https://fsboafrica.com/api/enquiries/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(enquiryData),
            });
            const data = await response.json();
            console.log(data);
            if (data) {
                alert('Enquiry submitted successfully!');
            } else {
                alert('Error submitting enquiry');
            }
        } catch (error) {
            console.error('Error submitting enquiry:', error);
        }
    };

    useEffect(() => {
        if (listingId) {
            fetchProperty();
        }
    }, [listingId]);

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
   <div className='bg-gray-50'>
    <div className="container max-[1000px] mx-auto flex flex-row gap-x-3 px-4">
           <div className='flex w-full flex-col gap-y-4'>
           <div className="carousel-container mb-4">
                <Carousel>
                    {property.images.map((image, index) => (
                        <div key={index}>
                            <img src={image.filePath} alt={`Property Image ${index + 1}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="flex flex-row">
                <div className="w-2/3 pr-4">
                    <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
                    <h2 className="text-2xl font-bold mb-2">{property.status}</h2>
                
                    <p className="mb-2">{property.description}</p>
                    
                    <p className="mb-2">Price: {property.currency} {property.price}</p>
                    <p className="mb-2">Address: {property.address}</p>
                    <p className="mb-2">Bedrooms: {property.bedrooms}</p>
                    <p className="mb-2">Bathrooms: {property.bathrooms}</p>
                    <p className="mb-2">Size: {property.propertySize}</p>
                </div>
              
            </div>
           </div>
            <div className="w-[400px] pl-4 bg-white border p-2 h-fit rounded-md">
                    <h2 className="text-xl font-bold mb-2">Enquiry Form</h2>
                    <form onSubmit={handleEnquirySubmit}>
                        <div className="mb-2">
                            <label className="block text-sm font-medium mb-1">First Name</label>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium mb-1">Last Name</label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium mb-1">Dialing Code</label>
                            <input
                                type="text"
                                value={dialingCode}
                                onChange={(e) => setDialingCode(e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium mb-1">Phone Number</label>
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-2 py-1 border border-gray-300 rounded"
                                required
                            />
                        </div>
                       
                        <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-full">
  Send Message
</button>
                    </form>
                </div>
        </div>
   </div>

    
    );
};

export default Page;
