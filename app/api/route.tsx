import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const notes = await prisma.notes.findMany();
    return Response.json(notes)
}