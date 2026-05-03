import React from "react";
import { Link, usePage } from "@inertiajs/react";
import WhatsAppButton from "../Components/WhatsAppButton";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../Components/LanguageSwitcher";

import { useState } from "react";

export default function AppLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    useSmoothScroll();
    const { url } = usePage();
    const { t, i18n } = useTranslation();
    const navLinks = [
        { label: t("nav.home"), href: "/" },
        { label: t("nav.about"), href: "/about" },
        { label: t("nav.courses"), href: "/courses" },
        { label: t("nav.licenses"), href: "/licenses" },
        // { label: t("nav.staff"), href: "/staff" },
        { label: t("nav.timetable"), href: "/timetable" },
        { label: t("nav.contact"), href: "/contact" },
    ];
    // const [toggle ,setToggle] = React.useState(false)

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar max-w-5xl mx-auto px-6 py-16 grid grid-cols-2 gap-12 items-center*/}
            <nav className="px-4 md:px-6 lg:px-16 py-4 md:py-6 lg:py-10 sticky top-0 z-50 bg-white border-b border-gray-100 flex items-center justify-between h-14 md:h-16 lg:h-[80px] shadow-sm">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                            <path d="M10 2L2 7v6l8 5 8-5V7L10 2zm0 2.5L16 8l-6 3.75L4 8l6-3.5z" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-xl md:text-2xl font-bold leading-tight">
                            {t("nav.logo-text")}
                        </div>
                        <div className="text-[11px] text-gray-400">
                            {t("tagline")}
                        </div>
                    </div>
                </Link>

                <ul className="hidden md:flex gap-4 lg:gap-6 list-none">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-[13px] transition-colors ${
                                    url === link.href
                                        ? "text-gray-900 font-medium border-b-2 border-blue-700 pb-0.5"
                                        : "text-gray-500 hover:text-gray-900"
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2 md:gap-3">
                    <LanguageSwitcher />
                    <Link
                        href="/contact"
                        className="bg-blue-700 text-white text-xs md:text-[13px] font-medium px-3 md:px-4 py-1.5 md:py-1.5 rounded-lg whitespace-nowrap hidden sm:block"
                    >
                        {t("apply")}
                    </Link>
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="md:hidden p-1.5 -mr-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 shadow-lg">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-sm md:text-[13px] font-medium transition-colors border-b border-gray-100 last:border-b-0 hover:bg-gray-50 focus:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="block w-full bg-blue-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg text-center mt-3"
                            onClick={() => setIsOpen(false)}
                        >
                            {t("apply")}
                        </Link>
                    </div>
                </div>
            )}

            {/* Page content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            <footer className="border-t border-gray-100 bg-white pt-8 pb-4 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-4 gap-8 mb-6">
                    <div>
                        <div className="text-sm font-medium mb-2">
                            Lapis Nepal Consultancy
                        </div>
                        <div className="text-xs text-gray-400 leading-relaxed">
                            Study abroad &amp; language institute
                            <br />
                            Kathmandu, Nepal · Est. 2014
                        </div>
                    </div>
                    {[
                        {
                            heading: "Programmes",
                            links: [
                                {
                                    label: "Japanese language",
                                    href: "/courses/japanese",
                                },
                                {
                                    label: "SSW curriculum",
                                    href: "/courses/ssw",
                                },
                                {
                                    label: "TITP curriculum",
                                    href: "/courses/titp",
                                },
                                {
                                    label: "Internship",
                                    href: "/courses/internship",
                                },
                            ],
                        },
                        {
                            heading: "Company",
                            links: [
                                { label: "About us", href: "/about" },
                                { label: "Courses", href: "/courses" },
                                { label: "Licenses", href: "/licenses" },
                                { label: "Timetable", href: "/timetable" },
                            ],
                        },
                        {
                            heading: "Contact",
                            links: [
                                { label: "9805682958", href: "tel:9805682958" },
                                {
                                    label: "WhatsApp (students)",
                                    href: "https://wa.me/9779805682958",
                                },
                                {
                                    label: "Nepal office",
                                    href: "/contact#nepal",
                                },
                                {
                                    label: "Japan office",
                                    href: "/contact#japan",
                                },
                            ],
                        },
                    ].map((col) => (
                        <div key={col.heading}>
                            <div className="text-xs font-medium text-gray-500 mb-2">
                                {col.heading}
                            </div>
                            <ul className="flex flex-col gap-1.5">
                                {col.links.map((l) => (
                                    <li key={l.href}>
                                        <Link
                                            href={l.href}
                                            className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
                                        >
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="max-w-5xl mx-auto border-t border-gray-100 pt-4 flex justify-between">
                    <span className="text-[11px] text-gray-300">
                        © 2025 Lapis Nepal Consultancy. All rights reserved.
                    </span>
                    <span className="text-[11px] text-gray-300">
                        Licensed by MoE Nepal &amp; Japan
                    </span>
                </div>
                <WhatsAppButton />
            </footer>
        </div>
    );
}
