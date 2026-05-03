import { useState } from "react";
import { useForm, usePage, Head } from "@inertiajs/react";
import AppLayout from "@/layouts/AppLayouts";
import OfficeMap from "@/Components/OfficeMap";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

export default function Contact() {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        programme: "Japanese language",
        message: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/contact", { onSuccess: () => reset() });
    }
    // const heroSlides = [
    //   { image: '/images/contact-hero.jpg',
    //     breadcrumb: 'Home › Contact',
    //     title: 'Get in touch',
    //     subtitle: 'Reach our team in Kathmandu or Japan. WhatsApp is available for students only.',
    //   },
    //   { image: '/images/contact-hero2.jpg',
    //     breadcrumb: 'Home › Contact',
    //     title: 'Have questions?',
    //     subtitle: 'Our team is here to help. Contact us for personalized guidance on your Japan study abroad journey.',
    //   },

    // ]
    return (
        <AppLayout>
            <Head title="Contact" />
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 border-b border-gray-100 px-6 py-10"
            >
                <div className="max-w-5xl mx-auto">
                    <p className="text-xs text-gray-400 mb-2">Home › Contact</p>
                    <h1 className="text-2xl font-medium mb-2">Get in touch</h1>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Reach our team in Kathmandu or Japan. WhatsApp is
                        available for students only.
                    </p>
                </div>
            </motion.div>
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-2xl text-center font-bold mt-8"
            >
                Contact us
            </motion.h2>
            <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Form */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <h2 className="text-base font-medium mb-4">
                        Send us a message
                    </h2>

                    {flash?.success && (
                        <div className="mb-6 p-5 bg-green-50 border border-green-100 rounded-2xl flex items-start gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-sm">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-green-900 mb-0.5">
                                    Message Sent!
                                </h3>
                                <p className="text-xs text-green-700 leading-relaxed">
                                    {flash.success} Our team will get back to
                                    you shortly.
                                </p>
                            </div>
                        </div>
                    )}

                    <motion.form
                        variants={fadeUp}
                        onSubmit={submit}
                        className="border border-gray-100 rounded-xl p-5 flex flex-col gap-3"
                    >
                        {[
                            {
                                label: "Full name",
                                key: "name",
                                type: "text",
                                placeholder: "Your full name",
                            },
                            {
                                label: "Email address",
                                key: "email",
                                type: "email",
                                placeholder: "you@email.com",
                            },
                            {
                                label: "Phone number",
                                key: "phone",
                                type: "tel",
                                placeholder: "+977 98XXXXXXXX",
                            },
                        ].map((f) => (
                            <div key={f.key}>
                                <label className="block text-xs md:text-[11px] font-medium text-gray-400 mb-1.5">
                                    {f.label}
                                </label>
                                <input
                                    type={f.type}
                                    value={data[f.key]}
                                    onChange={(e) =>
                                        setData(f.key, e.target.value)
                                    }
                                    placeholder={f.placeholder}
                                    className="w-full text-sm px-4 py-2 border border-gray-200 rounded-lg focus:border-blue-500 outline-none bg-white text-base md:text-sm"
                                />
                                {errors[f.key] && (
                                    <p className="text-xs text-red-500 mt-1">
                                        {errors[f.key]}
                                    </p>
                                )}
                            </div>
                        ))}
                        <div>
                            <label className="block text-[11px] font-medium text-gray-400 mb-1">
                                Interested programme
                            </label>
                            <select
                                value={data.programme}
                                onChange={(e) =>
                                    setData("programme", e.target.value)
                                }
                                className="w-full text-sm px-4 py-2 border border-gray-200 rounded-lg bg-white  md:text-sm focus:border-blue-500 outline-none"
                            >
                                {[
                                    "Japanese language",
                                    "SSW curriculum",
                                    "TITP curriculum",
                                    "Internship curriculum",
                                    "Study abroad (general)",
                                ].map((p) => (
                                    <option key={p}>{p}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-[11px] font-medium text-gray-400 mb-1">
                                Message
                            </label>
                            <textarea
                                value={data.message}
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                                placeholder="Tell us about yourself and your goals..."
                                rows={4}
                                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg resize-none focus:border-blue-500 outline-none bg-white text-base md:text-sm px-4 py-3 h-28 md:h-auto min-h-[120px]"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className={`w-full text-white text-sm font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                                processing
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-700 hover:bg-blue-800 hover:shadow-lg active:scale-[0.98]"
                            }`}
                        >
                            {processing ? (
                                <>
                                    <svg
                                        className="animate-spin h-4 w-4 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                        <a
                            href="https://wa.me/9779805682958"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between bg-blue-50 rounded-lg px-4 py-3"
                        >
                            <div>
                                <div className="text-sm font-medium text-blue-900">
                                    Prefer WhatsApp?
                                </div>
                                <div className="text-xs text-blue-600">
                                    Students only · 9805682958
                                </div>
                            </div>
                            <span className="bg-[#25D366] text-white text-xs font-medium px-4 py-2 rounded-lg">
                                WhatsApp
                            </span>
                        </a>
                    </motion.form>
                </motion.div>

                {/* Offices */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="text-base font-medium mb-4"
                    >
                        Our offices
                    </motion.h2>
                    {[
                        {
                            flag: "🇳🇵",
                            label: "Nepal office — Kathmandu",
                            address: "Baneshwor, Kathmandu, Nepal",
                            phone: "9805682958",
                            hours: "Sun–Fri, 7:00 am – 6:00 pm",
                            lat: 27.7172,
                            lng: 85.324,
                            liaison: null,
                        },
                        {
                            flag: "🇯🇵",
                            label: "ラピスネパールコンサルタント",
                            address:
                                "東京都新宿区西新宿2-6-1 新宿住友ビル 15階",
                            phone: null,
                            hours: null,
                            lat: 35.6895,
                            lng: 139.6917,
                            liaison: "Yuka Saito (斉藤由香) - Japan liaison",
                        },
                    ].map((office) => (
                        <motion.div
                            variants={fadeUp}
                            whileHover={{
                                y: -5,
                                boxShadow:
                                    "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                            }}
                            key={office.label}
                            className="border border-gray-100 rounded-xl p-4 mb-3 bg-white transition-shadow cursor-pointer"
                        >
                            <div className="text-sm md:text-base font-medium mb-3 md:mb-4 flex items-center gap-2">
                                {/* <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" /> */}
                                {office.flag}
                                {office.label}
                            </div>
                            <div className="text-xs md:text-[11px] text-gray-400 mb-0.5 md:mb-1">
                                Address
                            </div>
                            <div className="text-sm md:text-base text-gray-600 mb-2 md:mb-3 leading-relaxed">
                                {office.address}
                            </div>
                            {office.phone && (
                                <>
                                    <div className="text-[11px] text-gray-400 mb-0.5">
                                        Phone
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        {office.phone}
                                    </div>
                                </>
                            )}
                            {office.hours && (
                                <>
                                    <div className="text-[11px] text-gray-400 mb-0.5">
                                        Hours
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        {office.hours}
                                    </div>
                                </>
                            )}
                            {office.liaison && (
                                <>
                                    <div className="text-[11px] text-gray-400 mb-0.5">
                                        Liaison
                                    </div>
                                    <div className="text-sm text-gray-600 mb-2">
                                        {office.liaison}
                                    </div>
                                </>
                            )}
                            <OfficeMap
                                lat={office.lat}
                                lng={office.lng}
                                title={
                                    office.label === "Nepal office"
                                        ? "Lapis Nepal Consultancy"
                                        : "ラピスネパールコンサルタント"
                                }
                                address={office.address}
                                className="mt-3 h-64 md:h-72 lg:h-80 w-full rounded-xl shadow-lg overflow-hidden"
                                id={`map-${office.flag === "🇳🇵" ? "nepal" : "japan"}`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </AppLayout>
    );
}
