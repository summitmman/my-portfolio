import style from './Header.module.css';
import Image from 'next/image';

const Header = () => {
    return (
        <header className={style.header}>
            <nav className="my-container grid sm:grid-cols-3 grid-cols-2">
                <Image src="/keyboard.png" alt='logo' width={30} height={30} />
                <div className="menu text-center">HOME ABOUT PROFILE BLOG</div>
            </nav>
        </header>
    );
};

export default Header;