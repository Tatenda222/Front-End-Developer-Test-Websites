import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';

export default function Listings() {
  const [properties, setProperties] = useState([]);
  const [view, setView] = useState('grid');
  const [type, setType] = useState('for-sale');

  useEffect(() => {
    axios.get(`https://fsboafrica.com/api/properties/${type}?search=${type}`)
      .then(response => setProperties(response.data))
      .catch(error => console.error(error));
  }, [type]);

  return (
    <>
      <Head>
        <title>{type === 'for-sale' ? 'Properties for Sale' : 'Properties for Rent'}</title>
      </Head>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{type === 'for-sale' ? 'Properties for Sale' : 'Properties for Rent'}</h1>
          <div>
            <button onClick={() => setType('for-sale')} className="mr-2">For Sale</button>
            <button onClick={() => setType('to-rent')}>To Rent</button>
            <button onClick={() => setView('grid')} className="mr-2">Grid View</button>
            <button onClick={() => setView('list')}>List View</button>
          </div>
        </div>
        <div className={view === 'grid' ? 'grid grid-cols-3 gap-4' : 'flex flex-col space-y-4'}>
          {properties.map(property => (
            <div key={property.id} className="border p-4">
              <img src={property.image} alt={property.title} />
              <h3>{property.title}</h3>
              <p>{property.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
