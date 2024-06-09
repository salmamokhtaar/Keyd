import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useSnackbar } from 'notistack';
import React, { useState } from 'react'
import {useLoaderData, useParams} from 'react-router-dom'


function EditUser() {
  const {id} = useParams();
  const {email,password} = useLoaderData()
 
  const { enqueueSnackbar } = useSnackbar()

 

 

 
  // handle book update
  const handleUserUpdate = (e) => {
   e.preventDefault();
   const form = e.target;
   const email = form.email.value;
   const password = form.password.value;
   console.log(email);

   const userObj = {
    email,
    password
   }

  // update user data
 
  fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObj)
  }).then(res => res.json()).then(() => enqueueSnackbar("User Updated Successfully...",{variant: 'success'}));
  //  console.log(id);
  }


  return (
 <div className='px-4 my-12'>
   <h2 className='mb-8 text-3xl font-bold'>Update A Book</h2>
   {/* form */}
   <form onSubmit={handleUserUpdate} className="flex lg:w-[900px] flex-col flex-wrap gap-4">
    {/* first row */}
      <div className='flex gap-8'>

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="email" value="email " />
        </div>
        <TextInput id="email" name='email' defaultValue={email} type="text" placeholder="email" required />
      </div>
      {/* password */}
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="password" value="password  " />
        </div>
        <TextInput id="password" name='password' defaultValue={password} type="text" placeholder="password" required />
      </div>
      </div>
     
  
   
  
      <Button className='mt-5' type="submit">Update User</Button>
     
    </form>

    </div>
  )
}

export default EditUser