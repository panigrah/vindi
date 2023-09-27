import prisma from "@/utils/db";
import WineRetailerTrackerPage from "./TrackerPage";

export default async function WinesTrackerPage() {
  const items = await prisma.retailer.findMany()
  return <WineRetailerTrackerPage items={items} />
}