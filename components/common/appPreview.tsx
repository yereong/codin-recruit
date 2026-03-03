"use client"

import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import Image from "next/image";

const AppPreview: React.FC = () => {
    const images = [
        '/images/appPreviews/sampleScreen1.webp',
        '/images/appPreviews/sampleScreen2.webp',
        '/images/appPreviews/sampleScreen3.webp',
        '/images/appPreviews/sampleScreen4.webp',
        '/images/appPreviews/sampleScreen5.webp',
    ]
    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1, containScroll: 'trimSnaps', align:'center', loop: true, });
    const [selectedIndex, setSelectedIndex] = useState(0)

    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on('select', onSelect)
        onSelect() 
    }, [emblaApi])
    
    return (
        <div ref={emblaRef} className="overflow-hidden w-[90%]">
            <div className="flex">
                {images.map((src, i) => (
                <div
                    key={i}
                    className={"shrink-0 px-1 w-1/2 md:w-1/3 lg:w-1/4 transition-opacity bg-[#0a0a0a] "+ ((selectedIndex===i)? " " : "py-[6px] sm:py-[12px] opacity-40")}
                >
                    <Image
                      src={src}
                      alt=""
                      width={360}
                      height={720}
                      className="rounded-xl w-full h-auto object-cover"
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    />
                </div>
                ))}
            </div>
        </div>
    );

};

export default AppPreview;
/*
const AppPreview: React.FC = () => {

  return (
    <div className="flex gap-6">
        <img src="images/appPreviews/sampleScreen1.png"/>
        <img src="images/appPreviews/sampleScreen2.png"/>
        <img src="images/appPreviews/sampleScreen3.png"/>
        <img src="images/appPreviews/sampleScreen4.png"/>
        <img src="images/appPreviews/sampleScreen5.png"/>
    </div>
  );

};

export default AppPreview; */

/*
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Pagination } from 'swiper/modules';

const AppPreview: React.FC = () => {
    const images = [
        'images/appPreviews/sampleScreen1.png',
        'images/appPreviews/sampleScreen2.png',
        'images/appPreviews/sampleScreen3.png',
        'images/appPreviews/sampleScreen4.png',
        'images/appPreviews/sampleScreen5.png',
    ]
    return (
      <div> 
        <Swiper
            spaceBetween={4}
            slidesPerView={5}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            className="w-full max-w-screen-md mx-auto flex items-center justify-center"
        >
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                    <img className="w-[180px]" src={src} />
                </SwiperSlide>
              ))}
          </Swiper>
      </div>
    );

};

export default AppPreview;
*/