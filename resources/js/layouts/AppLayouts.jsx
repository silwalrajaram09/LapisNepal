import React from "react";
import { Link, usePage } from "@inertiajs/react";
import WhatsAppButton from "../Components/WhatsAppButton";
import useSmoothScroll from "../../hooks/useSmoothScroll";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
export default function AppLayout({ children }) {
    useSmoothScroll();
    const { url } = usePage();
    const { t, i18n } = useTranslation();
    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Courses", href: "/courses" },
        { label: "Licenses", href: "/licenses" },
        { label: "Staff", href: "/staff" },
        { label: "Timetable", href: "/timetable" },
        { label: "Contact", href: "/contact" },
    ];
    // const [toggle ,setToggle] = React.useState(false)
    const toggleLanguage = () => {
        const currentLang = i18n.language;
        const newLang = currentLang === "en" ? "日本語" : "en";
        i18n.changeLanguage(newLang); // ✅ FIXED
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar max-w-5xl mx-auto px-6 py-16 grid grid-cols-2 gap-12 items-center*/}
            <nav className=" px-16 py-10 sticky top-0 z-50 bg-white border-b border-gray-100 h-15 flex items-center justify-between  ">
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 fill-white" viewBox="0 0 20 20">
                            <path d="M10 2L2 7v6l8 5 8-5V7L10 2zm0 2.5L16 8l-6 3.75L4 8l6-3.5z" />
                        </svg>
                    </div>
                    <div>
                        <div className="text-2xl font-bold leading-tight">
                            Lapis Nepal
                        </div>
                        <div className="text-[11px] text-gray-400">
                            Study Abroad/Japan &amp; Language Institute
                        </div>
                    </div>
                </Link>

                <ul className="flex gap-6 list-none">
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

                <div className="flex items-center gap-3">
                    {/* // Language toggle (for demonstration, toggles between English and Japanese) */}
                    <button
                        onClick={toggleLanguage}
                        className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        {i18n.language === "en" ? "日本語" : "EN"}
                    </button>
                    {/* <span className="text-xs text-gray-400 hidden lg:block">
                        9805682958
                    </span> */}
                    <Link
                        href="/contact"
                        className="bg-blue-700 text-white text-[13px] font-medium px-4 py-1.5 rounded-lg"
                    >
                        Apply now
                    </Link>
                </div>
            </nav>

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
                                { label: "Our staff", href: "/staff" },
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
