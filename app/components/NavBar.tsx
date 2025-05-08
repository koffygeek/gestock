import { Icon, ListTree, Menu, PackagePlus, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const NavBar = () => {
    const pathname = usePathname();
    const [menuOpen, setmenuOpen] = useState(false);

    const navLinks = [{ href: "/category", label: "Categories", icon: ListTree }];
    const renderLinks = (baseClass: string) => (
        <>
            {navLinks.map(({ href, label, icon: Icon }) => {
                const isActive = pathname === href;
                const activeClass = isActive ? "btn-primary" : "btn-ghost";
                return (
                    <Link
                        href={href}
                        key={href}
                        className={`${baseClass} ${activeClass} btn-sm flex gap-2 items-center `}
                    >
                        <Icon className="w-4 h-4" />
                        {label}
                    </Link>
                );
            })}
        </>
    );

    return (
        <div className="border-b border-base-300 px-5 md:px-[10%] py-4 relative">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="p-2">
                        <PackagePlus className="w-6 h-6 text-primary " />
                    </div>
                    <span className="font-bold text-xl">AssoStock</span>
                </div>

                <button
                    className="btn w-fit sm: btn-sm"
                    onClick={() => setmenuOpen(!menuOpen)}
                >
                    <Menu className="w-4 h-4 " />
                </button>

                <div className="hidden space-x-2 sm:flex items-center">
                    {renderLinks("btn")}
                </div>
            </div>

            <div
                className={`absolute top-0 w-full bg-base-100 h-screen flex flex-col gap-2 p-4 transition-all duration-300 sm:hidden z-50  ${menuOpen ? "left-0" : "-left-full"
                    }`}
            >
                <div className="flex justify-between">
                    <button
                        className="btn w-fit sm: btn-sm"
                        onClick={() => setmenuOpen(!menuOpen)}
                    >
                        <X className="w-4 h-4 " />
                    </button>
                </div>
                {renderLinks("btn")}
            </div>
        </div>
    );
};

export default NavBar;
