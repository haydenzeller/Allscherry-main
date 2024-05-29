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
            }
        };

        getEvents(); // Call the function to fetch events
    }, []); // Empty dependency array to run the effect only once on component mount

    const formatDate = (dateString: Date) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    };

    return (
        <div className="timeline-container">
            {events.length > 0 ? (
                <ul className="timeline timeline-vertical">
                    {events.map((event, index) => (
                        <li key={index}>
                            <div className={`timeline-box ${index % 2 === 0 ? 'timeline-start' : 'timeline-end'}`}>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                                <p>{formatDate(event.start)} - {formatDate(event.end)}</p>
                            </div>
                            {index < events.length - 1 && <hr />}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No events available</p>
            )}
        </div>
    );
}
