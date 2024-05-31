'use client'
import { useEffect, useState } from "react";
import Image from "next/image";

interface FeaturedProjects {
    name: string;
    image: string;
}

export default function FeaturedProjectsList() {
    const [featuredProjects, setFeaturedProjects] = useState<FeaturedProjects[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const getfeaturedprojects = async () => {
            try {
                const res = await fetch('/api/getFeaturedProjects', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    cache: 'no-store'
                });
                if (!res.ok) {
                    throw new Error('Failed to fetch featured projects');
                }
                const responseData = await res.json();
                setFeaturedProjects(responseData.data); // Update the state with fetched data
            } catch (error) {
                console.error('Error fetching featuredprojects:', error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };
        getfeaturedprojects(); // Call the function to fetch featuredprojects
    }, []); // Empty dependency array to run the effect only once on component mount

    return (
        <div className="w-full">
            {loading ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="loading spinner bg-base-200"></div>
                </div>
            ) : (
                featuredProjects.length > 0 ? (
                    <ul className="grid grid-cols-2 gap-4">
                        {featuredProjects.map((project, index) => (
                            <li key={index} className="flex flex-col items-center space-y-4">
                                <div className="w-48 h-48 relative object-contain">
                                    <Image
                                        src={"https://api.allscherry.com/assets/"+project.image}
                                        alt={project.name}
                                        fill
                                        sizes="(max-width: 600px) 480px, 800px"
                                        style={{ objectFit: 'cover' }}  // Instead of objectFit prop
                                        className="rounded-box"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold">{project.name}</h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="w-full  mb-14">No featured projects available</p>
                )
            )}
        </div>
    );
}
