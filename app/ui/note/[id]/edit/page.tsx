'use client'
import { FormEvent, useEffect, useState } from "react"
import { useRouter } from 'next/navigation'

export default function Page({ params }: {
    params: {
        id: string
    }
}){
    const [title, setTitle] = useState<string>("")
    const [note, setNote] = useState<string>("")
    const router = useRouter();
    
    const load = () => {
        fetch(`/api/note/${params.id}`).then(res => {
            return res.json()
        }).then( data => {
            setTitle(data.note.title)
            setNote(data.note.note)
        })
    }

    useEffect(() => {
        load()
    }, [])

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        let result = {};
        fetch(`/api/note/${params.id}`,{
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title,
                note,
            })
        }).then(res => {
            return res.json();
        }).then((data) => {
            if(data.message == "ok"){
                window.location.href = `/ui/note/${params.id}`
            }
        }).catch(e => console.log(e))
    }

    return(
        <>
            <h1 className="text-3xl my-4">Edit</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-rose-500 p-4 rounded-lg">
                <input type="text" className="border-2 rounded-lg p-1" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea value={note} className="border-2 rounded-lg p-1 resize-none" rows={10} cols={50} onChange={(e) => setNote(e.target.value)}/>
                <div className="flex justify-end">
                    <input className="cursor-pointer hover:bg-rose-700 p-2 rounded-lg duration-500" type="submit" value="Save"/>
                </div>
            </form>
        </>
    )
}