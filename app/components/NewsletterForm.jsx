"use client";

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setStatus('error');
            setMessage('Please enter your email address');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage('Thanks for subscribing to my newsletter!');
                setEmail('');
                setName('');
            } else {
                setStatus('error');
                setMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Newsletter submission error:', error);
            setStatus('error');
            setMessage('Connection error. Please try again later.');
        }
    };

    return (
        <div className="newsletter-form">
            {status === 'success' ? (
                <div className="bg-green-50 border border-green-100 rounded-md p-4">
                    <p className="text-green-800 font-medium">{message}</p>
                </div>
            ) : (
                <>
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-primary text-white font-medium py-2 rounded hover:bg-pink-600 transition-colors flex items-center justify-center"
                        >
                            {status === 'loading' ? (
                                <span>Subscribing...</span>
                            ) : (
                                <>
                                    <FaPaperPlane className="mr-2" />
                                    Get My Monthly Mic Check
                                </>
                            )}
                        </button>
                    </form>

                    {status === 'error' && (
                        <p className="text-red-500 text-sm mt-2">{message}</p>
                    )}

                    <p className="text-gray-600 text-xs mt-2">
                        No spam. Unsubscribe anytime. I'll never share your information.
                    </p>
                </>
            )}
        </div>
    );
} 