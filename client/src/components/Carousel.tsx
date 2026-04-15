import ScoobyDooBanner from '@/assets/carousel-images/scooby-doo-banner.png';
import MinionsBanner from '@/assets/carousel-images/minions-banner.png';
import MLPBanner from '@/assets/carousel-images/my-little-pony-banner.png';

const Carousel = () => {
    return (
        <div className="flex justify-center">
            <img src={ScoobyDooBanner.src} alt="'ASCE-Bear, Where Are You?' banner" className="w-screen" />
        </div>
    );
};

export default Carousel;