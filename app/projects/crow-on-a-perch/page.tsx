import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import Link from 'next/link';




export default function CrowOnAPerch() {
    return (
        <main className="flex flex-col min-h-screen bg-base-100 lg:hidden">
            <Header/>
            <section className="flex flex-col items-center justify-center">
                <div>
                    <Image src="" alt=""/>
                </div>   
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">The official AllsCherry podcast! Crow on a Perch!</h2>
                <div>
                    <Image src="" alt=""/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">Hosts Liam and Eric delve into present day culture as an artist and philosophy major in South Ontario.<br/><br/>Crow on a Perch is a podcast created to tackle fun, uncomfortable, or frustrating topics about today’s world, through the lens of two 20 year old who love to think.</h2>
                <div>
                    <Image src="" alt=""/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">In 2023, these two friends decided to take a trip to Victoria BC. Gaining a fresh perspective on Canada, and conversing with locals, Eric and Liam decided to start this podcast.<br/><br/>As they spoke of it, a Crow perch up beside them, and followed them around for a lot of the trip, creating the name for their show!</h2>
                <div>
                    <Image src="" alt=""/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">The full name for the first season was created in a cafe in Victoria... Crow on a Perch, and the existential cowboy in the ever growing void that will inevitably cloak us in eternal dread: Phase 1</h2>
                <div>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">Season 1 lasted for 6 episodes on primarily Spotify and Youtube. For one episode, a special guest was brought on, Megan Kirwin, a tattoo artist originally from London ON, now living in Victoria BC!</h2>
                <div>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">People started to ask if Season 2 was happening. Without much thought of it’s actual creation, Liam and Eric decided to shoot a teaser trailer for season 2, to premier on the first episode!</h2>
                <div>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
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
                <div>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">Unfortunately, due to some personal issues of one of our hosts, Crow on a Perch is now on an indefinite hiatus. However, this won’t be the last of Eric and Liam!</h2> 
                {/* TODO: Spotify Player */}
                <Link href="" className="flex flex-col justify-center items-center text-center mt-6">
                    <Image src="" alt=""/>
                    <h2 className="w-1/2">If you’d like to watch Crow on a Perch, check out the link tree!</h2>
                </Link>
            </section>
            <Footer/>
        </main>
    );
}

