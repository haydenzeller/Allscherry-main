'use client'
import { useEffect, useState } from "react";

interface Event {
    title: string;
    description: string;
    start: Date;
    end: Date;
}

export default function LandingCarousel() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getEvents = async () => {
            try {
                const res = await fetch('/api/getEvents', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-store'
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch events');
                }
                const responseData = await res.json();
                const filteredEvents = responseData.data.filter((event: Event) => new Date(event.end) >= new Date());
                setEvents(filteredEvents); // Update the state with fetched data
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        getEvents(); // Call the function to fetch events
    }, []); // Empty dependency array to run the effect only once on component mount

    const formatDate = (date: Date, showDate: boolean = true) => {
        return date.toLocaleString('en-US', {
            month: showDate ? 'long' : undefined,
            day: showDate ? 'numeric' : undefined,
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    };

    const renderEventTime = (start: Date, end: Date) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const isSameDay = startDate.toDateString() === endDate.toDateString();

        if (isSameDay) {
            return `${formatDate(startDate)} - ${formatDate(endDate, false)}`;
        } else {
            return `${formatDate(startDate)} - ${formatDate(endDate)}`;
        }
    };

    return (
        <div className="lg:text-2xl">
            {loading ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="loading spinner bg-base-200"></div>
                </div>
            ) : (
                events.length > 0 ? (
                    <ul className="timeline timeline-vertical timeline-snap-icon">
                        {events.map((event, index) => (
                                <li key={index} className="">
                                    {index !== 0 && <hr/> }
                                    <div className="timeline-middle w-2 h-2 bg-white rounded-full"></div>
                                    <div className={`timeline-box ${index % 2 === 0 ? 'timeline-start' : 'timeline-end'} h-auto`}>
                                        <h3>{event.title}</h3>
                                        <p>{event.description}</p>
                                        <p className=" text-base-200">{renderEventTime(event.start, event.end)}</p>
                                    </div>
                                    {index !== events.length - 1 && <hr/>}
                                </li>
                        ))}
                    </ul>
                ) : (
                    <p>No events available</p>
                )
            )}
        </div>
    );
}
