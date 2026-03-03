"use client";

import { RECUITMENT_START_DATE, RECRUITMENT_END_DATE } from "@/constants/recruitment";
import { MAX_LAYOUT_WIDTH } from "@/constants/layout";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
      <footer className="w-full flex justify-between items-center px-4 sm:px-8 py-6">
        <div className="text-[12px] text-sub opacity-55">
        </div>
        <div className="flex flex-col">
          <div id="logoAndInfo" className="flex gap-4 mb-4">
              <div id="Info" className="flex flex-col text-[12px] text-sub opacity-66 text-end">
                  <p>Instagram. <b>@codin_inu</b></p>
                  <p>DM으로 궁금하신 사항을 질문해주세요</p>
              </div>
              <Image
                id="logo"
                src="/logo/inu.webp"
                alt="인천대학교 로고"
                width={120}
                height={60}
                className="opacity-66 w-[80px] sm:w-[120px] h-auto object-contain"
              />
          </div>
          <div id="tossInfo" className="flex text-[12px] text-sub opacity-33 text-end">
          </div>
        </div>
      </footer>
    );
  }
  
export default Footer;