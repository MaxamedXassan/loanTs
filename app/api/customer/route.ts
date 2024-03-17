
import prisma from "@/prisma";

import { NextResponse } from "next/server";

export async function main() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Database Connection Unsuccessull");
  }
}



export const GET = async (req: Request, res: NextResponse) => {
    try {
      await main();
      const customers = await prisma.customer.findMany();
      return NextResponse.json({ message: "Success", customers }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };


  
export const POST = async (req: Request, res: NextResponse) => {
    try {
      const { name, number } = await req.json();
      await main();
      const customer = await prisma.customer.create({ data: { name, number,  } });
      return NextResponse.json({ message: "Success", customer }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };