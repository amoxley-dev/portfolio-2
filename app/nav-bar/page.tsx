import Link from "next/link";

export default function NavBar() { 
    const navLinks: string[][] = [
        ["About", "/about"],
        ["Projects", "/projects"],
        ["Resume", "/resume"]
    ];
    
    return (
        <header className="h-20 w-full flex items-center justify-between">
            <h1 className="mx-6">
                <Link href="/" className="text-slate-100">Alex Moxley</Link>
            </h1>
            <ul className="flex">
                {navLinks.map(([name, path]) => (
                    <li className="mx-6 text-purple-300 hover:text-purple-100 hover:bg-purple-50 hover:bg-opacity-5 text-center border-2 rounded-tl-2xl rounded-br-2xl border-violet-800 hover:border-violet-500 w-32 max-w-full bg-inherit bg-clip-padding">
                        <Link className="max-h-full max-w-full p-2 block cursor-pointer" href={path}>{name}</Link>
                    </li>
                ))}
            </ul>
        </header>
    )
} 