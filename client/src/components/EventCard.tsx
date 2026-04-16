interface Event {
    img: ImageMetadata;
    title: string;
    date: string;
    description: string;
};

interface EventCardProps {
  event: Event;
};

const EventCard = ({ event } : EventCardProps) => {
    return (
        <div className="flex flex-col max-w-88 border-2 rounded-2xl border-[#D9D9D9] overflow-hidden">
            <img src={event.img.src} alt={`'${event.title}' poster`} className="w-auto h-70 object-cover object-top" />

            <div className="flex flex-col gap-1 p-8 text-center">
                <h2 className="text-xl font-medium">{event.title}</h2>
                <span className="text-lg font-light">{event.date}</span>
                <p className="text-sm">{event.description}</p>
            </div>
        </div>
    );
};

export default EventCard;