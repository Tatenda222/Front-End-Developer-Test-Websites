import PropertySlider from '../components/PropertySlider';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Property Listings</title>
        <meta name="description" content="Find your dream property for sale or rent." />
      </Head>
      <div className="container mx-auto p-4">
        <PropertySlider title="Properties For Sale" endpoint="https://fsboafrica.com/api/properties/latest" />
        <PropertySlider title="Properties To Rent" endpoint="https://fsboafrica.com/api/properties/to-rent?search=to-rent" />
      </div>
    </>
  );
}
