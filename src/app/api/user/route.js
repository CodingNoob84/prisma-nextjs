import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prismaclient";

export async function POST(req){
    try {
        const data= await req.json();
    const result = await prisma.User.create({
        data
    });
    return NextResponse.json(result)
        
    } catch (error) {
        return NextResponse.json({message:"error occured", error:error})
    }
}

export async function GET(){
    try {
        const result = await prisma.User.findMany();
        return NextResponse.json(result)
        
    } catch (error) {
        return NextResponse.json({message:"error occured", error:error})
    }
}