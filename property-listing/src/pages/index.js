// pages/index.js
"use client";
import Head from 'next/head';
import SalePropertySlider from '../components/SalePropertySlider';
import RentPropertySlider from '../components/RentPropertySlider';
import Navbar from '../components/NavBar';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Property Listings</title>
        <meta name="description" content="Find your dream property for sale or rent." />
      </Head>
      <Navbar />
      <div className="min-h-screen bg-zinc-100">
        
          <div className="container mx-auto flex justify-between items-center py-4 px-6">

            
            <div className="space-x-4">
              <button className="text-zinc-600 hover:text-zinc-900">Login</button>
              <button className="px-4 py-2 bg-primary text-white rounded">Sign Up</button>
            </div>
          </div>
        

        <section className="bg-white py-8">
          <div className="container mx-auto">
            
            <div className="mt-4 flex justify-center">
              <div className="flex items-center bg-white shadow rounded-lg overflow-hidden">
                <select className="px-4 py-2 border-r border-zinc-300">
                  <option>Property Type</option>
                  <option>Commercial</option>
                  <option>Industrial</option>
                  <option>Leisure/Hospitality</option>
                </select>
                <input type="text" placeholder="Suburb, City, Province, Country" className="px-4 py-2 w-full border-r border-zinc-300" />
                <button className="px-6 py-2 bg-red-500 text-white">SEARCH</button>
              </div>
            </div>
          </div>
        </section>

        <SalePropertySlider title="Properties For Sale" endpoint="https://fsboafrica.com/api/properties/latest" />
        <RentPropertySlider title="Properties To Rent" endpoint="https://fsboafrica.com/api/properties/latest" />

        {/* <section className="py-8 bg-zinc-100">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <img src="https://placehold.co/100x100?text=Buy" alt="Buy a Property" className="mx-auto mb-4" />
                <h3 className="text-lg font-bold">Buy a Property</h3>
                <p className="text-zinc-600">Find your dream home with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                <button className="mt-4 px-4 py-2 bg-primary text-white rounded">Browse Properties for Sale</button>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <img src="https://placehold.co/100x100?text=Sell" alt="Sell a Property" className="mx-auto mb-4" />
                <h3 className="text-lg font-bold">Sell a Property</h3>
                <p className="text-zinc-600">Find your dream home with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                <button className="mt-4 px-4 py-2 bg-primary text-white rounded">See your options</button>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <img src="https://placehold.co/100x100?text=Rent" alt="Rent a Property" className="mx-auto mb-4" />
                <h3 className="text-lg font-bold">Rent a Property</h3>
                <p className="text-zinc-600">Find your dream home with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                <button className="mt-4 px-4 py-2 bg-primary text-white rounded">Find Rentals</button>
              </div>
            </div>
          </div>
        </section> */}

{/* <section className="py-8 bg-zinc-100">
          <div className="container mx-auto">
            <div className="flex flex-wrap md:flex-nowrap justify-around gap-6">
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <img src="https://placehold.co/100x100?text=Buy" alt="Buy a Property" className="mx-auto mb-4" />
                <h3 className="text-lg font-bold">Buy a Property</h3>
                <p className="text-zinc-600">Find your dream home with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                <Link href="/buy">
                  <button className="mt-4 px-4 py-2 bg-primary text-white rounded">For Sale</button>
                </Link>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <img src="https://placehold.co/100x100?text=Sell" alt="Sell a Property" className="mx-auto mb-4" />
                <h3 className="text-lg font-bold">Sell a Property</h3>
                <p className="text-zinc-600">Find your dream home with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                <Link href="/sell">
                  <button className="mt-4 px-4 py-2 bg-primary text-white rounded">See your options</button>
                </Link>
              </div>
              <div className="bg-white shadow rounded-lg p-6 text-center">
                <img src="https://placehold.co/100x100?text=Rent" alt="Rent a Property" className="mx-auto mb-4" />
                <h3 className="text-lg font-bold">Rent a Property</h3>
                <p className="text-zinc-600">Find your dream home with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
                <Link href="/rent">
                  <button className="mt-4 px-4 py-2 bg-primary text-white rounded">Find Rentals</button>
                </Link>
              </div>
            </div>
          </div>
        </section> */}
        <section className="py-8 bg-zinc-100 overflow-hidden">
  <div className="container mx-auto">
    <div className="flex flex-wrap md:flex-nowrap justify-around gap-6 overflow-x-auto">
      <div className="bg-white shadow rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
        <img src="https://placehold.co/100x100?text=Buy" alt="Buy a Property" className="mx-auto mb-4" />
        <h3 className="text-lg font-bold">Buy a Property</h3>
        <p className="text-zinc-600">Find your dream home with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
        <Link href="/buy">
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition duration-300">For Sale</button>
        </Link>
      </div>
      <div className="bg-white shadow rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
        <img src="https://placehold.co/100x100?text=Sell" alt="Sell a Property" className="mx-auto mb-4" />
        <h3 className="text-lg font-bold">Sell a Property</h3>
        <p className="text-zinc-600">Find your dream home with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
        <Link href="/sell">
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition duration-300">See your options</button>
        </Link>
      </div>
      <div className="bg-white shadow rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
        <img src="https://placehold.co/100x100?text=Rent" alt="Rent a Property" className="mx-auto mb-4" />
        <h3 className="text-lg font-bold">Rent a Property</h3>
        <p className="text-zinc-600">Find your dream home with an immersive photo experience and the most listings, including things you won’t find anywhere else.</p>
        <Link href="/rent">
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition duration-300">Find Rentals</button>
        </Link>
      </div>
    </div>
  </div>
</section>


        <footer className="bg-zinc-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Solid.com. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
