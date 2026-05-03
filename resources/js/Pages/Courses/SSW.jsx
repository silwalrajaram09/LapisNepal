import { Link, Head } from "@inertiajs/react";
import AppLayout from "@/layouts/AppLayouts";

export default function SSW() {
    return (
        <AppLayout>
            <Head title="SSW Curriculum" />

            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-10">
                <div className="max-w-5xl mx-auto">
                    <p className="text-xs text-gray-400 mb-2">
                        Home ›{" "}
                        <Link href="/courses" className="hover:text-gray-600">
                            Courses
                        </Link>{" "}
                        ›<span className="text-gray-600"> SSW Programme</span>
                    </p>

                    <h1 className="text-2xl font-medium mb-2">
                        Specified Skilled Worker (SSW) Curriculum
                    </h1>

                    <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
                        A complete training program for working in Japan under
                        the SSW visa, combining Japanese language and
                        industry-specific skills.
                    </p>

                    <div className="flex gap-2 mt-3 flex-wrap">
                        {["SSW Visa", "N4 Level", "Job Placement Support"].map(
                            (c) => (
                                <span
                                    key={c}
                                    className="text-xs text-gray-500 bg-white border border-gray-100 px-3 py-1 rounded-full"
                                >
                                    {c}
                                </span>
                            ),
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-6 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 lg:gap-8">
                    {/* Left */}
                    <div>
                        <h2 className="text-base font-medium mb-4">
                            Curriculum modules
                        </h2>

                        <ul className="flex flex-col gap-3">
                            {[
                                {
                                    title: "Japanese Language Training",
                                    desc: "N4 level language skills required for daily work and communication",
                                },
                                {
                                    title: "Technical Skills Training",
                                    desc: "Industry-specific practical skills based on your chosen sector",
                                },
                                {
                                    title: "SSW Exam Preparation",
                                    desc: "Complete guidance and practice for passing the SSW exam",
                                },
                                {
                                    title: "Work Culture & Etiquette",
                                    desc: "Understanding Japanese workplace behavior and communication",
                                },
                                {
                                    title: "Safety & Regulations",
                                    desc: "Workplace safety rules and legal guidelines in Japan",
                                },
                            ].map((mod, i) => (
                                <li
                                    key={i}
                                    className="flex gap-3 items-start border border-gray-100 rounded-xl p-4"
                                >
                                    <span className="w-6 h-6 rounded-full bg-teal-50 text-teal-800 text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">
                                        {i + 1}
                                    </span>
                                    <div>
                                        <div className="text-sm font-medium">
                                            {mod.title}
                                        </div>
                                        <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                                            {mod.desc}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Sidebar */}
                    <div className="flex flex-col gap-3">
                        {/* Details */}
                        <div className="border border-gray-100 rounded-xl p-4">
                            <div className="text-xs font-medium text-gray-400 mb-3">
                                Programme details
                            </div>

                            <div className="mb-2">
                                <div className="text-[11px] text-gray-400">
                                    Target Level
                                </div>
                                <div className="text-sm">JLPT N4 or above</div>
                            </div>

                            <div className="mb-2">
                                <div className="text-[11px] text-gray-400">
                                    Eligibility
                                </div>
                                <div className="text-sm">
                                    High school graduate
                                </div>
                            </div>

                            <div>
                                <div className="text-[11px] text-gray-400">
                                    Outcome
                                </div>
                                <div className="text-sm">
                                    Work in Japan (SSW Visa)
                                </div>
                            </div>
                        </div>

                        {/* Target Industries */}
                        <div className="border border-gray-100 rounded-xl p-4">
                            <div className="text-xs font-medium text-gray-400 mb-3">
                                Target industries
                            </div>

                            {[
                                "Nursing Care",
                                "Agriculture",
                                "Construction",
                                "Food Industry",
                                "Fisheries",
                                "Cleaning Services",
                            ].map((ind) => (
                                <div
                                    key={ind}
                                    className="text-xs text-gray-500 border border-gray-100 rounded-lg px-3 py-2 mb-2"
                                >
                                    {ind}
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                            <div className="text-sm font-medium text-teal-900 mb-1">
                                Start your career in Japan
                            </div>
                            <div className="text-xs text-teal-600 mb-3">
                                Apply now or contact us for guidance
                            </div>

                            <Link
                                href="/contact"
                                className="block text-center bg-teal-700 text-white text-sm font-medium py-2 rounded-lg"
                            >
                                Apply now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
