import Link from "next/link"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function Notes(){
    let notes = await prisma.notes.findMany({
        orderBy: {
            id: 'asc'
        }
    })

    if(notes.length != 0)
        return(
            <div className="grid grid-cols-3 gap-3">
                {
                    notes.map((x, i: number) => {
                        return(
                            <div key={x.id} className="bg-rose-500 rounded-lg my-2 p-2">
                                <h2 className="text-xl">{x.title}</h2>
                                <p className="line-clamp-5 h-24">{x.note}</p>
                                <div className="flex justify-end mt-2 h-full">
                                    <Link href={`/ui/note/${x.id}`} className="hover:font-bold duration-500">Read more</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )

    return (
        <div className="text-center my-4">
            Database is emtry
        </div>
    )
}