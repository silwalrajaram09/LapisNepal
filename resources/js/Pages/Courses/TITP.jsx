import { Link, Head } from "@inertiajs/react";
import AppLayout from "@/layouts/AppLayouts";

export default function TITP() {
    return (
        <AppLayout>
            <Head title="TITP Curriculum" />

            {/* Header */}
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-10">
                <div className="max-w-5xl mx-auto">
                    <p className="text-xs text-gray-400 mb-2">
                        Home ›{" "}
                        <Link href="/courses" className="hover:text-gray-600">
                            Courses
                        </Link>{" "}
                        ›<span className="text-gray-600"> TITP Programme</span>
                    </p>

                    <h1 className="text-2xl font-medium mb-2">
                        Technical Intern Training Program (TITP)
                    </h1>

                    <p className="text-sm text-gray-500 max-w-lg leading-relaxed">
                        A structured program to gain technical skills and
                        real-world work experience in Japan through training and
                        internships.
                    </p>

                    <div className="flex gap-2 mt-3 flex-wrap">
                        {[
                            "3–5 Year Track",
                            "Technical Skills",
                            "Japan Internship",
                        ].map((c) => (
                            <span
                                key={c}
                                className="text-xs text-gray-500 bg-white border border-gray-100 px-3 py-1 rounded-full"
                            >
                                {c}
                            </span>
                        ))}
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
                                    title: "Phase 1 (Year 1)",
                                    desc: "Japanese language training and basic technical skills",
                                },
                                {
                                    title: "Phase 2 (Year 2)",
                                    desc: "Advanced technical training with practical experience",
                                },
                                {
                                    title: "Phase 3 (Year 3)",
                                    desc: "Specialized skills development and evaluation",
                                },
                                {
                                    title: "Workplace Training",
                                    desc: "On-the-job training with Japanese companies",
                                },
                                {
                                    title: "Safety & Culture",
                                    desc: "Workplace safety and Japanese work culture training",
                                },
                            ].map((mod, i) => (
                                <li
                                    key={i}
                                    className="flex gap-3 items-start border border-gray-100 rounded-xl p-4"
                                >
                                    <span className="w-6 h-6 rounded-full bg-amber-50 text-amber-800 text-xs font-medium flex items-center justify-center shrink-0 mt-0.5">
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
                                    Duration
                                </div>
                                <div className="text-sm">3–5 years</div>
                            </div>

                            <div className="mb-2">
                                <div className="text-[11px] text-gray-400">
                                    Age
                                </div>
                                <div className="text-sm">18–35 years</div>
                            </div>

                            <div>
                                <div className="text-[11px] text-gray-400">
                                    Outcome
                                </div>
                                <div className="text-sm">
                                    Technical Internship in Japan
                                </div>
                            </div>
                        </div>

                        {/* Fields */}
                        <div className="border border-gray-100 rounded-xl p-4">
                            <div className="text-xs font-medium text-gray-400 mb-3">
                                Available fields
                            </div>

                            {[
                                "Agriculture & Fishery",
                                "Construction",
                                "Food Manufacturing",
                                "Metal & Machinery",
                                "Textile & Clothing",
                            ].map((field) => (
                                <div
                                    key={field}
                                    className="text-xs text-gray-500 border border-gray-100 rounded-lg px-3 py-2 mb-2"
                                >
                                    {field}
                                </div>
                            ))}
                        </div>

                        {/* Requirements */}
                        <div className="border border-gray-100 rounded-xl p-4">
                            <div className="text-xs font-medium text-gray-400 mb-3">
                                Eligibility
                            </div>

                            {[
                                "Age 18–35",
                                "High school graduate",
                                "Basic Japanese",
                                "Good health",
                                "No criminal record",
                            ].map((req) => (
                                <div
                                    key={req}
                                    className="text-xs text-gray-500 mb-1"
                                >
                                    • {req}
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                            <div className="text-sm font-medium text-amber-900 mb-1">
                                Become a technical intern in Japan
                            </div>
                            <div className="text-xs text-amber-600 mb-3">
                                Apply now or contact us for guidance
                            </div>

                            <Link
                                href="/contact"
                                className="block text-center bg-amber-700 text-white text-sm font-medium py-2 rounded-lg"
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
