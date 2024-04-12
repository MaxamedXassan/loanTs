

import Link from 'next/link'

import prisma from "./db";
import CustomerList from './components/CustomerList';


function getCutomer() {
  return prisma.customer.findMany()
}

export default async function Home() {
  const customers = await  getCutomer()
  return (
    <div>
       <Link className='flex mt-4 p-2 items-center justify-center bg-yellow-400 font-bold' href={"/customerForm"}>Add</Link>
     
     <ul className="pl-4">
      {customers.map(customer => (
        <CustomerList key={customer.id} {...customer} />
      ))}
    </ul>
    </div>
  );
}
