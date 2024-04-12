import Link from 'next/link'
import React from 'react'
// import {HiPencilAlt} from "react-icons/hi"
// import {HiOutlineTrash} from "react-icons/hi"
// import prisma from '@/prisma'

type LoanProps = {
  id: string
//   customerId: string
  title: string
  price: string
  
}

// interface LoansProps {
//   params: {
//     id: string
//   }
// }


const loansList: React.FC<LoanProps> = ({ id, title, price }) => {
  return (
    <div className='p-4 border border-slate-300 my-3 justify-between gap-5 items-start'key={id}>
     <Link href={`loansList/${id}`} className='w-4/6'>
      <h3 className='font-bold'>{title}</h3>
      <p>${price}</p>
     </Link>
    
    </div>
  );
};

export default loansList;