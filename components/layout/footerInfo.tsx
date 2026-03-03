"use client";
import Image from "next/image";
interface RecruitInfoProps {
    title? : string,
}
interface RecuitInfoItemProps{
    titleEN : string,
    titleKR : string,
    explain : string,
    iconPATH? : string,
    isActive? : boolean,
    onclick? : () => void,
    link? : string,
}

import { RECUITMENT_START_DATE, RECRUITMENT_END_DATE, RECUITMENT_PARTS } from "@/constants/recruitment";
import { useRouter } from "next/navigation";
import BackGroundBlur from "../common/backgroundBlur";
import { useState } from "react";
import Footer from "./footer";

const FooterInfoItem: React.FC<RecuitInfoItemProps> = ({titleEN, titleKR, explain, iconPATH, isActive, onclick, link}) =>{
    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div className="flex flex-col justify-center items-center">
            <button onClick={onclick} onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => setIsHovered(false)}
                id="RecuitInfoContainer" className="flex flex-col w-full justify-start items-center">
                
                <div id="RecuitInfoItem" className={"w-full rounded-4xl bg-[rgba(217,217,217,0.06)] border-2 border-[rgba(255,255,255,0.06)] transition-transform duration-500 "
                    +(isActive ? "bg-[rgba(217,217,217,0.18)] py-4 px-[24px]" : isHovered ? "bg-[rgba(217,217,217,0.24)] py-4 px-10" : "py-4 px-10" )}
                    style={{ boxShadow: '0 4px 10px rgba(255, 255, 255, 0.06)' }}>
                    
                    <h1 id="RecuitPartName" className={"font-title font-light flex justify-center items-center "
                        + ((isActive) ? "gap-[9px]":"gap-[6px]")}>
                        <span className="text-sub">{titleEN}</span>{" "}{titleKR}{" "}
                        {iconPATH && (
                          <Image
                            src={iconPATH}
                            alt=""
                            width={32}
                            height={32}
                            className={"w-[32px] h-[32px] "+ ((isActive) ? "":"hidden")}
                          />
                        )}
                    </h1>
                </div>
            </button>
            
            <p className={"font-subtitle font-light text-sub mt-0 mb-0 transition-all duration-500 delay-100 "+ (isActive ? "mt-6" : "max-h-0 opacity-0")}> {explain} </p>
            <button onClick={()=>{router.push("/parts/"+link)}} className={"inline font-gradient font-subtitle font-light transition-all duration-500 delay-100 "+ (isActive ? "mt-4 mb-4" : "max-h-0 opacity-0")}> {"모집 페이지 확인하기 >"}</button>
        </div>
    )
}

const FooterInfo: React.FC<RecruitInfoProps> = ({title}) => {
  const [activeItemIdx, setActiveItemIdx] = useState<number>(-1);

    return (
        <div className="flex flex-col items-center justify-start relative">

            <div className="flex flex-col items-center justify-center w-full h-[66vh] sm:h-screen absolute translate-y-[60%]">
                <BackGroundBlur/>
            </div> 


            <div className="flex justify-end items-center pr-[50%] mt-36 ">
                <Image
                  src="/images/recruitingDeco.png"
                  alt="리크루팅 장식"
                  width={327}
                  height={200}
                  className="hidden sm:block w-[327px] h-auto translate-x-[95%] opacity-0"
                />
            </div>

            <div className="flex flex-col items-center mt-6 sm:mt-12">
                <p  id="mainInfoTitle" 
                    className="mt-9 font-titleMega font-medium font-gradient slow"
                    style={{ textShadow: '0 0 12px rgba(255, 255, 255, 0.33)' }}>{title}</p>
            </div>

            <div className="flex flex-col gap-4 mt-16 w-max z-10">
                { RECUITMENT_PARTS.map((part, index)=>(
                    <FooterInfoItem key={index} onclick={()=>{setActiveItemIdx(index);}} isActive={index===activeItemIdx} titleEN={part.titleEN} titleKR={part.titleKR} explain={part.explain} iconPATH={part.iconPATH} link={part.link}/>
                ))}
            </div>
            <div className="w-full mt-52 sm:mt-82">
                <Footer/>
            </div>
        </div>
    );
  }
  
export default FooterInfo;