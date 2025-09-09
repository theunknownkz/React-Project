import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export default async function TripDetail({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const session = await auth();
  if (!session) {
    return <div>Please sign in first.</div>;
  }

  const { tripId } = await params;
  const trip = await prisma.trip.findFirst({
    where: { id: tripId, userId: session.user?.id },
  });
}
