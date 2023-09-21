import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import prisma from '@/utils/db'

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

export async function GET(request: NextRequest) {
  const u = await getUser()
  const wines = await prisma.wine.count()
  const tastings = await prisma.tasting.count()
  const users = await prisma.user.count()
  return NextResponse.json({ wines, tastings, users })
}
