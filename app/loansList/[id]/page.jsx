import prisma from "../../db";
import React from 'react'
import Link from 'next/link'
import LoanList from '../../components/LoanList';

function getLoan() {
  return prisma.loan.findMany()
}

const page = async () => {
  const loans = await  getLoan()
  return (
    <>
       <Link className='flex mt-4 p-2 items-center justify-center bg-slate-400 font-bold text-slate-100' href={"/loanForm"}>New</Link>
      <ul className="pl-4">
      {loans.map(loan => (
        <LoanList key={loan.id} {...loan} />
      ))}
    </ul>
    </>
  )
}

export default page
