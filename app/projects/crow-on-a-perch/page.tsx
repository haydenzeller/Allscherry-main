import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import coapBanner from '@/public/coapBanner.jpg';
import coaps1 from '@/public/coaps1.jpg';
import coapThumbnail from '@/public/coapThumbnail.jpg';
import coapThumbnail2 from '@/public/coapThumbnail2.jpg';
import coapThumbnail3 from '@/public/coapThumbnail3.jpg';
import teaser1 from '@/public/teaser1.jpg';
import teaser2 from '@/public/teaser2.jpg';
import teaser3 from '@/public/teaser3.jpg';
import livestream from '@/public/livestream.jpg';
import livestream2 from '@/public/livestream2.jpg';
import livestream3 from '@/public/livestream3.jpg';
import phase1 from '@/public/phase1.jpg';
import comingSoon from '@/public/comingSoon.jpeg';
import streamStarting from '@/public/streamStarting.gif';
import offThePerch from '@/public/offThePerch.jpeg';
import season2 from '@/public/coapS2.jpg';
import linkTree from '@/public/linktree.svg';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "AllsCherry | Crow on a Perch",
    description: "AllsCherry Crow on a Perch Page - The official AllsCherry podcast! Crow on a Perch! Hosts Liam and Eric delve into present day culture as an artist and philosophy major in South Ontario.",
    keywords: ["AllsCherry", "Home", "AllsCherry Home", "AllsCherry Projects", "AllsCherry News", "AllsCherry Updates", "AllsCherry Blog", "AllsCherry Blog Posts", "AllsCherry Blog Updates", "AllsCherry Blog News", "AllsCherry Blog Projects", "AllsCherry Blog Posts Projects News Updates", "AllsCherry Blog Posts Projects News Updates Home"],
    twitter: {
        card: "summary",
        site: "@allscherry",
    },
    alternates: {
        canonical: "https://allscherry.com/projects/crow-on-a-perch",
    },
    openGraph: {
        type: "website",
        url: "https://allscherry.com",
        title: "AllsCherry | Crow on a Perch",
        siteName: "AllsCherry",
        description: "AllsCherry Crow on a Perch Page - The official AllsCherry podcast! Crow on a Perch! Hosts Liam and Eric delve into present day culture as an artist and philosophy major in South Ontario.",
        images: [
            {
                url: "https://allscherry.com/icon.svg",
                width: 1200,
                height: 630,
                alt: "AllsCherry Logo",
            },
        ],
    },
};

export default function CrowOnAPerch() {
    return (
        <main className="flex flex-col min-h-screen bg-base-100 lg:hidden">
            <Header/>
            <section className="flex flex-col items-center justify-center">
                <div className="mt-12 px-4">
                    <Image src={coapBanner} alt="Crow on a Perch Banner" className="rounded-3xl"/>
                 </div>   
                <h1 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">The official AllsCherry podcast! Crow on a Perch!</h1>
                <div className="mt-6 px-12">
                    <Image src={coaps1} alt="Crow on a Perch set 1" className="rounded-3xl"/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">Hosts Liam and Eric delve into present day culture as an artist and philosophy major in South Ontario.<br/><br/>Crow on a Perch is a podcast created to tackle fun, uncomfortable, or frustrating topics about today’s world, through the lens of two 20 year old who love to think.</h2>
                <div className="mt-12 px-4">
                    <Image src={coapThumbnail} alt="Crow on A Perch Thumbnail" className="rounded-3xl"/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">In 2023, these two friends decided to take a trip to Victoria BC. Gaining a fresh perspective on Canada, and conversing with locals, Eric and Liam decided to start this podcast.<br/><br/>As they spoke of it, a Crow perch up beside them, and followed them around for a lot of the trip, creating the name for their show!</h2> 
                <div className="mt-12 px-4">
                    <Image src={phase1} alt="Phase 1" className="rounded-3xl"/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">The full name for the first season was created in a cafe in Victoria... Crow on a Perch, and the existential cowboy in the ever growing void that will inevitably cloak us in eternal dread: Phase 1</h2>
                <div className="mt-6 px-12 flex flex-col gap-4">
                    <Image src={coapThumbnail2} alt="Crow on A Perch Thunbnail 2" className="rounded-3xl"/>
                    <Image src={coapThumbnail3} alt="Crow on A Perch Thumbnail 3" className="rounded-3xl"/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">Season 1 lasted for 6 episodes on primarily Spotify and Youtube. For one episode, a special guest was brought on, Megan Kirwin, a tattoo artist originally from London ON, now living in Victoria BC!</h2>
                <div className="flex flex-col items-center justify-center gap-3 m-6 px-12">
                    <Image src={teaser1} alt="COAP Teaser 1" className="rounded-3xl"/>
                    <Image src={teaser2} alt="COAP Teaser 2" className="rounded-3xl"/>
                    <Image src={teaser3} alt="COAP Teaser 3" className="rounded-3xl"/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">People started to ask if Season 2 was happening. Without much thought of it’s actual creation, Liam and Eric decided to shoot a teaser trailer for season 2, to premier on the first episode!</h2>
                <div className="flex flex-col items-center justify-center mt-6 px-12 gap-4">
                    <Image src={livestream} alt="Livestream" className="rounded-3xl"/>
                    <Image src={livestream2} alt="Livestream 2" className="rounded-3xl"/>
                    <Image src={livestream3} alt="Livestream 3" className="rounded-3xl"/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">With the high demand for Season 2, Liam and Eric decided to try a live stream. March 28th, they went live on Twitch for a special episode with an in house live audience. Throughout the episode, small events took place by surprise, and at the end... Someone got a pie in the face!</h2>
                <div>
                    <Image src="" alt=""/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">The success of the live-stream sparked a format change. Fixing up the set and experimenting with Twitch, season 2, or, Phase 2, had begun!</h2>
                <div>
                    <Image src="" alt=""/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">Since it was phase 2, the name also went through a change!<br/><br/>Crow on a Perch, and the sylvan motherboards in the ever-growing slow cooker which will inevitably char the bar on mars: Phase 2<br/><br/>Eric had taken the time to properly create the brand and mascot as well, as seen below.</h2>
                <div className="flex flex-col items-center justify-center mt-6 px-12 gap-4">
                    <Image src={comingSoon} alt="Coming Soon" className="rounded-3xl"/>
                    <Image src={streamStarting} alt="Stream Starting" className="rounded-3xl"/>
                    <Image src={offThePerch} alt="Off the perch" className="rounded-3xl"/>
                    <Image src={season2} alt="Season2" className="rounded-3xl"/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">Unfortunately, due to some personal issues of one of our hosts, Crow on a Perch is now on an indefinite hiatus. However, this won’t be the last of Eric and Liam!</h2> 
                {/* TODO: Spotify Player */}
                <Link href="" className="flex flex-col justify-center items-center text-center mt-6">
                    <Image src={linkTree} alt="LinkTree" className="rounded-full bg-white p-1 mb-2 w-12"/>
                    <h2 className="w-1/2">If you’d like to watch Crow on a Perch, check out the link tree!</h2>
                </Link>
            </section>
            <Footer/>
        </main>
    );
}

