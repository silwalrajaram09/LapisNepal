import { useState } from "react";
import { useForm, usePage, Head } from "@inertiajs/react";
import AppLayout from "@/layouts/AppLayouts";
import OfficeMap from "@/Components/OfficeMap";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const formFields = [
    { label: "Full name", key: "name", type: "text", placeholder: "Your full name", required: true },
    { label: "Email address", key: "email", type: "email", placeholder: "you@email.com", required: true },
    { label: "Phone number", key: "phone", type: "tel", placeholder: "+977 98XXXXXXXX", required: true },
];

const programOptions = [
    "Japanese language",
    "SSW curriculum",
    "TITP curriculum",
    "Internship curriculum",
    "Study abroad (general)",
];

const offices = [
    {
        flag: "🇳🇵",
        label: "Nepal office — Kathmandu",
        address: "Baneshwor, Kathmandu, Nepal",
        phone: "+977 9805682958",
        email: "info@lapisnepal.com",
        hours: "Sunday – Friday, 7:00 AM – 6:00 PM",
        lat: 27.7172,
        lng: 85.324,
        mapTitle: "Lapis Nepal Consultancy",
        id: "nepal",
    },
    {
        flag: "🇯🇵",
        label: "ラピスネパールコンサルタント",
        address: "東京都新宿区西新宿2-6-1 新宿住友ビル 15階",
        phone: "+81 3-1234-5678",
        email: "japan@lapisnepal.com",
        hours: "Monday – Friday, 9:00 AM – 6:00 PM JST",
        lat: 35.6895,
        lng: 139.6917,
        mapTitle: "ラピスネパールコンサルタント",
        liaison: "Yuka Saito (斉藤由香) - Japan Liaison",
        id: "japan",
    },
];

