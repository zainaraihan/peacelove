import React from 'react'

interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'small'
    children: React.ReactNode
    className?: string
}

export default function Typography({
    variant = 'p',
    children,
    className = ''
}: TypographyProps) {
    const variants = {
        h1: "text-[42px] md:text-[96px] lg:text-[96px] font-medium text-brand-secondary",
        h2: "text-[24px] md:text-[42px] lg:text-[42px] font-medium text-brand-secondary",
        h3: "text-[24px] md:text-[24px] lg:text-[24px] font-medium text-brand-secondary",
        h4: "text-[16px] md:text-[24px] lg:text-[24px] font-medium text-brand-secondary",
        p: "text-[16px] md:text-[18px] lg:text-[18px] font-medium text-brand-secondary",
        small: "text-[14px] md:text-[16px] lg:text-[16px] font-medium text-brand-secondary",
    }
}