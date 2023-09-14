import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const prisma = new PrismaClient()

export async function POST(request: Request) {
    //login the user with just the name for now if not logged in or created..
    const body = await request.json()
    const user = await prisma.user.upsert({ where: { username: body.username }, update: {}, create: { username: body.username, passwordHash: '' }})
    if(user.id) {
      const token=JSON.stringify({name: user.username, id: user.id})
      cookies().set('token', token)
    }
    return NextResponse.json(user)
}

export async function DELETE() {
  cookies().delete('token')
  return NextResponse.json({status: 'ok'})
}

export async function GET(request: Request) {
  const token = cookies().get('token')
  if(token && token.value) { 
    const decoded = JSON.parse(token.value)
    if( decoded?.id) {
      const user = await prisma.user.findFirst({ where: { id: decoded.id }})
      if(!user) {
        cookies().delete('token')
      } else {
        return NextResponse.json(user)
      }
    }
  }
  return NextResponse.json({id: '', status: 'unauthorized'})
}
