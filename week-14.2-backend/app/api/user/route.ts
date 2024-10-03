import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db";

export async function GET() {
    
    return Response.json({ username: "harkirat", email: "harkirat@gmail.com" })
  }


export async function POST(req : NextRequest , res : NextResponse) {
    const body =await req.json();

    const user = await prisma.user.create({
        data : {
            username : body.username,
            password : body.password
        }
    })

    return NextResponse.json({
        username : body.username,
        password : body.password
    })
}

interface User {
    username : string
    password : string
}