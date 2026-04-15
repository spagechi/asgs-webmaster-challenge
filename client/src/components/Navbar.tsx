const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
    { href: "/work", label: "WORK" },
] as const;

const Navbar = () => {
    return (
        <header className="flex justify-between items-center h-34 pr-11 pl-12 bg-[#00588C] text-white">
            <span className="text-xl">LOREM IPSUM</span>
            <nav className="flex gap-12">
                {navLinks.map((link, key) => (
                    <a key={key} href={link.href}>
                        {link.label}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;