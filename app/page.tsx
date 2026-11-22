"use client";

import { useEffect, useState } from "react";
import events from "../data/data";

const banners = [
  "/images/banner-1.jpg",
  "/images/banner-2.jpg",
  "/images/banner-3.jpg",
];

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  useEffect(() => {
  const timer = window.setTimeout(() => {
    setCurrentBanner((current) => (current + 1) % banners.length);
  }, 5000);

  return () => window.clearTimeout(timer);
}, [currentBanner]);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Campus Event <span className="text-green-600">Board</span>
          </h1>

          <p className="mt-2 text-gray-600">
            Discover what's happening on campus.
          </p>
        </div>

        {/* Profile and Notification */}
        <div className="flex items-center gap-5">
          <div className="relative cursor-pointer text-2xl">
            <span>🔔</span>

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              10
            </span>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-sm font-extrabold text-white">
            AO
          </div>
        </div>
      </header>

      {/* Rotating Banner */}
      <div className="relative mb-8 overflow-hidden rounded-2xl shadow-lg">
        <img
          src={banners[currentBanner]}
          alt="Campus Event Board banner"
          className="h-48 w-full object-cover transition-opacity duration-700 sm:h-64"
        />
      </div>

      <h2 className="mb-6 text-xl font-semibold text-gray-700">
        Upcoming Events
      </h2>
      {/* Category Filter */}
<div className="mb-6 flex flex-wrap gap-3">
  {["All", "Tech", "Sports", "Faith", "Social"].map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
        selectedCategory === category
          ? "bg-green-600 text-white"
          : "bg-white text-gray-700 shadow hover:bg-green-100"
      }`}
    >
      {category}
    </button>
  ))}
</div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.length === 0 && 
  <p className="col-span-full py-10 text-center text-gray-500">
    No events found in this category.
  </p>
}
        {filteredEvents.map((event) => (
          <a
          key={event.id}
          href={`/events/${event.id}`}
          className="block rounded-xl bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
>            <img
              src={event.image}
              alt={event.title}
              className="mb-4 h-48 w-full rounded-lg object-cover"
            />

            <h3 className="mb-3 text-lg font-bold text-gray-900">
              {event.title}
            </h3>

            <span className="mb-3 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              {event.category}
            </span>

            <div className="space-y-3 text-gray-800">
              <p>
                <strong>DATE:</strong> {event.date}
              </p>

              <p>
                <strong>TIME:</strong> {event.time}
              </p>

              <p>
                <strong>VENUE:</strong> {event.venue}
              </p>
            </div>

            <p className="mt-3 text-gray-900 italic"> {event.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}