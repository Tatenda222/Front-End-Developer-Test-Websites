"use client";
import { useEffect, useState } from "react";
import PropertyCard from "./components/propertyCard";
import ServiceCard from "./components/serviceCard";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  const [activeButton, setActiveButton] = useState('For Sale');
  const [loading, setLoading] = useState(false);
  const [latestPropertiesToRent, setLatestPropertiesToRent] = useState([]);
  const [latestPropertiesForSale, setLatestPropertiesForSale] = useState([]);
  const propertiesEndpoint = 'https://fsboafrica.com/api/properties/latest';

  const fetchData = async () => {
    setLoading(true);
    fetch(propertiesEndpoint)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setLatestPropertiesToRent(data.data.latestPropertiesToRent);
        setLatestPropertiesForSale(data.data.latestPropertiesForSale);
        
        console.log(data.data.latestPropertiesToRent);
       
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
        
      }).finally(() => {
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="flex  min-h-screen  flex-col">
   
      <section
        className="relative flex h-[500px] flex-col items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/house.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-600/50 opacity-90"></div>
        <div className="w-fit"> 
        <div className="relative w-fit bg-white rounded-2xl p-1 text-xs">
          <button
            className={`rounded-2xl p-2 ${activeButton === 'For Sale' ? 'bg-red-500 text-white' : ' text-gray-500'}`}
            onClick={() => setActiveButton('For Sale')}
          >
            For Sale
          </button>
          <button
            className={`rounded-2xl p-2 ${activeButton === 'For Rent' ? 'bg-red-500 text-white' : ' text-gray-500'}`}
            onClick={() => setActiveButton('For Rent')}
          >
            For Rent
          </button>
        </div>
        <div className="relative bg-white p-4 border rounded-md flex flex-row items-center justify-between gap-x-2 mt-4">
          <select className="p-2 bg-white rounded border w-[200px]">
            <option>Commercial</option>
            <option>Education</option>
            <option>Price</option>
          </select>
          <input
            type="text"
            placeholder="Search for property"
            className="p-2 rounded border w-[400px] outline-none"
          />
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
        </div>
      </section>
      <div className="bg-gray-50 flex flex-col justify-center p-5 items-center">
    <h1 className="text-xl text-gray-700 font-bold text-left max-w-[1000px]  w-full mt-4">Featured Properties</h1>
    <Carousel>
    
      {loading ? <p>Loading...</p> : <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 w-full max-w-[1000px] py-4">
        {latestPropertiesForSale.map((property, index) => (
          // <p key={index}>{property.title}</p>
      <PropertyCard key={index} property={property} />
    ))}
      </div>}
      </Carousel>
    </div>
    <div className="flex flex-col justify-center p-5 items-center">
    <h1 className="text-xl text-gray-700 font-bold text-left max-w-[1000px]  w-full mt-4">Featured Properties</h1>
    <Carousel>

    {loading ? <p>Loading...</p> : <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 w-full max-w-[1000px] py-4">
        {latestPropertiesToRent.map((property, index) => (
          // <p key={index}>{property.title}</p>
      <PropertyCard key={index} property={property} />
    ))}
      </div>}
      </Carousel>
    </div>
    <div className="bg-gray-50 flex flex-col justify-center p-5 py-10 items-center">
      <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 w-full max-w-[1000px] py-4">
          <ServiceCard title="Buy a property" description="Find your place with an immersive photo experience and the most listing. including things you wont find anywhere else" link="/properties" linkTitle="Browse Properties For Sale"/>
          <ServiceCard title="Rent a property" description="Find your place with an immersive photo experience and the most listing. including things you wont find anywhere else" link="/properties" linkTitle="Browse Properties To Rent"/>
          <ServiceCard title="Sell a property" description="Find your place with an immersive photo experience and the most listing. including things you wont find anywhere else" link="/" linkTitle="Browse Properties For Sale"/>

      </div>
      </div>
     

    </main>
  );
}
