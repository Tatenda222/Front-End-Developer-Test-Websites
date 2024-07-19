
"use client";
import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/propertyCard';
import { FaGripHorizontal } from 'react-icons/fa';
import { CiBoxList } from 'react-icons/ci';

const Listings = () => {
  const [layout, setLayout] = useState('vertical');
  const [loading, setLoading] = useState(false);
  const [latestPropertiesToRent, setLatestPropertiesToRent] = useState([]);
  const [latestPropertiesForSale, setLatestPropertiesForSale] = useState([]);

  const fetchData = async (propertyType) => {
    const endpoint = propertyType === 'buy' 
      ? 'https://fsboafrica.com/api/properties/for-sale?search=for-sale' 
      : 'https://fsboafrica.com/api/properties/to-rent?search=to-rent';

    setLoading(true);
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data);

      if (propertyType === 'buy') {
        setLatestPropertiesForSale(data.data);
      } else {
        setLatestPropertiesToRent(data.data);
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('rent');
    fetchData('buy');
  }, []);

  return (
    <div className='bg-gray-50'>
      <div className='max-w-[1200px] mx-auto p-4'>
        <div className='w-full grid grid-cols-4 gap-x-2'>
          <div className='bg-white col-span-1 p-4 border rounded-md flex flex-col items-center h-fit gap-2'>
            <select className='p-2 bg-white rounded border w-full'>
              <option>Commercial</option>
              <option>Education</option>
              <option>Price</option>
            </select>
            <input type='text' placeholder='Search for property' className='p-2 rounded border w-full outline-none' />
          </div>
          <div className="flex flex-col col-span-3 justify-center items-center">
            <div className='bg-white p-2 border rounded-md flex flex-row items-center w-full mb-2 justify-between'>
              <label>Sort by:</label>
              <label>10 search results</label>
              <div className='flex flex-row gap-x-2 rounded-md'>
                {/* Horizontal or vertical toggle */}
                <button
                  className={`border border-red-500 p-2 rounded-md ${layout === 'vertical' ? 'bg-red-500 text-white' : 'text-red-500'}`}
                  onClick={() => setLayout('vertical')}
                >
                  <CiBoxList size={20} />
                </button>
                <button
                  className={`border border-red-500 p-2 rounded-md ${layout === 'horizontal' ? 'bg-red-500 text-white' : 'text-red-500'}`}
                  onClick={() => setLayout('horizontal')}
                >
                  <FaGripHorizontal size={20}/>
                </button>
              </div>
            </div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {layout === 'vertical' ? (
                  <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 w-full max-w-[1000px]">
                    {latestPropertiesToRent.map((property, index) => (
                      <PropertyCard key={index} property={property} />
                    ))}
                    {latestPropertiesForSale.map((property, index) => (
                      <PropertyCard key={index} property={property} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2 w-full max-w-[1000px]">
                    {latestPropertiesToRent.map((property, index) => (
                      <PropertyCard key={index} property={property} />
                    ))}
                    {latestPropertiesForSale.map((property, index) => (
                      <PropertyCard key={index} property={property} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
