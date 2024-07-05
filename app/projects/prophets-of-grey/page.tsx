import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import splitInTheSun from '@/public/splitInTheSun.jpg';
import magik from '@/public/magik.jpg';
import sage from '@/public/sage.jpg';

export default function ProphetsOfGrey() {
    return (
        <main className="flex flex-col min-h-screen bg-base-100 lg:hidden">
            <Header/>
            <section className="flex flex-col bg-base-100 items-center justify-center">
                <div className="flex flex-col items-center justify-center px-12 mt-6">
                    <Image src={splitInTheSun} alt="A Split In The Sun" className="rounded-3xl"/>
                </div>
                <h2 className="border border-base-200 mt-6 rounded-3xl p-3 w-5/6 text-center">The Prophets of Grey, a project Eric debated for a very long time, is the name of his three piece band. Consisting of the Three Prophets of the Grey Planet</h2>
                <div className="flex flex-row items-center justify-center px-12 mt-6">
                    <Image src={magik} alt="Magik" className="rounded-l-3xl w-1/2"/>
                    <Image src={sage} alt="Sage" className="rounded-r-3xl w-1/2"/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">The first of many more possible albums, is A Split in the Sun, consisting of 8 songs for a total of 1 hour and 21 minutes. Eric grew up as a metal head, slowly drifting to jazz and avant garde music such as King Crimson, Frank Zappa and Mr. Bungle. The craving to create music only grew as his ideas for comics did too. After Dot’s story was finished being written, he asked himself, but what happeed before Dot the Robot?</h2>
                <div>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                    <Image src="" alt=""/>
                </div>
                <h2 className="border border-base-200 rounded-3xl p-3 w-5/6 mt-6 text-center">Although the music is finished, a lot goes into making an album! Stay tuned for the rest of this page to be finished:)</h2>
            </section>
            <Footer/>
        </main>
    );
}

