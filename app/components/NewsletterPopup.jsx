'use client';

import { useState, useEffect } from 'react';

export default function NewsletterPopup({ isOpen, onClose }) {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop with blur effect */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    ></div>

                    {/* Popup content */}
                    <div className="bg-primary text-white rounded-lg shadow-xl w-full max-w-md relative z-10 animate-fadeIn">
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-white hover:text-gray-200"
                            aria-label="Close popup"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="p-8">
                            <h2 className="text-3xl font-bold mb-4 text-center">Stay Updated</h2>
                            <p className="text-lg mb-6 text-center">
                                Get the latest resources, event tips, and exclusive content delivered straight to your inbox.
                            </p>

                            <form className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-yellow-400 text-black px-6 py-3 font-semibold rounded-md hover:bg-yellow-300 transition-colors"
                                >
                                    Get Free Updates
                                </button>
                            </form>
                            <p className="text-sm mt-4 opacity-80 text-center">
                                I respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
} 