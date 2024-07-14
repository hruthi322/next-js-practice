"use client";

import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot Password", href: "/forgot-password" }
];

export default function Authlayout({ children }: { children: React.ReactNode}) {
    const pathname = usePathname();
    const [input, setInput] = useState("");

    return(
        <div>
            <div className="m-3">
                <label className="mr-2"htmlFor="name">name</label>
                <input className="border-dashed border-2 border-indigo-600" id="name" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            </div>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)
                return(
                    <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>{link.name}</Link>
                ) 
})}
            {children}
        </div>
    )
}