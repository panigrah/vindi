import { notFound } from "next/navigation";
import TastingDetail from "./tasting-detail";
import {PrismaClient} from '@prisma/client'
import { nullsToUndefined } from "@/utils/nullHandler";
const prisma = new PrismaClient()

export default async function TastingPage({ params }: { params: { id: string }}) {
  if( params.id.length !== 24) {
    return notFound()
  }

  const tasting = await prisma.tasting.findFirst({ where: { id: params.id }, include: { reviewer: true, wine: true }})
  if(!tasting) {
    return notFound()
  }
  return (
     <TastingDetail tasting={nullsToUndefined(tasting)} />
  )
}