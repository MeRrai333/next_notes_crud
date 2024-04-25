import Link from "next/link"

export default function Navbar(){
    const navLinkClassName  : string = "p-2 hover:bg-rose-700"
    return(
        <nav className="p-1 mb-2 bg-rose-500 grid grid-cols-12 gap-2 text-center text-lg">
            <Link href="/ui" className={navLinkClassName}>Home</Link>
            <Link href="/ui/add" className={navLinkClassName}>Add</Link>
        </nav>
    )
}