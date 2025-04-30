'use client'; // Add this at the top

import Link from 'next/link';

export default function FreeResourcesPage() {
    return ( <
        main className = "bg-white" >
        <
        section className = "py-20 bg-gradient-to-r from-gray-900 to-black text-white" >
        <
        div className = "container mx-auto px-4" >
        <
        div className = "max-w-4xl mx-auto text-center" >
        <
        h1 className = "text-4xl md:text-5xl font-bold my-4" > Free Resources < /h1> <
        p className = "text-xl font-light mb-6" >
        Helpful tools and templates
        for your events <
        /p> < /
        div > <
        /div> < /
        section >

        <
        section className = "py-16" >
        <
        div className = "container mx-auto px-4" >
        <
        p className = "text-center text-xl" > Resources coming soon... < /p> <
        div className = "text-center mt-8" >
        <
        Link href = "/resources"
        className = "text-primary hover:underline" > ←Back to Resources <
        /Link> < /
        div > <
        /div> < /
        section > <
        /main>
    );
}