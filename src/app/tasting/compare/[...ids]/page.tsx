import prisma from "@/utils/db"
import ComparePage from "./comparePage"

//650445ef4a63a4ab31328c1f
//6504493452578269a70ba6c0+650445ef4a63a4ab31328c1f+65044cf8a42713da7a381a2d+65044ff5b0bb4c1e864eb8f2+65045324451747d7d0850b9a

export default async function TastingComparePage({ params }: { params: {ids: string[]}}) {
  const tastingIds = params.ids
  const tastings = await prisma.tasting.findMany({ where: { id: { in: tastingIds }}, include: { wine: true, reviewer: true }})
  return(
    <ComparePage tastings={tastings} />
  )
}