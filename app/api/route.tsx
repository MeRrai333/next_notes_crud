import prisma from "../../lib/prisma"

export async function GET(request: Request) {
    const notes = await prisma.notes.findMany({
        orderBy: {
            id: 'asc'
        }
    });
    return Response.json(notes)
}

export const revalidate = 3; 