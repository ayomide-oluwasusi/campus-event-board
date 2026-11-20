
"use client";

import { useParams } from "next/navigation";
import events from "../../../data/data";

export default function EventDetails() {
  const params = useParams();
  const eventId = Number(params.id);

  const event = events.find((item) => item.id === eventId);

  if (!event) {
    return (
      <main className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-2xl font-bold text-red-600">
          Event Not Found
        </h1>
        <p className="mt-2 text-gray-600">
          The event you are looking for does not exist.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg">

        <img
          src={event.image}
          alt={event.title}
          className="h-72 w-full rounded-xl object-cover"
        />

        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          {event.title}
        </h1>

        <span className="mt-3 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
          {event.category}
        </span>

        <div className="mt-6 space-y-4 text-gray-800">
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Venue:</strong> {event.venue}</p>
        </div>

        <p className="mt-6 leading-7 text-gray-700">
          {event.description}
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          Back to Events
        </a>

      </div>
    </main>
  );
}
