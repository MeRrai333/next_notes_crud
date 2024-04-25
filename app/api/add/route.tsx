import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request){
    const dataPost = await req.json();
    const dataPrisma = await prisma.notes.create({
        data: {
            title: dataPost.title,
            note: dataPost.note,
        }
    })
    return Response.json({
        dataPrisma
    })
}