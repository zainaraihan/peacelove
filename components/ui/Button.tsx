import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    className = '', ...props
}: ButtonProps) {

    const baseStyle = "inline-flex items-center px-[14px] py-[10px] font-sans"
    const variants: Record<'primary' | 'secondary', string> = {
        primary: "bg-brand-secondary text-brand-white hover:bg-brand-primary hover:text-brand-white",
        secondary: "bg-brand-primary text-brand-white hover:bg-brand-white hover:text-brand-primary"
    }

    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}
