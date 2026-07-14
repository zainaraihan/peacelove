"use client";

import { useState } from 'react';
import Container from "./Container";
import Button from '../ui/Button';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LocaleSwitcher from './LocaleSwitcher';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('Navbar');

    const menuItems = [
        { name: t('about'), href: "/about" },
        { name: t('opportunity'), href: "/opportunity" },
        { name: t('services'), href: "/services" },
        { name: t('contact'), href: "/contact" },
    ];

    return (
        <nav className="bg-brand-white sticky top-0 z-50 font-sans">
            <Container className='flex items-center justify-between h-20'>
                <div className="text-2xl font-bold text-brand-secondary">
                    <Link href="/">
                        <img src="/logo.svg?v=2" className="md:w-[193px]" alt="Peace & Love Logo" />
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-5 lg:gap-15">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="text-small text-brand-secondary hover:text-brand-secondary/30 font-medium transition-colors">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className='hidden md:flex items-center gap-10'>
                    <a className='text-small text-brand-primary hover:text-brand-secondary/30 font-medium transition-colors' href="https://twmember.bouleglobal.com/PnL/PnLMarketplace">
                        {t('mall')}
                    </a>
                    <Button className='flex flex-col w-full items-center'>
                        <a className='px-2' href="https://login.pnl-intl.com/Login_m.aspx">{t('login')}</a>
                    </Button>
                    <LocaleSwitcher />
                </div>

                <div className="flex md:hidden items-center gap-4">
                    <LocaleSwitcher />
                    <button onClick={() => setIsOpen(!isOpen)} className='p-2 text-brand-secondary focus:outline-none' aria-label="Toggle Menu">
                        {isOpen ? (
                            <img src="/x.svg?v=2" alt="Close Menu" />
                        ) : (
                            <img src="/burger.svg?v=2" alt="Open Menu" />
                        )}
                    </button>
                </div>
            </Container>
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-brand-white md:hidden flex flex-col  animate-fadeIn">
                    <div className="flex items-center justify-end h-20">
                        <button onClick={() => setIsOpen(false)} className='text-brand-secondary focus:outline-none pr-6' aria-label="Close Menu">
                            <img src="/x.svg?v=2" alt="Close Menu" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-grow gap-8">
                        <a className='text-h3 font-semibold text-brand-primary hover:text-brand-secondary/60 transition-colors' href="https://twmember.bouleglobal.com/PnL/PnLMarketplace">
                            {t('mall')}
                        </a>
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-h3 font-semibold text-brand-secondary hover:text-brand-secondary/60 transition-colors">
                                {item.name}
                            </Link>
                        ))}
                        <Button>
                            <a
                                href="https://login.pnl-intl.com/Login_m.aspx"
                                onClick={() => setIsOpen(false)}
                                className="text-[20px] font-thin text-white hover:text-brand-secondary/60 transition-colors px-3 py-1">
                                {t('login')}
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}