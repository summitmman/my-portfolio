'use client';
import Link from 'next/link';
import style from './Header.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
// import { FaBars } from 'react-icons/fa6';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMobileMenu = (state: boolean) => {
        if (state)
            document.body.style.overflow = 'hidden';
        else
            document.body.style.overflow = 'auto';
        setShowMenu(state);
    };
    const path = usePathname();
    
    useEffect(() => {
        toggleMobileMenu(false);
    }, [path]);

    return (
        <header className={style.header}>
            <nav className="my-container grid sm:grid-cols-3 grid-cols-2">
                <Link href="/"><Image src="/keyboard.png" alt='logo' width={30} height={30} /></Link>
                <ul className={`${style.menu} ${showMenu ? style.mobileMenu : ''}`}>
                    <li><Link href="/" className={path === '/' ? style.active : ''}>Home</Link></li>
                    <li><Link href="/about" className={path === '/about' ? style.active : ''}>About</Link></li>
                    <li><Link href="/projects" className={path === '/projects' ? style.active : ''}>Projects</Link></li>
                    <li><Link href="/blog" className={path === '/blog' ? style.active : ''}>Blog</Link></li>
                </ul>
                {/* <span className="flex sm:hidden justify-end text-lg header-text-color"><FaBars /></span> */}
                <span className="flex sm:hidden justify-end header-text-color">
                    <label className={`flex ${style.menuIcon}`} htmlFor="check">
                        <input type="checkbox" id="check" checked={showMenu} onChange={() => toggleMobileMenu(!showMenu)} />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </span>
            </nav>
        </header>
    );
};

export default Header;