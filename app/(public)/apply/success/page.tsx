"use client";
import React, { useEffect, useRef, useState } from "react";
import BackGroundBlur from "@/components/common/backgroundBlur";
import { motion } from "framer-motion";
import Image from "next/image";

const Introduction = () => {
    const [index, setIndex] = useState(0);

    const audioRef = useRef<HTMLAudioElement>(null);

    const images = [
        "/images/bird/1.png", // public 디렉토리에 이미지 넣기
        "/images/bird/2.png",
        "/images/bird/3.png",
    ];

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    useEffect(() => {
      const PNGinterval = setInterval(() => {
        setIndex(prev => (prev + 1) % images.length);
      }, 100); 
      setTimeout(() => {
        clearInterval(PNGinterval);
      }, 10000); 
      return () => clearInterval(PNGinterval);
    }, []);

    useEffect(() => {
        const playAudio = async () => {
        try {
            await audioRef.current?.play();  // 페이지 로드될 때 바로 재생
        } catch (e) {
            console.error("Audio play error", e);
        }
        };
        playAudio();
    }, []);

    return (
        <div className="w-full">
            <div className="relative flex flex-col items-center justify-center w-full h-screen">
                <div id="successInfo" className="flex flex-col items-center pb-[210px] sm:pb-[90px]">
                    <p id="successInfoTitle" className="text-[28px] sm:text-[36px] font-bold">지원해주셔서 감사합니다</p>
                    <p id="successInfoSubTitle1" className="mt-2 text-[16px] sm:text-[20px] font-light text-sub">적어주신 주소로 확인 메일을 보내드릴게요</p>
                    <Image
                      id="successInfoImg"
                      src="/images/fireman.png"
                      alt="지원 완료 축하 일러스트"
                      width={265}
                      height={265}
                      className="w-[188px] sm:w-[265px] h-auto scale-130"
                    />
                </div>
                <motion.img
                    src={images[index]}
                    alt="bird"
                    className="absolute w-24 z-[150]"
                    initial={{ left: "-24vw", top: "80vh", opacity:1, rotate: -30 }}
                    animate={{ left: "150vw", top: "-50vh",opacity:0.5, rotate: 0, scale: 8 }}
                    transition={{ duration: 2, times: [0, 0.4, 0.6, 1], ease: "easeInOut" }}
                />
                <BackGroundBlur/>
            </div>
            <audio
            ref={audioRef}
            src="/sounds/bildFlap.mp3"
            preload="auto"
            />
        </div>
    );
};

export default Introduction;
