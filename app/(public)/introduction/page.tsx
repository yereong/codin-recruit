"use client";
import AppPreuse from '@/components/common/appPreuse';
import BackGroundBlur from '@/components/common/backgroundBlur';
import RadiantBox from '@/components/common/radiantBox';
import FooterInfo from '@/components/layout/footerInfo';
import WaitForImage from '@/components/wrappers/waitForImage';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from "next/image";
const Introduction: React.FC = () => {
    
    const [isAnimating, setIsAnimating] = useState<boolean>(true); 

    useEffect(() => {
        window.scrollTo(0, 0); 
        setTimeout(() => {
            setIsAnimating(false);
        }, 900); 
    }, []);

    return (
    <div id="introduction" className='w-full'>
        <div className="relative flex flex-col items-center justify-center min-h-[100vh] sm:min-h-screen">
        <WaitForImage src="/images/iphone.webp">
            <motion.div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col items-center justify-center w-full h-[66vh] sm:h-screen"
                initial={{ opacity: 0 }} animate={{ opacity: [1 , 0.5], filter: "blur(16px)" }} transition={{ duration:0.3 , filter: {delay:1, duration: 1.5} }}>
                <motion.div id="mainInfo" className="flex flex-col items-center pb-[80px]"
                    initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay:1.5, duration: 0.3, }}>
                    <Image
                        id="mainInfoImg"
                        src="/logo/logo.webp"
                        alt="코딘 로고"
                        width={519}       // 실제 이미지 비율에 맞게
                        height={200}
                        className="w-[360px] sm:w-[519px] max-w-[80%] h-auto"
                        loading="eager"
                        fetchPriority="high"
                    />
                </motion.div>
            </motion.div>

            <motion.div className='fixed top-0 left-0 flex flex-col items-center justify-center w-full h-[66vh] sm:h-screen'
                initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay:1.5, duration: 0.3, }}>
                <BackGroundBlur/>
            </motion.div>

            <motion.div className="relative h-[100vh] flex flex-col items-center justify-center"
                initial={{ y: "100vh", filter: "brightness(0.55)" }} animate={{ y: 0, filter: "brightness(1)" }} transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1], filter:{ delay:0.9 } }}>
                <AppPreuse/>
            </motion.div >
            
            { !isAnimating &&
                <motion.div className='relative flex flex-col items-center justify-center w-full'
                    initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}}>

                    <h1 className='mt-5 font-titleMega'>코딘을 소개할게요</h1>
                    <p className='mt-3 sm:mt-5 font-subtitle text-center text-sub'>정보기술대학 공식SNS 공모전에서 <span className='text-highlight'>대상(1위)</span>을 수상하고 
                    <br/>25.04.01 부터 애플리케이션 서비스를 시작했어요 </p>

                    <Image
                        src="/images/meAndInu.webp"
                        alt="코딘 팀과 인천대"
                        width={360}
                        height={360}
                        className="mt-12 max-w-[90%] object-contain"
                        sizes="(max-width: 640px) 90vw, 360px"
                        loading="lazy"
                    />

                    <p className='mt-6 sm:mt-12 font-subtitle text-center text-sub mb-32 sm:mb-64'>학교생활에 필요한 서비스를 개발하고, <span className='text-highlight'>실제 서비스</span>로 운영해요 
                    <br/><br/>인천대학교의 공식 도메인 (codin.inu.ac.kr) 발급 등 <br/> 정보기술대학의 지원을 받고 있어요 </p>
                    
                    <RadiantBox>
                        <h3 className='mb-6 font-titleMega'>활동 혜택을 소개할게요!</h3>
                        <div className='flex flex-col justify-center items-start gap-3'>
                            <div className='flex whitespace-nowrap items-center gap-3 font-subtitle sm:font-title'><img src="/icons/check.png" className='w-[24px] h-[24px]'/><p>정보기술대학 학기별 활동 장학금 수여</p></div>
                            <div className='flex whitespace-nowrap items-center gap-3 font-subtitle sm:font-title'><img src="/icons/check.png" className='w-[24px] h-[24px]'/><p>ChatGPT, Adobe 유료 계정 사용</p></div>
                            <div className='flex whitespace-nowrap gap-3 font-subtitle sm:font-title items-start'><img src="/icons/check.png" className='w-[24px] h-[24px]'/><p>실제 운영되는 앱 서비스의 팀원으로 활동하고 <br/> 포트폴리오로 활용</p></div>
                        </div>
                    </RadiantBox>

                    <div className='w-full h-40'></div>
                    
                    <RadiantBox>
                        <h3 className='mb-6 font-titleMega'>CodIN의 다음 목표에요!</h3>
                        <div className='flex flex-col justify-center items-start gap-3'>
                            <div className='flex whitespace-nowrap items-center gap-3 font-subtitle sm:font-title'><img src="/icons/check.png" className='w-[24px] h-[24px]'/><p>간식나눔 티켓팅 전 학과 확대</p></div>
                            <div className='flex whitespace-nowrap items-center gap-3 font-subtitle sm:font-title'><img src="/icons/check.png" className='w-[24px] h-[24px]'/><p>강의실 현황 등 전 학과 맞춤형 서비스 제공</p></div>
                            <div className='flex whitespace-nowrap items-center gap-3 font-subtitle sm:font-title'><img src="/icons/check.png" className='w-[24px] h-[24px]'/><p>더 안정적인 서비스 운영을 위한 개발 환경 구축</p></div>
                            <div className='flex whitespace-nowrap items-center gap-3 font-subtitle sm:font-title'><img src="/icons/check.png" className='w-[24px] h-[24px]'/><p>지속적인 리크루팅을 통한 팀 성장</p></div>
                        </div>
                    </RadiantBox>
                    <p className='mt-8 sm:mt-16 font-subtitle text-sub text-center '>( 팀원들의 대기업 진출도 목표하고 있어요 ...) <br/> 실제로 대기업 가신 분도 계셔요🫢</p>

                    

                    <div className='w-full'>
                        <FooterInfo title="지금, 새로운 팀원을 모집 중!" />
                    </div>
                </motion.div>
            }
        </WaitForImage>
        </div>
    </div>
    );
}

export default Introduction
