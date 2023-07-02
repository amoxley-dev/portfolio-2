import Link from "next/link"

export default function NavBar() { 
    return (
        <header>
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