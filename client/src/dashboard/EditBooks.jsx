import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react'
import {useLoaderData, useParams} from 'react-router-dom'


function EditBooks() {
  const {id} = useParams();
  const {bookTitle,author,imageUrl,bookCategory,bookDescription,bookPdfUrl} = useLoaderData()
 
  
  const { enqueueSnackbar } = useSnackbar()
  const bookCatergories = [
   "Fiction",
   "Non-Fiction",
   "Mistery",
   "Programming",
   "Fantasty",
   "Horror",
   "History",
   "Self-help",
   "Business",
   "Children Books",
   "Travel",
   "Religion",
   "Art And Design"
  ];

  const [selectedBookCategory, setSelectedBookCatergory] = useState(bookCatergories[0]);

  const handleChangeSelectedValues = (e) => {
   console.log(e.target.value);
   setSelectedBookCatergory(e.target.value);
  }
  // handle book update
  const handlebookUpdate = (e) => {
   e.preventDefault();
   const form = e.target;
   const bookTitle = form.bookTitle.value;
   const author = form.author.value;
   const imageUrl = form.imageUrl.value;
   const bookCategory = form.bookCategory.value;
   const bookDescription = form.bookDescription.value;
   const bookPdfUrl = form.bookPdfUrl.value;
   console.log(bookTitle);

   const bookObj = {
    bookTitle,
    author,
    imageUrl,
    bookCategory,
    bookDescription,
    bookPdfUrl
   }
  //  console.log(bookObj);

  // update book data
 
  fetch(`http://localhost:3000/book/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookObj)
  }).then(res => res.json()).then(() => enqueueSnackbar("Book Updated Successfully...",{variant: 'success'}));
  //  console.log(id);
  }


  return (
 <div className='px-4 my-12'>
   <h2 className='mb-8 text-3xl font-bold'>Update A Book</h2>
   {/* form */}
   <form onSubmit={handlebookUpdate} className="flex lg:w-[900px] flex-col flex-wrap gap-4">
    {/* first row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title " />
        </div>
        <TextInput id="bookTitle" name='bookTitle' defaultValue={bookTitle} type="text" placeholder="Book Name" required />
      </div>
      {/* author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="author" value="author  " />
        </div>
        <TextInput id="author" name='author' defaultValue={author} type="text" placeholder="Author Name" required />
      </div>
      </div>
     
    {/* second row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageUrl" value="Book image URL" />
        </div>
        <TextInput id="imageUrl" name='imageUrl' defaultValue={imageUrl} type="text" placeholder="Book image URL" required />
      </div>
      {/* category */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="bookCategory" value="bookCategory" />
        </div>
        <select id='bookCategory' name='bookCategory' defaultValue={bookCategory} className='full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValues}>
          {
            bookCatergories.map((option) => <option key={option} value={option}> {option}</option>)
          }

        </select>
      </div>
      </div>
     
     {/* third row */}
      <div>
      <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea className='w-full' id="bookDescription" defaultValue={bookDescription} name='bookDescription'  placeholder="Write your book description..." required rows={4} />
      
      </div>
  {/* book pdf link*/}
     
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="bookPdfUrl" />
        </div>
        <TextInput id="bookPdfUrl" name='bookPdfUrl' defaultValue={bookPdfUrl} type="text" placeholder="book Pdf URL" required />
      </div>
      <Button className='mt-5' type="submit">Update Book</Button>
     
    </form>

    </div>
  )
}

export default EditBooks