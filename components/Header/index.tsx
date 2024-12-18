import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <nav className="my-container grid sm:grid-cols-3 grid-cols-2">
                <div className="logo">Logo</div>
                <div className="menu text-center">HOME ABOUT PROFILE BLOG</div>
            </nav>
        </header>
    );
};

export default Header;