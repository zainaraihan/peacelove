import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
    return (
        <div className={` px-[18px] md:px-[3vw] xl:px-[48px] ${className}`}>
            {children}
        </div>
    )
}