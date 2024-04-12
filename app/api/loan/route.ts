
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
      const loans = await prisma.loan.findMany();
      return NextResponse.json({ message: "Success", loans }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };


  
export const POST = async (req: Request, res: NextResponse) => {
    try {
      const { customerId, title, price } = await req.json();
      await main();
      const loan = await prisma.loan.create({ data: { customerId, title, price  } });
      return NextResponse.json({ message: "Success", loan }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };