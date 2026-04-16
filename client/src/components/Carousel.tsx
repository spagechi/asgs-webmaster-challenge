import { useState, useEffect } from 'react';
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import ScoobyDooBanner from '@/assets/carousel-images/scooby-doo-banner.png';
import MinionsBanner from '@/assets/carousel-images/minions-banner.png';
import MLPBanner from '@/assets/carousel-images/my-little-pony-banner.png';

const banners = [
    {
        img: ScoobyDooBanner,
        title: "ASCE-Bear, Where Are You?",
    },
    {
        img: MinionsBanner,
        title: "The Rise of ASCE Bear",
    },
    {
        img: MLPBanner,
        title: "My Little ASCE Bear",
    },
];

const Carousel = () => {
    const [currIdx, setCurrIdx] = useState(0);
    const banner = banners[currIdx];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrIdx((prevIdx) => (prevIdx + 1) % banners.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [currIdx]);

    return (
        <div className="flex flex-col items-center relative max-w-384">
            <img src={banner.img.src} alt={`'${banner.title}' banner`} className="min-[500px]:w-screen 2xl:w-384" />

            <div className="flex justify-center gap-2 absolute bottom-4">
                {banners.slice(0, banners.length).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrIdx(index)}
                        className={`w-2 h-2 rounded-full ${
                            index === currIdx ? "bg-black" : "bg-[#C4C4C4]"
                        } hover:cursor-pointer`}
                    />
                ))}
            </div>

            <button onClick={() => setCurrIdx((prevIdx) => ((((prevIdx - 1) % banners.length) + banners.length) % banners.length))}>
                <ArrowBackIcon className="absolute top-1/2 left-5 text-[#e5dfe9] hover:cursor-pointer" />
            </button>

            <button onClick={() => setCurrIdx((prevIdx) => (prevIdx + 1) % banners.length)}>
                <ArrowForwardIcon className="absolute top-1/2 right-5 text-[#e5dfe9] hover:cursor-pointer" />
            </button>
        </div>
    );
};

export default Carousel;