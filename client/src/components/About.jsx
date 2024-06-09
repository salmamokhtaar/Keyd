
import React from 'react';

const About = () => {
  return (
    <div className="rounded bg-gray-60 ">
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Section */}
          <div className="mb-8 md:mb-0 ">
            <h1 className="text-3xl font-bold mb-6 mt-24">Meet Our Team</h1>
            <div className="flex flex-wrap">
              {/* Team Member 1 */}
              <div className="w-full md:w-1/2 lg:w-1/3 mb-8 ">
                <img
                  className="rounded-full h-48 w-48 mx-auto mb-4 object-cover"
                  src={"https://images.pexels.com/photos/20518457/pexels-photo-20518457/free-photo-of-brunette-in-red-blouse.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt="Team Member 1"
                />
                <h2 className="text-xl font-semibold mb-2">Sagal</h2>
                <p className="text-gray-700">Co-founder and CEO</p>
              </div>
              {/* Team Member 2 */}
              <div className="w-full md:w-1/2 lg:w-1/3 mb-8 ">
                <img
                  className="rounded-full h-48 w-48 mx-auto mb-4 object-cover"
                  src={"https://images.pexels.com/photos/20516159/pexels-photo-20516159/free-photo-of-portrait-of-a-girl-glancing-in-a-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt="Team Member 2"
                />
                <h2 className="text-xl font-semibold mb-2">Salma</h2>
                <p className="text-gray-700">Co-founder and COO</p>
              </div>
              {/* 3 */}
              <div className="w-full md:w-1/2 lg:w-1/3 mb-8 ">
                <img
                  className="rounded-full h-48 w-48 mx-auto mb-4 object-cover"
                  src={"https://images.pexels.com/photos/20516157/pexels-photo-20516157/free-photo-of-portrait-of-a-girl-in-a-leather-jacket.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt="Team Member 1"
                />
                <h2 className="text-xl font-semibold mb-2">Nimco</h2>
                <p className="text-gray-700">Co-founder and CEO</p>
              </div>
              {/* 4 */}
              <div className="w-full md:w-1/2 lg:w-1/3 mb-8 ">
                <img
                  className="rounded-full h-48 w-48 mx-auto mb-4 object-cover"
                  src={"https://images.pexels.com/photos/20449223/pexels-photo-20449223/free-photo-of-face-of-smiling-teenager.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt="Team Member 1"
                />
                <h2 className="text-xl font-semibold mb-2">Hamdi</h2>
                <p className="text-gray-700">Co-founder and CEO</p>
              </div>
              {/* 5 */}
              <div className="w-full md:w-1/2 lg:w-1/3 mb-8 ">
                <img
                  className="rounded-full h-48 w-48 mx-auto mb-4 object-cover"
                  src={"https://images.pexels.com/photos/20518959/pexels-photo-20518959/free-photo-of-young-brunette-posing-against-a-beige-drape.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt="Team Member 1"
                />
                <h2 className="text-xl font-semibold mb-2">Hafsa</h2>
                <p className="text-gray-700">Co-founder and CEO</p>
              </div>
             
              {/* Add more team members as needed */}
            </div>
          </div>

          {/* Store Information Section */}
          <div className=''>
            <h1 className="text-3xl font-bold  mb-6 mt-20 ">Our Book Store</h1>
            
            <p className="text-gray-900 mb-4">
              Welcome to our book store! We are passionate about literature and
              dedicated to providing a wide selection of books for all readers.
            </p>
            <p className="text-gray-700 mb-4">
              Our store is located at 123 Main Street, Cityville. Visit us
              during our business hours to explore the world of books!
            </p>
            <p className="text-gray-900">Contact us at: info@bookstore.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;