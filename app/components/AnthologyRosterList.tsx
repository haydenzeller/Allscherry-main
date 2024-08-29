"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AnthologyRoster {
  name: string;
  image: string;
  link: string;
}

export default function AnthologyRosterList() {
  const [anthologyRoster, setAnthologyRoster] = useState<AnthologyRoster[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  useEffect(() => {
    const getAnthologyRoster = async () => {
      try {
        const res = await fetch("/api/getAnthologyRoster", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch Roster");
        }
        const responseData = await res.json();
        setAnthologyRoster(responseData.data); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching Roster:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };
    getAnthologyRoster(); // Call the function to fetch featuredprojects
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="w-full">
      <div className="mb-5 flex items-center justify-center">
        <h2 className="text-2xl border border-base-200 rounded-full p-3">
          Anthology Roster, {year}
        </h2>
      </div>
      {loading ? (
        <div className="flex flex-col justify-center items-center">
          <div className="loading spinner bg-base-200"></div>
        </div>
      ) : anthologyRoster.length > 0 ? (
        <ul className="grid grid-cols-2 gap-4">
          {anthologyRoster.map((project, index) => (
            <li key={index} className="flex flex-col items-center space-y-4">
              <Link
                href={project.link || ""}
                className="w-48 h-48 relative object-contain"
              >
                <Image
                  src={"https://api.allscherry.com/assets/" + project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 600px) 480px, 800px"
                  style={{ objectFit: "cover" }} // Instead of objectFit prop
                  className="rounded-box"
                />
              </Link>
              <div>
                <h3>{project.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="w-full  mb-14">No Roster Available</p>
      )}
    </div>
  );
}
