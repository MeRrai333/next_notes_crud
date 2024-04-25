'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

interface Note {
    id: Number
    title: string
    note: string
    createAt: Date
    updateAt: Date
}

export default function Page({
    params }: {
        params: {
            id: string
        }
    }){
    const [note, setNote] = useState<Note | undefined>();

    useEffect(() => {
        fetch(`/api/note/${params.id}`).then( res => {
            return res.json();
        }).then(data => {
            setNote(data.note)
        }).catch(e => console.log(e))
    }, [])

    const removeBtn = (e: React.SyntheticEvent) => {
        if(window.confirm("Are you sure?")){
            fetch(`/api/note/${params.id}`, {
                method: "delete",
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(res => res.json()).then((data) => {
                if(data.message == true)
                    window.location.href = '/ui'
            }).catch(e => console.log(e))
        }
    }
    
    if(note)
    return(
        <>
            <div className="flex flex-col bg-rose-500 rounded-lg p-4">
                <h2 className="text-2xl">{note.title}</h2>
                <p>{note.note}</p>
                <div className="flex justify-end gap-x-4">
                    <Link href={`/ui/note/${params.id}/edit`}>
                        <svg className="p-1 bg-rose-500 hover:bg-rose-700 duration-500 rounded-lg" width="36" height="36" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </Link>
                    <button onClick={removeBtn}>
                        <svg className="p-1 bg-rose-500 hover:bg-rose-700 duration-500 rounded-lg" width="36" height="36" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />  <line x1="18" y1="9" x2="12" y2="15" />  <line x1="12" y1="9" x2="18" y2="15" /></svg>
                    </button>
                </div>
            </div>
        </>
    )
}