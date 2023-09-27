import { NextResponse } from 'next/server'
import prisma from '@/utils/db'
import { getUser } from '../tasting/getUser'

export async function POST(request: Request) {
    //login the user with just the name for now if not logged in or created..
    //make sure user is logged in..
    const u = await getUser()
    const { url, name } = await request.json()
    //if url is not already in then..
    let record = await prisma.retailer.findFirst({ where: { url } })
    if(record) {
      const updatedRecord = await prisma.retailer.updateMany({ where: { url }, data: { votes: record.votes + 1}})
      return NextResponse.json(updatedRecord)
    } else {
      const data = {
        url,
        name: name ?? url,
        requestedDate: new Date(),
        requester: u?.id? { connect: { id: u.id }}: undefined
      }
      const newRecord = await prisma.retailer.create({ data })
      return NextResponse.json(newRecord)
    }
}