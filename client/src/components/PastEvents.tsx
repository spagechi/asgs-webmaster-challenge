import EventCard from './EventCard';
import ScoobyDooPoster from '@/assets/past-events/scooby-doo-poster.png';
import MinionsPoster from '@/assets/past-events/minions-poster.png';
import MLPPoster from '@/assets/past-events/my-little-pony-poster.png';

const placeholder : string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius eu metus et scelerisque. Nullam gravida eu elit at rutrum. Sed congue elementum placerat. Maecenas nec rhoncus est.";

const events = [
    {
        img: ScoobyDooPoster,
        title: "ASCE-Bear, Where Are You?",
        date: "November 21, 2025",
        description: placeholder,
    },
    {
        img: MinionsPoster,
        title: "The Rise of ASCE Bear",
        date: "February 20, 2026",
        description: placeholder,
    },
    {
        img: MLPPoster,
        title: "My Little ASCE Bear",
        date: "April 3, 2026",
        description: placeholder,
    },
];

const PastEvents = () => {
    return (
        <section className="mb-23 text-4xl">
            <h1 className="mb-13">Past Events</h1>
            <div className="flex justify-between p-[54px_48px] border-2 rounded-2xl border-[#979797]">
                {events.map((event, key) => (
                    <EventCard key={key} event={event} />
                ))}
            </div>
        </section>
    );
};

export default PastEvents;