"use client";

import { useState } from 'react';
import Container from "./Container";
import Button from '../ui/Button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Opportunity", href: "/opportunity" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="bg-brand-white sticky top-0 z-50 font-sans">
            <Container className='flex items-center justify-between h-20'>
                <div className="text-2xl font-bold text-brand-secondary">
                    <img src="./logo.svg?v=2" className="md:w-[193px]" alt="" />
                </div>

                <div className="hidden md:flex items-center gap-10 lg:gap-18">
                    {menuItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="w-full text-small text-brand-secondary hover:text-brand-secondary/30 font-medium transition-colors">
                            {item.name}
                        </a>
                    ))}
                    <Button className='flex flex-col w-full items-center'>
                        <a className='px-2' href="https://login.pnl-intl.com/Login_m.aspx">Login</a>
                    </Button>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className='p-2 md:hidden text-brand-secondary focus: outline-none' aria-label="Toggle Menu">
                    {isOpen ? (
                        <img src="./x.svg?v=2" alt="" />
                    ) : (
                        <img src="./burger.svg?v=2" alt="" />
                    )}
                </button>
            </Container>
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-brand-white md:hidden flex flex-col  animate-fadeIn">
                    <div className="flex items-center justify-end h-20">
                        <button onClick={() => setIsOpen(false)} className='text-brand-secondary focus:outline-none pr-6' aria-label="Close Menu">
                            <img src="./x.svg?v=2" alt="" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-grow gap-8">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-h3 font-semibold text-brand-secondary hover:text-brand-secondary/60 transition-colors">
                                {item.name}
                            </a>
                        ))}
                        <Button>
                            <a
                                href="https://login.pnl-intl.com/Login_m.aspx"
                                onClick={() => setIsOpen(false)}
                                className="text-h3 font-thin text-white hover:text-brand-secondary/60 transition-colors px-3 py-1">
                                Login
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}