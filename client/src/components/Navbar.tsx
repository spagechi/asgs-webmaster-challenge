import { useState, useEffect } from 'react';
import type { Size } from '@/utils/general';
import {useWindowSize} from '@/utils/general';
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';

const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
    { href: "/work", label: "WORK" },
] as const;

const Navbar = () => {
    const size: Size = useWindowSize();

    // size.width !== undefined determines whether the viewport has rendered yet
    const mobile = size.width !== undefined && size.width < 640;

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    // close the mobile menu if no longer within mobile viewport width
    useEffect(() => {
        if (!mobile) setMenuOpen(false);
    }, [mobile]);

    return (
        <header className="flex justify-between items-center h-34 pr-11 pl-12 bg-[#00588C] text-white">
            <span className="text-xl">LOREM IPSUM</span>
            <nav className="hidden sm:flex gap-12 ml-8">
                {navLinks.map((link, key) => (
                    <a key={key} href={link.href}>
                        {link.label}
                    </a>
                ))}
            </nav>
            <button onClick={toggleMenu} className="sm:hidden">
                {menuOpen ? <Close /> : <Menu />}
            </button>
        </header>
    );
};

export default Navbar;