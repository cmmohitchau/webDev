// app/api/user/route.ts

import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { NEXT_AUTH } from "@/app/lib/auth";
export default  async function GET() {
    const session = await getServerSession(NEXT_AUTH);

    return NextResponse.json({
        session
    })
}