import { NextRequest } from "next/server";
import prisma from "../../lib/prisma"
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
    const notes = await prisma.notes.findMany({
        orderBy: {
            id: 'asc'
        }
    });
    const path = request.nextUrl.searchParams.get('path') || '/';
    revalidatePath(path);
    return Response.json(notes)
}
