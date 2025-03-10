"use client"

import {useGlobalContext} from "@/context/GlobalContext";
import SwiperCore from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image, { StaticImageData } from "next/image";
import {useEffect, useRef, useState} from "react";

import gamelister1 from '@/public/images/game-lister/game-lister-1.jpg';
import gamelister2 from '@/public/images/game-lister/game-lister-2.jpg';
import gamelister3 from '@/public/images/game-lister/game-lister-3.jpg';
import gamelister4 from '@/public/images/game-lister/game-lister-4.jpg';
import gamelister5 from '@/public/images/game-lister/game-lister-5.jpg';
import gamelister6 from '@/public/images/game-lister/game-lister-6.jpg';
import gamelister7 from '@/public/images/game-lister/game-lister-7.jpg';
import gamelister8 from '@/public/images/game-lister/game-lister-8.jpg';

import gamerhaven1 from '@/public/images/gamerhaven/gamerhaven-1.jpg';
import gamerhaven2 from '@/public/images/gamerhaven/gamerhaven-2.jpg';
import gamerhaven3 from '@/public/images/gamerhaven/gamerhaven-3.jpg';
import gamerhaven4 from '@/public/images/gamerhaven/gamerhaven-4.jpg';
import gamerhaven5 from '@/public/images/gamerhaven/gamerhaven-5.jpg';
import gamerhaven6 from '@/public/images/gamerhaven/gamerhaven-6.jpg';
import gamerhaven7 from '@/public/images/gamerhaven/gamerhaven-7.jpg';
import gamerhaven8 from '@/public/images/gamerhaven/gamerhaven-8.jpg';
import gamerhaven9 from '@/public/images/gamerhaven/gamerhaven-9.jpg';
import gamerhaven10 from '@/public/images/gamerhaven/gamerhaven-10.jpg';
import gamerhaven11 from '@/public/images/gamerhaven/gamerhaven-11.jpg';
import gamerhaven12 from '@/public/images/gamerhaven/gamerhaven-12.jpg';
import gamerhaven13 from '@/public/images/gamerhaven/gamerhaven-13.jpg';
import gamerhaven14 from '@/public/images/gamerhaven/gamerhaven-14.jpg';
import gamerhaven15 from '@/public/images/gamerhaven/gamerhaven-15.jpg';

import pokemon1 from '@/public/images/pokemon/pokemon-1.jpg';
import pokemon2 from '@/public/images/pokemon/pokemon-2.jpg';
import pokemon3 from '@/public/images/pokemon/pokemon-3.jpg';
import pokemon4 from '@/public/images/pokemon/pokemon-4.jpg';
import pokemon5 from '@/public/images/pokemon/pokemon-5.jpg';
import pokemon6 from '@/public/images/pokemon/pokemon-6.jpg';

import simplyweather1 from '@/public/images/simply-weather/simply-weather-1.jpg';
import simplyweather2 from '@/public/images/simply-weather/simply-weather-2.jpg';
import simplyweather3 from '@/public/images/simply-weather/simply-weather-3.jpg';
import simplyweather4 from '@/public/images/simply-weather/simply-weather-4.jpg';
import simplyweather5 from '@/public/images/simply-weather/simply-weather-5.jpg';
import simplyweather6 from '@/public/images/simply-weather/simply-weather-6.jpg';

import dreamcars1 from '@/public/images/dream-cars/dream-cars-1.jpg';
import dreamcars2 from '@/public/images/dream-cars/dream-cars-2.jpg';
import dreamcars3 from '@/public/images/dream-cars/dream-cars-3.jpg';
import dreamcars4 from '@/public/images/dream-cars/dream-cars-4.jpg';
import dreamcars5 from '@/public/images/dream-cars/dream-cars-5.jpg';
import dreamcars6 from '@/public/images/dream-cars/dream-cars-6.jpg';

import reactfilms1 from '@/public/images/react-films/react-films-1.jpg';
import reactfilms2 from '@/public/images/react-films/react-films-2.jpg';
import reactfilms3 from '@/public/images/react-films/react-films-3.jpg';
import reactfilms4 from '@/public/images/react-films/react-films-4.jpg';
import reactfilms5 from '@/public/images/react-films/react-films-5.jpg';
import reactfilms6 from '@/public/images/react-films/react-films-6.jpg';

