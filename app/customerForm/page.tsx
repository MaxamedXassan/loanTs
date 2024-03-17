
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { type } from 'os'
import prisma from '../db'


async function createCustomer(data:FormData) {
  "use server"
  const nameEntry = data.get("name");
const numberEntry = data.get("number");

const name = typeof nameEntry === 'string' ? nameEntry.trim() : '';
const number = typeof numberEntry === 'string' ? numberEntry.trim() : '';

  if (!name || name.length === 0) {
    console.log("Invalid name: Name is required");
  }
// number
if (!number || number.length === 0) {
  console.log("Invalid name: Name is required");
}
  await prisma.customer.create({data: {name, number,}});
  redirect("/")
}



const MyForm = () => {
  

  return (
    
<>
    <header className="flex justify-between items-center mb-4">
    <h1 className="text-2xl">New</h1>
  </header>
  <form action={createCustomer} className='flex gap-2 flex-col'>
    <input type="text"
    name='name'
    className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100' />

<input type="number"
    name='number'
    className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100' />
    
  <div className='flex gap-1 justify-end'>
    <Link className="border border-slate-300 text-slate-200 px-2 py-1 rounded
      hover:bg-slate-500 outline-none bg-slate-700" href="../">Cancel</Link>
    <button type='submit'
    className="border border-slate-300 text-slate-200 px-2 py-1 rounded
    hover:bg-slate-500 outline-none bg-slate-700">
        Create
    </button>
  </div>
  </form>
  </>
     

  );
};

export default MyForm;
