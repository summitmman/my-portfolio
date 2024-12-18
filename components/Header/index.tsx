import Link from 'next/link';
import style from './Header.module.css';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa6';

const Header = () => {
    return (
        <header className={style.header}>
            <nav className="my-container grid sm:grid-cols-3 grid-cols-2">
                <Image src="/keyboard.png" alt='logo' width={30} height={30} />
                <ul className="hidden sm:flex menu text-center uppercase gap-4 text-sm justify-center">
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">About</Link></li>
                    <li><Link href="#">Profile</Link></li>
                    <li><Link href="#">Blog</Link></li>
                </ul>
                <span className="flex sm:hidden justify-end"><FaBars /></span>
            </nav>
        </header>
    );
};

export default Header;