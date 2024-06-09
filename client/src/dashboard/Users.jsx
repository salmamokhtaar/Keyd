import { Table } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useSnackbar } from 'notistack';
 

function Users() {
  
  const { enqueueSnackbar } = useSnackbar();
  const [allusers, setusers] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3000/users").then(res => res.json()).then(data => setusers(data));
  });
  
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    }).then(res => res.json()).then(() => enqueueSnackbar("user deleted Successfully...",{variant: 'success'}));
    //  console.log(id);

  }

  return (
    <div className='px-4 my-12 lg:px-24'>
       <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
       {/* table */}
       <Table className='lg:w-[900px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>email</Table.HeadCell>
          <Table.HeadCell>password</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit and Delete</span> 
          </Table.HeadCell>
        </Table.Head>
          {
            allusers.map((user,index)=>   <Table.Body className="divide-y" key={user._id}>
               <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {index +1}
            </Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.password}</Table.Cell>
            <Table.Cell>

              <Link to={`/admin/dashboard/users/${user._id}`} className="mr-5 font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit 
              </Link>
              <button onClick={() => handleDelete(user._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-500'>Delete</button>
            </Table.Cell>
          </Table.Row>
            </Table.Body>)
          }
  
      </Table>
    </div>
  )
}

export default Users