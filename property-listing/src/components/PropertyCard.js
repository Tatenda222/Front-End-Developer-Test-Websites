import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src={property.images[0].filePath} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{property.title}</h3>
        <p className="text-zinc-600">{property.type}</p>
        <p className="text-zinc-600">{property.address}</p>
        <p className="text-zinc-600">BEDS: {property.bedrooms} BATH: {property.bathrooms} {property.propertySize}</p>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded">Details</button>
      </div>
    </div>
  );
};

export default PropertyCard;
