import prisma from "@/utils/db";
import HomePage from "./home-page";

export default async function Home() {
  const wines = await prisma.wine.count()
  const tastings = await prisma.tasting.count()
  const users = await prisma.user.count()

  return (
    <HomePage wines={wines} tastings={tastings} users={users} />
  );
}
