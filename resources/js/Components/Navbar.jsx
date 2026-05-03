import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { useTranslation } from 'react-i18next';
// import route from 'ziggy-js';

const Navbar = () => {
    const {t}= useTranslation()
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const { url } = usePage();

    const navigation = [
        { name: "Home", href: '/', subItems: [] },
        {
            name: "About",
            href: '/about',
            subItems: [
                { name: "Company Profile", href: '/about/profile' },
                { name: "Staff", href: '/about/staff' },
                { name: "Owner Message", href: '/about/owner-message' },
                { name: "Administrative", href: '/about/administrative' },
            ],
        },
        {
            name: "Courses",
            href: '/courses',
            subItems: [
                { name: "Japanese Language", href: '/courses/japanese' },
                { name: "SSW", href: '/courses/ssw' },
                { name: "TITP", href: '/courses/titp' },
                { name: "Internship", href: '/courses/internship' },
            ],
        },
        { name: "Licenses", href: '/licenses', subItems: [] },
        { name: "Timetable", href: '/timetable', subItems: [] },
        { name: "Contact", href: '/contact', subItems: [] },
    ];

    const isActive = (href) => {
        return url === href || url.startsWith(href + "/");
    };

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="shrink-0 flex items-center">
                            <img
                                className="h-8 w-auto"
                                src="/logo.png"
                                alt="Logo"
                            />
                            <span className="ml-2 text-xl font-bold text-gray-800">
                                LapisNepal
                            </span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    isActive(item.href)
                                        ? "bg-indigo-100 text-indigo-700"
                                        : "text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                                        isActive(item.href)
                                            ? "bg-indigo-100 text-indigo-700"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                {item.subItems.length > 0 && (
                                    <div className="pl-6 ml-4 space-y-1 border-l-2 border-indigo-200">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block px-3 py-1 rounded text-sm text-gray-600 hover:bg-gray-100"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                ↳ {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
