import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
function Shop() {
  const [books, setBooks] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3000/all_books").then(res => res.json()).then(data => setBooks(data))
  },[])
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'> All Books Are Here...</h2>

      <div className='grid my-12 gap-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book =>  <Card
          
          >
            <img src={book.imageUrl} alt=""  className='h-60'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <p>{book.bookTitle}</p>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Here are the biggest enterbise 
              </p>
            </p>

            <button className='bg-blue-700 font-semibold text-white py-2 rounded'>
            <a href={book.bookPdfUrl}>Read Here</a>
              </button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop