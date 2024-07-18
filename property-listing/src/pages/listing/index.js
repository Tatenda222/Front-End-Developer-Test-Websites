
// import Head from 'next/head';
// import PropertySlider from '../../components/ListingSlider';
// import { useState } from 'react';


// export default function ToRent() {
//   const [view, setView] = useState('grid');
//   const [type, setType] = useState('for-sale');
//   return (
//     <>
//       <Head>
//         <title>Properties To Rent</title>
//         <meta name="description" content="Find your dream property to rent." />
//       </Head>
//       <PropertySlider title="All Properties To Rent" endpoint="https://fsboafrica.com/api/properties/to-rent?search=to-rent" />
//     </>
//   );
// }
// export default function ForSale() {
//   const [view, setView] = useState('grid');
//   const [type, setType] = useState('for-sale');
//   return (
//     <>
//       <Head>
//         <title>Properties For Sale</title>
//         <meta name="description" content="Find your dream property for sale." />
//       </Head>
//       <PropertySlider title="All Properties For Sale" endpoint="https://fsboafrica.com/api/properties/for-sale?search=for-sale" />
//     </>
//   );
// }

// export default function Listings() {
//   const [properties, setProperties] = useState([]);
//   const [view, setView] = useState('grid');
//   const [type, setType] = useState('for-sale');

//   useEffect(() => {
//     axios.get(`https://fsboafrica.com/api/properties/${type}?search=${type}`)
//       .then(response => setProperties(response.data))
//       .catch(error => console.error(error));
//   }, [type]);

//   return (
//     <>
//       <Head>
//         <title>{type === 'for-sale' ? 'Properties for Sale' : 'Properties for Rent'}</title>
//       </Head>
//       <div className="container mx-auto p-4">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold">{type === 'for-sale' ? 'Properties for Sale' : 'Properties for Rent'}</h1>
//           <div>
//             <button onClick={() => setType('for-sale')} className="mr-2">For Sale</button>
//             <button onClick={() => setType('to-rent')}>To Rent</button>
//             <button onClick={() => setView('grid')} className="mr-2">Grid View</button>
//             <button onClick={() => setView('list')}>List View</button>
//           </div>
//         </div>
//         <div className={view === 'grid' ? 'grid grid-cols-3 gap-4' : 'flex flex-col space-y-4'}>
//           {properties.map(property => (
//             <div key={property.id} className="border p-4">
//               <img src={property.image} alt={property.title} />
//               <h3>{property.title}</h3>
//               <p>{property.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Dialog } from '@headlessui/react';

export default function Listings() {
  const [properties, setProperties] = useState([]);
  const [view, setView] = useState('grid');
  const [type, setType] = useState('for-sale');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryData, setEnquiryData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dialingCode: '+263',
    phoneNumber: '',
    message: '',
    listingId: '',
    ownedBy: 'youremailaddress@example.com'
  });

  useEffect(() => {
    axios.get(`https://fsboafrica.com/api/properties/${type}?search=${type}`)
      .then(response => setProperties(response.data))
      .catch(error => console.error(error));
  }, [type]);

  const handleEnquirySubmit = () => {
    axios.post('https://fsboafrica.com/api/enquiries/create', enquiryData)
      .then(response => {
        alert('Enquiry submitted successfully');
        setIsEnquiryOpen(false);
      })
      .catch(error => {
        console.error(error);
        alert('Error submitting enquiry');
      });
  };

  return (
    <>
      <Head>
        <title>{type === 'for-sale' ? 'Properties for Sale' : 'Properties for Rent'}</title>
        <meta name="description" content={`Find your dream property ${type === 'for-sale' ? 'for-sale' : 'to-rent'}.`} />
      </Head>
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{type === 'for-sale' ? 'Properties for Sale' : 'Properties for Rent'}</h1>
          <div>
            <button onClick={() => setType('for-sale')} className="mr-2">For Sale</button>
            <button onClick={() => setType('to-rent')} className="mr-2">To Rent</button>
            <button onClick={() => setView('grid')} className="mr-2">Grid View</button>
            <button onClick={() => setView('list')}>List View</button>
          </div>
        </div>
        <div className={view === 'grid' ? 'grid grid-cols-3 gap-4' : 'flex flex-col space-y-4'}>
          {properties.map(property => (
            <div key={property.id} className="border p-4">
              <img src={property.image} alt={property.title} className="mb-4" />
              <h3 className="text-lg font-bold mb-2">{property.title}</h3>
              <p className="mb-2">{property.price}</p>
              <button onClick={() => {
                setIsEnquiryOpen(true);
                setEnquiryData({ ...enquiryData, listingId: property.id });
              }} className="bg-blue-500 text-white px-4 py-2 rounded">Enquire</button>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => setIsEnquiryOpen(true)} className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg">
        Enquiry
      </button>

      <Dialog open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50">
        <Dialog.Panel className="bg-white p-6 rounded-lg max-w-md w-full">
          <Dialog.Title className="text-2xl font-bold mb-4">Enquiry Form</Dialog.Title>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleEnquirySubmit();
          }}>
            <div className="mb-4">
              <label className="block text-sm font-medium">First Name</label>
              <input type="text" className="mt-1 p-2 w-full border rounded" value={enquiryData.firstName} onChange={(e) => setEnquiryData({ ...enquiryData, firstName: e.target.value })} required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Last Name</label>
              <input type="text" className="mt-1 p-2 w-full border rounded" value={enquiryData.lastName} onChange={(e) => setEnquiryData({ ...enquiryData, lastName: e.target.value })} required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input type="email" className="mt-1 p-2 w-full border rounded" value={enquiryData.email} onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })} required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Dialing Code</label>
              <input type="text" className="mt-1 p-2 w-full border rounded" value={enquiryData.dialingCode} onChange={(e) => setEnquiryData({ ...enquiryData, dialingCode: e.target.value })} required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Phone Number</label>
              <input type="text" className="mt-1 p-2 w-full border rounded" value={enquiryData.phoneNumber} onChange={(e) => setEnquiryData({ ...enquiryData, phoneNumber: e.target.value })} required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Message</label>
              <textarea className="mt-1 p-2 w-full border rounded" value={enquiryData.message} onChange={(e) => setEnquiryData({ ...enquiryData, message: e.target.value })} required />
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={() => setIsEnquiryOpen(false)} className="bg-gray-300 text-black px-4 py-2 rounded mr-2">Cancel</button>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
            </div>
          </form>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
























