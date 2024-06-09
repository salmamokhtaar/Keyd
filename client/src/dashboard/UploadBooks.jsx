import React, { useState } from 'react'
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useSnackbar } from 'notistack';
function UploadBooks() {
 
  const { enqueueSnackbar } = useSnackbar()
  const bookCategory = [
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

  const [selectedBookCategory, setSelectedBookCatergory] = useState(bookCategory[0]);

  const handleChangeSelectedValues = (e) => {
   console.log(e.target.value);
   setSelectedBookCatergory(e.target.value);
  }
  // handlebook submission
  const handlebookSubmit = (e) => {
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
   console.log(bookObj);

   // send data to the database
   fetch("http://localhost:3000/upload_book",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookObj)
   }).then(res => res.json()).then(data => {
    // console.log(data);
    enqueueSnackbar("Book Created Successfully...",{variant: 'success'});
    form.reset();
   })





  }


  return (
 <div className='px-4 my-12'>
   <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>
   {/* form */}
   <form onSubmit={handlebookSubmit} className="flex lg:w-[900px] flex-col flex-wrap gap-4">
    {/* first row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title " />
        </div>
        <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required />
      </div>
      {/* author name */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="author" value="Author Name " />
        </div>
        <TextInput id="author" name='author' type="text" placeholder="Author Name" required />
      </div>
      </div>
     
    {/* second row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book image URL" />
        </div>
        <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Book image URL" required />
      </div>
      {/* category */}
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <select id='inputState' name='bookCategory' className='full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValues}>
          {
            bookCategory.map((option) => <option key={option} value={option}> {option}</option>)
          }

        </select>
      </div>
      </div>
     
     {/* third row */}
      <div>
      <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea className='w-full' id="bookDescription" name='bookDescription'  placeholder="Write your book description..." required rows={4} />
      
      </div>
  {/* book pdf link*/}
     
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL" value="Book Pdf URL" />
        </div>
        <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="book Pdf URL" required />
      </div>
      <Button className='mt-5' type="submit">Upload Book</Button>
     
    </form>

    </div>
  )
}

export default UploadBooks