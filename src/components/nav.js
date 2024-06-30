import Link from 'next/link'
import styles from "@/styles/components.module.css"

export default function Navbar() {
    return (
      <main>
        <ul className={styles.navi}>
          <li className={styles.navi_left}><b><Link href="/">JY</Link></b></li>
          <li><b><Link href="/blog">Blog</Link></b></li>
          <li><b><Link href="/resume">Resume</Link></b></li>
          <li><b><Link href="/projects">Projects</Link></b></li>
          <li><b><Link href="/about">About</Link></b></li>
        </ul>
      </main>
    );
  }