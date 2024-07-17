import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';

export default function Listing() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://fsboafrica.com/api/properties/details/${id}`)
        .then(response => setProperty(response.data))
        .catch(error => console.error(error));
    }
  }, [id]);

  const handleEnquiry = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      await axios.post('https://fsboafrica.com/api/enquiries/create', data);
      alert('Enquiry submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to submit enquiry.');
    }
  };

  if (!property) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{property.title}</title>
      </Head>
      <div className="container mx-auto p-4">
        <img src={property.image} alt={property.title} />
        <h1 className="text-2xl font-bold">{property.title}</h1>
        <p>{property.description}</p>
        <form onSubmit={handleEnquiry}>
          <input type="hidden" name="listingId" value={property.id} />
          <input type="hidden" name="ownedBy" value="youremail@example.com" />
          <div>
            <label>First Name</label>
            <input type="text" name="firstName" required />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Dialing Code</label>
            <input type="text" name="dialingCode" required />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" name="phoneNumber" required />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" required></textarea>
          </div>
          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
    </>
  );
}
