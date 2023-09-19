import prisma from '@/utils/db'
import { NextResponse } from 'next/server'
import { getUser } from '../tasting/getUser'

export async function GET(request: Request) {
    const records = await prisma.wine.findMany()
    return NextResponse.json(records)
}

export async function POST(request: Request) {
    //login the user with just the name for now if not logged in or created..
    //make sure user is logged in..
    const u = await getUser()
    if(!u?.id) {
      return NextResponse.json({ message: 'unauthorized'}, {status: 400})
    } else {
      const { wine, ...data } = await request.json()
      const record = await prisma.wine.create({ 
        data: { 
          ...data, 
          varieties: [],
          user: {
            connect: {
              id: u.id
            }
          }
      }})
      return NextResponse.json(record)
    }
}