'use client';

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
                setEvents(responseData.data); // Update the state with fetched data
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
        <div className="timeline-container">
            {loading ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="loading spinner bg-base-200"></div>
                </div>
            ) : (
                events.length > 0 ? (
                    <ul className="timeline timeline-vertical">
                        {events.map((event, index) => (
                            <li key={index}>
                                <div className={`timeline-box ${index % 2 === 0 ? 'timeline-start' : 'timeline-end'}`}>
                                    <h3>{event.title}</h3>
                                    <p>{event.description}</p>
                                    <p>{renderEventTime(event.start, event.end)}</p>
                                </div>
                                {index < events.length - 1 && <hr />}
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
