import { useState } from 'react';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = () => setMenuOpen(false);

    return (
        <header className='padding-x py-3 fixed top-0 z-50 w-full bg-[#f9dca4]/90 shadow-sm backdrop-blur-md'>
            <nav className="flex justify-between items-center max-container relative">
                {/* Left: Name */}
                <a href="#hero" className="font-montserrat text-2xl font-bold tracking-tight text-slate-900">
                    JAYITA SADANI
                </a>

                {/* Desktop Navigation */}
                <ul className="flex items-center gap-8 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="nav-link">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <button
                    className="hidden max-lg:block p-1"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <img src={hamburger} alt="Menu" width={26} height={26} />
                </button>
            </nav>

            {/* Mobile Dropdown — outside nav, spans full header width */}
            <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
                {navLinks.map((item) => (
                    <a key={item.label} href={item.href} onClick={handleNavClick}>
                        {item.label}
                    </a>
                ))}
            </div>
        </header>
    );
};

export default Nav;