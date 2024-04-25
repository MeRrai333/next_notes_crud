'use client'
import { FormEvent } from "react"


export default function Page(){

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const res = await fetch("/api/add",{
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                title: formData.get("title"),
                note: formData.get("note"),
            })
        })
        if(res.status == 200)
            window.location.href = "/ui"
    }

    return(
        <div>
            <h1 className="text-3xl">ADD</h1>
            <form className="flex flex-col items-center w-auto mx-64" onSubmit={submitForm}>
                <label className="w-full">Title</label>
                <input type="text" name="title" maxLength={30} className="border-2 w-full"/>
                <label className="w-full mt-4">Note</label>
                <textarea name="note" className="border-2 resize-none w-full" rows={6}/>
                <div className="w-full mt-4 flex justify-end">
                    <button type="submit" className="p-2 bg-emerald-500 hover:bg-emerald-700 duration-500 rounded-lg">Submit</button>
                </div>
            </form>
        </div>
    )
}