import { useState } from "react";
import { useForm } from "@inertiajs/react";
import AppLayout from "@/layouts/AppLayouts";
import { Head } from "@inertiajs/react";
import HeroSlider from "@/Components/HeroSlider";
export default function Contact() {
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
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-10">
                <div className="max-w-5xl mx-auto">
                    <p className="text-xs text-gray-400 mb-2">Home › Contact</p>
                    <h1 className="text-2xl font-medium mb-2">Get in touch</h1>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        Reach our team in Kathmandu or Japan. WhatsApp is
                        available for students only.
                    </p>
                </div>
            </div>
            <h2 className="text-2xl text-center font-bold ">Contact us </h2>
            <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 gap-6">
                {/* Form */}
                <div>
                    <h2 className="text-base font-medium mb-4">
                        Send us a message
                    </h2>
                    <form
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
                                <label className="block text-[11px] font-medium text-gray-400 mb-1">
                                    {f.label}
                                </label>
                                <input
                                    type={f.type}
                                    value={data[f.key]}
                                    onChange={(e) =>
                                        setData(f.key, e.target.value)
                                    }
                                    placeholder={f.placeholder}
                                    className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-500 outline-none bg-white"
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
                                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg bg-white"
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
                                className="w-full text-sm px-3 py-2 border border-gray-200 rounded-lg resize-none focus:border-blue-500 outline-none bg-white"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg disabled:opacity-60"
                        >
                            {processing ? "Sending…" : "Send message"}
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
                    </form>
                </div>

                {/* Offices */}
                <div>
                    <h2 className="text-base font-medium mb-4">Our offices</h2>
                    {[
                        {
                            flag: "🇳🇵",
                            label: "Nepal office — Kathmandu",
                            address: "[Add your Nepal address]",
                            phone: "9805682958",
                            hours: "Sun–Fri, 7:00 am – 6:00 pm",
                            liaison: null,
                        },
                        {
                            flag: "🇯🇵",
                            label: "Japan office",
                            address: "[Add your Japan address]",
                            phone: null,
                            hours: null,
                            liaison: "Keiko Yamamoto",
                        },
                    ].map((office) => (
                        <div
                            key={office.label}
                            className="border border-gray-100 rounded-xl p-4 mb-3"
                        >
                            <div className="text-sm font-medium mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                                {office.label}
                            </div>
                            <div className="text-[11px] text-gray-400 mb-0.5">
                                Address
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
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
                            <div className="bg-gray-50 border border-gray-100 rounded-lg h-24 flex items-center justify-center mt-2">
                                <span className="text-xs text-gray-300">
                                    Map embed
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
