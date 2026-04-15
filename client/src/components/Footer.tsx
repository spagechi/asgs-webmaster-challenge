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
            <div className="flex gap-12">
                {navLinks.map((link, key) => (
                    <a key={key} href={link.href}>
                        {link.label}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;