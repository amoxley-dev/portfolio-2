import Link from "next/link"

export default function NavBar() { 
    return (
        <header>
            <div>
                <Link href="/">Alex Moxley</Link>
            </div>
            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/resume">Resume</Link>
                </li>
            </ul>
        </header>
    )
} 