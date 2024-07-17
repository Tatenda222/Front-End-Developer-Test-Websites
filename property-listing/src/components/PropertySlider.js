import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertySlider = ({ title, endpoint }) => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get(endpoint)
      .then(response => setProperties(response.data))
      .catch(error => console.error(error));
  }, [endpoint]);

  return (
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="overflow-x-scroll flex space-x-4">
        {properties.map(property => (
          <div key={property.id} className="min-w-[300px]">
            <img src={property.image} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertySlider;