export default function Contact() {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        programme: "Japanese language",
        message: "",
    });

    const [activeMap, setActiveMap] = useState(null);

    function submit(e) {
        e.preventDefault();
        post("/contact", { 
            onSuccess: () => reset(),
            preserveScroll: true,
        });
    }

    return (
        <AppLayout>
            <Head title="Contact Us | Lapis Nepal Consultancy" />

            {/* Hero Section - Improved with better spacing */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 px-4 sm:px-6 py-12 sm:py-16"
            >
                <div className="max-w-5xl mx-auto">
                    <p className="text-xs text-gray-400 mb-2 tracking-wide">
                        Home / Contact
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-3">
                        Get in touch
                    </h1>
                    <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-2xl">
                        Reach our team in Kathmandu or Japan. 
                        <span className="block sm:inline"> WhatsApp is available for students only.</span>
                    </p>
                </div>
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {/* Success Message with better animation */}
                <AnimatePresence>
                    {flash?.success && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="mb-8 max-w-2xl mx-auto lg:mx-0"
                        >
                            <div className="p-5 bg-green-50 border border-green-200 rounded-2xl flex items-start gap-4 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-md">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold text-green-900 mb-0.5">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-sm text-green-700 leading-relaxed">
                                        {flash.success} Our team will get back to you within 24 hours.
                                    </p>
                                </div>
                                <button 
                                    onClick={() => window.location.reload()}
                                    className="text-green-600 hover:text-green-800 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Content Grid - Better responsive layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    
                    {/* Contact Form Section */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.h2 
                            variants={fadeUp}
                            className="text-xl sm:text-2xl font-semibold mb-2"
                        >
                            Send us a message
                        </motion.h2>
                        <motion.p 
                            variants={fadeUp}
                            className="text-sm text-gray-500 mb-6"
                        >
                            Fill out the form below and we'll get back to you as soon as possible.
                        </motion.p>

                        <motion.form 
                            variants={fadeUp} 
                            onSubmit={submit} 
                            className="space-y-5"
                        >
                            {/* Form Fields */}
                            {formFields.map((field) => (
                                <div key={field.key}>
                                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                                        {field.label} {field.required && <span className="text-red-500">*</span>}
                                    </label>
                                    <input
                                        type={field.type}
                                        value={data[field.key]}
                                        onChange={(e) => setData(field.key, e.target.value)}
                                        placeholder={field.placeholder}
                                        className={`w-full text-sm px-4 py-2.5 border rounded-xl outline-none transition-all duration-200
                                            ${errors[field.key] 
                                                ? 'border-red-300 focus:border-red-500 bg-red-50' 
                                                : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                                            }`}
                                    />
                                    {errors[field.key] && (
                                        <motion.p 
                                            initial={{ opacity: 0, y: -5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-xs text-red-500 mt-1"
                                        >
                                            {errors[field.key]}
                                        </motion.p>
                                    )}
                                </div>
                            ))}

                            {/* Programme Selection */}
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                                    Interested programme
                                </label>
                                <select
                                    value={data.programme}
                                    onChange={(e) => setData("programme", e.target.value)}
                                    className="w-full text-sm px-4 py-2.5 border border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200"
                                >
                                    {programOptions.map((p) => (
                                        <option key={p}>{p}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs font-medium text-gray-600 mb-1.5">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    value={data.message}
                                    onChange={(e) => setData("message", e.target.value)}
                                    placeholder="Tell us about yourself, your goals, and how we can help you..."
                                    rows={5}
                                    className={`w-full text-sm px-4 py-2.5 border rounded-xl resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200
                                        ${errors.message 
                                            ? 'border-red-300 focus:border-red-500 bg-red-50' 
                                            : 'border-gray-200'
                                        }`}
                                />
                                {errors.message && (
                                    <motion.p 
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-xs text-red-500 mt-1"
                                    >
                                        {errors.message}
                                    </motion.p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={processing}
                                className={`w-full text-white text-sm font-semibold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2
                                    ${processing 
                                        ? 'bg-gray-400 cursor-not-allowed' 
                                        : 'bg-blue-700 hover:bg-blue-800 hover:shadow-lg active:scale-[0.98]'
                                    }`}
                            >
                                {processing ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>

                            {/* WhatsApp CTA - Improved */}
                            <div className="pt-2">
                                <a
                                    href="https://wa.me/9779805682958?text=Hello%21%20I%27m%20interested%20in%20studying%20in%20Japan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl px-5 py-4 hover:shadow-md transition-all duration-300 group"
                                >
                                    <div>
                                        <div className="text-sm font-semibold text-green-900 flex items-center gap-2">
                                            <span>💬</span>
                                            Prefer WhatsApp?
                                        </div>
                                        <div className="text-xs text-green-700 mt-0.5">
                                            Students only · +977 9805682958
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-[#25D366] text-white text-xs font-medium px-4 py-2 rounded-lg shadow-sm group-hover:shadow-md transition-all">
                                            WhatsApp
                                        </span>
                                        <svg className="w-4 h-4 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </motion.form>
                    </motion.div>

                    {/* Offices Section */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.h2 
                            variants={fadeUp}
                            className="text-xl sm:text-2xl font-semibold mb-2"
                        >
                            Our offices
                        </motion.h2>
                        <motion.p 
                            variants={fadeUp}
                            className="text-sm text-gray-500 mb-6"
                        >
                            Visit us or get in touch through our offices in Nepal and Japan.
                        </motion.p>

                        <div className="space-y-6">
                            {offices.map((office, index) => (
                                <motion.div
                                    key={office.id}
                                    variants={fadeUp}
                                    whileHover={{ y: -5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="border border-gray-100 rounded-2xl p-5 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                                >
                                    {/* Office Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl">{office.flag}</span>
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                                                {office.label}
                                            </h3>
                                        </div>
                                        <div className="text-xs text-gray-400">
                                            {office.id === "nepal" ? "🇳🇵 NST" : "🇯🇵 JST"}
                                        </div>
                                    </div>

                                    {/* Office Details Grid */}
                                    <div className="space-y-3 mb-5">
                                        <div>
                                            <div className="text-xs font-medium text-gray-400 mb-1 flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Address
                                            </div>
                                            <div className="text-sm text-gray-600 leading-relaxed">
                                                {office.address}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <div className="text-xs font-medium text-gray-400 mb-1 flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    Phone
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    <a href={`tel:${office.phone}`} className="hover:text-blue-600 transition-colors">
                                                        {office.phone}
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-xs font-medium text-gray-400 mb-1 flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                    </svg>
                                                    Email
                                                </div>
                                                <div className="text-sm text-gray-600">
                                                    <a href={`mailto:${office.email}`} className="hover:text-blue-600 transition-colors">
                                                        {office.email}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="text-xs font-medium text-gray-400 mb-1 flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Hours
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {office.hours}
                                            </div>
                                        </div>

                                        {office.liaison && (
                                            <div className="bg-blue-50 rounded-lg p-3">
                                                <div className="text-xs font-medium text-blue-800 mb-1">🤝 Liaison Officer</div>
                                                <div className="text-sm text-blue-900">{office.liaison}</div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Map Toggle Button */}
                                    <button
                                        onClick={() => setActiveMap(activeMap === office.id ? null : office.id)}
                                        className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium py-2 border-t border-gray-100 mt-2 flex items-center justify-center gap-2 transition-colors"
                                    >
                                        <svg className={`w-4 h-4 transition-transform ${activeMap === office.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                        {activeMap === office.id ? "Hide Map" : "Show Location Map"}
                                    </button>

                                    {/* Animated Map */}
                                    <AnimatePresence>
                                        {activeMap === office.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4">
                                                    <OfficeMap
                                                        lat={office.lat}
                                                        lng={office.lng}
                                                        title={office.mapTitle}
                                                        address={office.address}
                                                        className="h-64 sm:h-72 w-full rounded-xl shadow-lg overflow-hidden"
                                                        id={`map-${office.id}`}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Contact Info */}
                        <motion.div 
                            variants={fadeUp}
                            className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl"
                        >
                            <div className="flex items-start gap-3">
                                <div className="text-2xl">💡</div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-800 mb-1">
                                        Emergency Contact
                                    </h4>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        For urgent matters outside office hours, please contact our Japan office directly at <a href="tel:+81312345678" className="text-blue-600 font-medium">+81 3-1234-5678</a>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </AppLayout>
    );
}