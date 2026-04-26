import React from "react";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Company Name</h3>
                        <p className="text-gray-300 mb-4">
                            Your trusted partner for study abroad programs and
                            professional training.
                        </p>
                        <div className="space-y-2 text-sm">
                            <p>Phone: +81-XXX-XXX-XXXX</p>
                            <p>Email: info@company.com</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href='/'
                                    className="hover:text-indigo-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/courses'
                                    className="hover:text-indigo-400"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/contact'
                                    className="hover:text-indigo-400"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Courses</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href='/courses/japanese'
                                    className="hover:text-indigo-400"
                                >
                                    Japanese Language
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/courses/ssw'
                                    className="hover:text-indigo-400"
                                >
                                    SSW
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/courses/titp'
                                    className="hover:text-indigo-400"
                                >
                                    TITP
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href='/licenses'
                                    className="hover:text-indigo-400"
                                >
                                    Licenses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="hover:text-indigo-400"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="hover:text-indigo-400"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                    <p>&copy; 2024 Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
