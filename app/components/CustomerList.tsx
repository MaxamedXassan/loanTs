
import Link from 'next/link'
import React from 'react'
// import {HiPencilAlt} from "react-icons/hi"
// import {HiOutlineTrash} from "react-icons/hi"
// import prisma from '@/prisma'

type CustomerProps = {
  id: string
  name: string
  number: string
  
}


const CustomerList: React.FC<CustomerProps> = ({ id, name, number }) => {
  return (
    <div className='p-4 border border-slate-300 my-3 justify-between gap-5 items-start'key={id}>
     <Link href={`loansList/${id}`} className='w-4/6'>
      <h3 className='font-bold'>{name}</h3>
      <p>{number}</p>
     </Link>
    </div>
  );
};

export default CustomerList;
