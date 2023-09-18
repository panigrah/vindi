import prisma from '@/utils/db'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const records = await prisma.wine.findMany()
    return NextResponse.json(records)
}
