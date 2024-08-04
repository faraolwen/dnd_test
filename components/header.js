import Link from 'next/link'
import styles from '@/components/Header.module.css'
import Image from "next/image"

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
        <a href="/"><Image src="/myojohive_logo.png" alt="myojo"  width={50} height={50} /></a>
        <a href="/">moriyuki hive</a>
      </nav>

            Header here
        </header>
    )
}