import prisma from "../../../../lib/prisma"


export async function GET(req: Request, {params} : {params: {id: string}}){
    const note = await prisma.notes.findUnique({
        where: {
            id: Number(params.id)
        }
    })

    return  Response.json({note})
}

export async function PUT(req: Request, {params} : {params: {id: string}}){
    const dataPut = await req.json();
    const dataUpdate = await prisma.notes.update({
        data: {
            title: dataPut.title,
            note: dataPut.note
        },
        where: {
            id: Number(params.id)
        }
    })

    return Response.json({dataUpdate, message: "ok"})
}

export async function DELETE(req: Request, {params} : {params: {id: string}}){
    const result = await prisma.notes.delete({
        where: {
            id: Number(params.id)
        }
    })
    return Response.json({message: result.id === Number(params.id)})
}