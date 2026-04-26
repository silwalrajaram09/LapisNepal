import React from "react";

const WhatsAppButton = () => {
    const phoneNumber = "9862839854"; // Replace with actual WhatsApp number
    const message = encodeURIComponent(
        "Hello! I would like to inquire about your services.",
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 animate-bounce"
            aria-label="Chat on WhatsApp"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
            >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 2.25.73 4.33 1.98 6.05L2.5 21.5l3.45-1.48C7.67 20.27 9.83 21 12 21c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.77 0-3.42-.48-4.85-1.31l-.35-.2-2.04.87.86-2.02-.2-.35C5.48 14.42 5 12.77 5 11c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7z" />
                <path d="M16.5 13.5c-.25 0-1.5.75-1.75.75s-.5-.25-1-.75c-.5-.5-1-1-1-1-.5-.5-.75-.75-.75-1 0-.25.75-1.5.75-1.75s-.25-.5-.5-1c-.25-.5-.5-1-.5-1s-1-.5-1.5-.5c-.5 0-1 .5-1 1s.5 1.5.5 2c0 .5.5 1 .75 1.5s.75 1 1.25 1.5c.5.5 1 .75 1.5 1s1 .5 1.5.5 1-.5 1-1 .5-1 .5-1-1-.5-1.5-.5z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
