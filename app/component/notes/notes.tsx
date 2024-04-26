'use client'
import Link from "next/link"
//import prisma from "../../../lib/prisma";
import { useEffect, useState } from "react"

interface note {
    id: number
    title: string
    note: string
}

export default function Notes(){
    /*let notes = await prisma.notes.findMany({
        orderBy: {
            id: 'asc'
        }
    })*/

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('/api',{
            next: { revalidate: 3}
        }).then(res => res.json()).then(data => {
            console.log(data)
            setNotes(data)
        }).catch(e => console.log(e))
    }, [])

    if(notes.length != 0)
        return(
            <div className="grid grid-cols-3 gap-3">
                {
                    notes.map((x: note, i: number) => {
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