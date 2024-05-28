import MobileHeader from "../components/MobileHeader";


export default function Events() {
    return (
        <main className="flex min-h-screen flex-col bg-base-100">
            <section className="md:hidden">
                <MobileHeader/>
                <section>
                    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ml-1 pl-2">
                        <li>
                            <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end mb-10">
                                    <time className="font-mono italic">June 1st, 12pm - 8pm</time>
                                    <div className="text-lg font-black">Tillsonburg TDMH Foundation</div>
                                </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end mb-10">
                                    <time className="font-mono italic">June 9th, 10am - 4pm</time>
                                    <div className="text-lg font-black">Niagara Falls Comic Con</div>
                                </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end mb-10">
                                    <time className="font-mono italic">June 21st, 4 - 6pm<br/>June 22nd, 10am - 4pm</time>
                                    <div className="text-lg font-black">St. Thomas Summerfest</div>
                                </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end mb-10">
                                    <time className="font-mono italic">TBD</time>
                                    <div className="text-lg font-black">Fan Expo Canada</div>
                                </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end mb-10">
                                    <time className="font-mono italic">TBD</time>
                                    <div className="text-lg font-black">London Comic Con </div>
                                </div>
                            <hr />
                        </li>
                        <li>
                            <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end mb-10">
                                    <time className="font-mono italic">TBD</time>
                                    <div className="text-lg font-black">Hamilton Comic Con </div>
                                </div>
                            <hr />
                        </li>
                    </ul>
                </section>
            </section>
        </main>
    )
}