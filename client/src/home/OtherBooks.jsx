import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

function BestSelerBooks() {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
     fetch("http://localhost:3000/all_books").then(res => res.json()).then(data => setBooks(data.slice(0,8)))
    },[])
  return (
    <div>
        <BookCards books={books} headline="Other Books"/>
    </div> 
  )
}

export default BestSelerBooks