import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const prisma = new PrismaClient()

const getUser = async () => {
  const token = cookies().get('token')?.value
  if(token) {
    const u = JSON.parse(token)
    if( u.id ) {
      return u
    }
  }
  return undefined
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const u = await getUser()
  if(!u?.id ) {
    return NextResponse.json({ message: 'unauthorized'}, {status: 400})
  } else {
    const records = await prisma.tasting.delete({ where: { id: params.id, reviewerId: u.id }})
    return NextResponse.json(records)
  }
}
