import events from "../data/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">
  Campus Event Board
</h1>

<h2 className="mb-6 text-xl font-semibold text-gray-700">
  Upcoming Events
</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-xl border border-gray-800 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img
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
            <p><strong>DATE:</strong> {event.date}</p>
            <p><strong>TIME:</strong> {event.time}</p>
            <p><strong>VENUE:</strong> {event.venue}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
