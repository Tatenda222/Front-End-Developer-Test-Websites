"use client";
import React, { useState, useEffect } from 'react';

import Loader from './Loader'; // Import the loader component
import PropertyCardHorizontal from './PropertyCard';

const SalePropertySlider = ({ title, endpoint}) => {
  
const [latestPropertiesForSale,setLatestPropertiesForSale] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      
        setLatestPropertiesForSale(data.data.latestPropertiesForSale);
        console.log(data.data.latestPropertiesToRent);
       
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchData();
  }, [endpoint]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader />
      </div>
    );
  }

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPropertiesForSale.map(property => (
            <PropertyCardHorizontal key={property.id} property={property} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SalePropertySlider;
