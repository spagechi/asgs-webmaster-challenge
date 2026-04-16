const navLinks = [
    { href: "mailto:avpconcerts@ucsd.edu", label: "EMAIL" },
    { href: "/", label: "RESUME" },
    { href: "https://www.instagram.com/ucsdasce/", label: "INSTAGRAM" },
    { href: "https://www.linkedin.com/company/ucsd-associated-students-concerts-and-events", label: "LINKEDIN" },
] as const;

const Footer = () => {
    return (
        <footer className="flex justify-between items-center h-34 pr-11 pl-12 bg-[#00588C] text-white">
            <span>MADE WITH ♡ BY A.S. GRAPHIC STUDIO</span>
            <div className="grid sm:flex grid-cols-[auto_1fr] gap-x-10 gap-y-1 sm:gap-12 shrink-0 ml-8 max-sm:text-sm">
                {navLinks.map((link, key) => (
                    <a key={key} href={link.href} className="hover:underline">
                        {link.label}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;