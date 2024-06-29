import Link from 'next/link'

export default function Navbar() {
    return (
      <main>
        <ul className="navi">
          <li className="navi-left"><b><Link href="/">JY</Link></b></li>
          <li><b><Link href="/blog">Blog</Link></b></li>
          <li><b><Link href="/resume">Resume</Link></b></li>
          <li><b><Link href="/projects">Projects</Link></b></li>
          <li><b><Link href="/about">About</Link></b></li>
        </ul>
      </main>
    );
  }