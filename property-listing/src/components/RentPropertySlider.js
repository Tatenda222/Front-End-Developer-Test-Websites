"use client";
import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';


const RentPropertySlider = ({ title, endpoint}) => {


const [latestPropertiesForRent,setLatestPropertiesForRent] = useState([]);
  

  const fetchData = async () => {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setLatestPropertiesForRent(data.data.latestPropertiesToRent);
        
        console.log(data.data.latestPropertiesToRent);
       
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
        
      });
  }
  useEffect(() => {
    fetchData();
  }, [endpoint]);


  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPropertiesForRent.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default RentPropertySlider;
