import { NextResponse } from 'next/server'
import prisma from '@/utils/db'
import { getUser } from './getUser'

export async function POST(request: Request) {
    //login the user with just the name for now if not logged in or created..
    //make sure user is logged in..
    const u = await getUser()
    if(!u?.id) {
      return NextResponse.json({ message: 'unauthorized'}, {status: 400})
    } else {
      const { wine, ...data } = await request.json()
      const record = await prisma.tasting.create({ 
        data: { 
          ...data, 
          published: true, 
          reviewer: {
            connect: {
              id: u.id
            }
          },
          wine: {
            connect: {
              id: wine.id
            }
          }
      }})
      return NextResponse.json(record)
    }
}

export async function GET(request: Request) {
  const u = await getUser()
  if(!u?.id) {
    return NextResponse.json({ message: 'unauthorized'}, {status: 400})
  } else {
    const records = await prisma.tasting.findMany({ where: { reviewerId: u.id }, include: { reviewer: true, wine: true } })
    return NextResponse.json(records)
  }
}