import susyq1 from '@/public/images/susyq/susyq-1.png';
import susyq2 from '@/public/images/susyq/susyq-2.png';
import susyq3 from '@/public/images/susyq/susyq-3.png';
import susyq4 from '@/public/images/susyq/susyq-4.png';
import susyq5 from '@/public/images/susyq/susyq-5.png';
import susyq6 from '@/public/images/susyq/susyq-6.png';

import rotatingliner1 from '@/public/images/rotatingliner/rotatingliner-1.png';
import rotatingliner2 from '@/public/images/rotatingliner/rotatingliner-2.png';
import rotatingliner3 from '@/public/images/rotatingliner/rotatingliner-3.png';


const ProjectModal = () => {

    const {focusedProjectId} = useGlobalContext();

    const gamerListerImages = [gamelister1, gamelister2, gamelister3, gamelister4, gamelister5, gamelister6, gamelister7, gamelister8];
    const gamerHavenImages = [gamerhaven1, gamerhaven2, gamerhaven3, gamerhaven4, gamerhaven5, gamerhaven6, gamerhaven7, gamerhaven8, gamerhaven9, gamerhaven10, gamerhaven11, gamerhaven12, gamerhaven13, gamerhaven14, gamerhaven15];
    const pokemonImages = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];
    const simplyWeatherImages = [simplyweather1, simplyweather2, simplyweather3, simplyweather4, simplyweather5, simplyweather6];
    const dreamCarsImages = [dreamcars1, dreamcars2, dreamcars3, dreamcars4, dreamcars5, dreamcars6];
    const reactFilmsImages = [reactfilms1, reactfilms2, reactfilms3, reactfilms4, reactfilms5, reactfilms6];
    const susyQImages = [susyq1, susyq2, susyq3, susyq4, susyq5, susyq6];
    const rotatingLinerImages = [rotatingliner1, rotatingliner2, rotatingliner3];

    const [modalImages, setModalImages] = useState<StaticImageData[]> ([]);

    useEffect(() => {
        if (focusedProjectId === "gamelister") {
            setModalImages(gamerListerImages);
        } else if (focusedProjectId === "gamerhaven") {
            setModalImages(gamerHavenImages);
        } else if (focusedProjectId === "pokemon") {
            setModalImages(pokemonImages);
        } else if (focusedProjectId === "simplyweather") {
            setModalImages(simplyWeatherImages);
        } else if (focusedProjectId === "dreamcars") {
            setModalImages(dreamCarsImages);
        } else if (focusedProjectId === "reactfilms") {
            setModalImages(reactFilmsImages);
        } else if (focusedProjectId === "susyqcleaning") {
            setModalImages(susyQImages);
        } else if (focusedProjectId === "rotatingliner") {
            setModalImages(rotatingLinerImages);
        } else {
            setModalImages([]);
        }
    }, [focusedProjectId]);

    const swiperRef = useRef<SwiperCore | null>(null);

    const handleReset = () => {
        setTimeout(() => {
            if (swiperRef.current) {
                swiperRef.current.slideTo(0);
            }
        }, 1000);
    };

    return (
        <dialog id="my_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box px-4 py-6 sm:p-6 sm:w-11/12 sm:!max-w-5xl bg-slate-700">
                {
                    modalImages.length === 0 ? (
                        <span className={"text-white"}>No Images Found</span>
                    ) : (
                        <Swiper
                            slidesPerView={1}
                            pagination={{clickable: true}}
                            navigation
                            modules={[Navigation, Pagination]}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                        >
                            {modalImages.map(function(image, index) {
                                return  (
                                    <SwiperSlide
                                        key={index}
                                    >
                                        <Image
                                            className={"object-cover"}
                                            src={image}
                                            alt={"screenshot"}
                                            width={1280}
                                            height={720}
                                        />
                                    </SwiperSlide> )
                            })}
                        </Swiper>
                    )
                }
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={handleReset}>Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default ProjectModal;