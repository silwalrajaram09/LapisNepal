import { Link } from "@inertiajs/react";
import AppLayout from "@/layouts/AppLayouts";
import { Head } from "@inertiajs/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// Shared variants
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

const staggerGrid = (stagger = 0.08, delay = 0) => ({
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

const cardVariant = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
};

export default function Home({ stats }) {
    const { t } = useTranslation();

    return (
        <AppLayout>
            <Head title="Home" />

            {/* ── Hero ───────────────────────────────────────────────── */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left copy — staggered children */}
                <motion.div
                    variants={staggerGrid(0.1)}
                    initial="hidden"
                    animate="show"
                >
                    <motion.span
                        variants={fadeUp}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-5"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                        {t("home.subtitle")}
                    </motion.span>

                    <motion.h1
                        variants={fadeUp}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-snug mb-4 md:mb-6"
                    >
                        {t("home.title")}{" "}
                        <span className="text-blue-700">{t("home.japan")}</span>{" "}
                        {t("home.starts-here")}
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-lg"
                    >
                        {t("home.description")}
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex gap-3"
                    >
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Link
                                href="/courses"
                                className="bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium inline-block"
                            >
                                {t("home.explore")}
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Link
                                href="/contact"
                                className="border border-gray-200 text-gray-800 px-5 py-2.5 rounded-lg text-sm inline-block"
                            >
                                {t("home.getInTouch")}
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right stats card — slides in from right */}
                <motion.div
                    className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col gap-3"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.55,
                        ease: "easeOut",
                        delay: 0.15,
                    }}
                >
                    <motion.div
                        className="grid grid-cols-2 gap-2 md:gap-3"
                        variants={staggerGrid(0.07, 0.3)}
                        initial="hidden"
                        animate="show"
                    >
                        {[
                            { num: "500+", label: "Students placed in Japan" },
                            { num: "4", label: "Programmes offered" },
                            { num: "10+", label: "Years of experience" },
                            { num: "3", label: "Official licenses" },
                        ].map((s) => (
                            <motion.div
                                key={s.label}
                                variants={cardVariant}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                                }}
                                className="bg-white border border-gray-100 rounded-lg p-3"
                            >
                                <div className="text-2xl font-medium text-blue-700">
                                    {s.num}
                                </div>
                                <div className="text-xs text-gray-400 mt-0.5">
                                    {s.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="bg-blue-50 rounded-lg p-3 flex items-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.65, duration: 0.4 }}
                    >
                        <div className="w-7 h-7 bg-blue-700 rounded-md flex items-center justify-center shrink-0">
                            <span className="text-white text-xs">★</span>
                        </div>
                        <div>
                            <div className="text-sm font-medium text-blue-900">
                                MoE licensed — Nepal &amp; Japan
                            </div>
                            <div className="text-xs text-blue-600">
                                {/* Sandee branch + Japan branch */}
                                Dual licensed by the Ministry of Education in both Nepal and Japan, including the branch-in-Nepal licence.
                            </div>
                        </div>
                    </motion.div>

                    <motion.p
                        className="text-xs text-gray-400 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.75, duration: 0.4 }}
                    >
                        WhatsApp: 9805682958 · Students only
                    </motion.p>
                </motion.div>
            </section>

            {/* ── Courses ────────────────────────────────────────────── */}
            <motion.section
                className="border-t border-gray-100 py-12 px-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
            >
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-baseline justify-between mb-8">
                        <h2 className="text-xl font-medium">Our programmes</h2>
                        <Link href="/courses" className="text-sm text-blue-700">
                            View all →
                        </Link>
                    </div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
                        variants={staggerGrid(0.09)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {[
                            {
                                name: "Japanese language",
                                desc: "Foundation to advanced Japanese.",
                                tag: "N5 → N1",
                                color: "blue",
                            },
                            {
                                name: "SSW curriculum",
                                desc: "Specified skilled worker track.",
                                tag: "Visa support",
                                color: "teal",
                            },
                            {
                                name: "TITP curriculum",
                                desc: "Technical intern training.",
                                tag: "Internship",
                                color: "amber",
                            },
                            {
                                name: "Internship",
                                desc: "Hotel, medical & general tracks.",
                                tag: "3 tracks",
                                color: "red",
                            },
                        ].map((c) => (
                            <motion.div
                                key={c.name}
                                variants={cardVariant}
                                whileHover={{
                                    y: -4,
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.07)",
                                    borderColor: "#d1d5db",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 280,
                                    damping: 20,
                                }}
                            >
                                <Link
                                    href="/courses"
                                    className="border border-gray-100 rounded-xl p-4 transition-colors block h-full"
                                >
                                    <div className="text-sm font-medium mb-1">
                                        {c.name}
                                    </div>
                                    <div className="text-xs text-gray-400 leading-relaxed">
                                        {c.desc}
                                    </div>
                                    <span className="inline-block mt-3 text-xs font-medium bg-blue-50 text-blue-800 px-2 py-0.5 rounded-full">
                                        {c.tag}
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* ── Why us ─────────────────────────────────────────────── */}
            <motion.section
                className="bg-gray-50 border-y border-gray-100 py-12 px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
            >
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        className="text-xl font-medium mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        Why choose us
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
                        variants={staggerGrid(0.1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {[
                            {
                                n: "01",
                                t: "Dual MoE licensed",
                                d: "Licensed by MoE in both Nepal and Japan, including the branch-in-Nepal licence.",
                            },
                            {
                                n: "02",
                                t: "Japan partnerships",
                                d: "Direct agreements under Meros, Project, SSW and TITP frameworks.",
                            },
                            {
                                n: "03",
                                t: "Experienced staff",
                                d: "Language instruction, visa counselling and post-arrival support.",
                            },
                        ].map((w) => (
                            <motion.div
                                key={w.n}
                                variants={cardVariant}
                                whileHover={{
                                    y: -3,
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 280,
                                    damping: 20,
                                }}
                                className="bg-white border border-gray-100 rounded-xl p-5"
                            >
                                <div className="text-2xl font-medium text-blue-700 mb-1">
                                    {w.n}
                                </div>
                                <div className="text-sm font-medium mb-2">
                                    {w.t}
                                </div>
                                <div className="text-xs text-gray-400 leading-relaxed">
                                    {w.d}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>
        </AppLayout>
    );
}
