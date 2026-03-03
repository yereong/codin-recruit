import { JSX } from "react";

export const RECUITMENT_START_DATE = "26.03.04" as const;
export const RECRUITMENT_END_DATE = "26.03.13" as const;

/* 파트 별 정보 */
export const RECUITMENT_PARTS = [
    {
      simple: "기획/PM",
      titleEN: "Project Manager",
      titleKR: "기획 및 총괄",
      explain: "창의적인 아이디어를 바탕으로 다양한 기능을 기획하고 전반적인 앱 서비스를 운영해요",
      iconPATH: "/icons/recruitParts/pmIcon.png",
      link: "pm",
    },
    {
      simple: "디자이너",
      titleEN: "UI/UX Designer",
      titleKR: "디자이너",
      explain: "UX, UI 경험을 설계하고 포토샵, 일러스트레이터를 활용해 홍보물 디자인을 제작해요. ",
      iconPATH: "/icons/recruitParts/designerIcon.png",
      link: "designer",
    },
    {
      simple: "프론트엔드",
      titleEN: "FE Developer",
      titleKR: "프론트엔드 개발자",
      explain: "사용자에게 보여질 화면과 상호작용을 설계하고 구현해요",
      iconPATH: "/icons/recruitParts/developerIcon.png",
      link: "frontend",
    },
    {
      simple: "백엔드",
      titleEN: "BE Developer",
      titleKR: "백엔드 개발자",
      explain: "데이터를 설계하고 서버 API를 구현해요",
      iconPATH: "/icons/recruitParts/developerIcon.png",
      link: "backend",
    },
    {
      simple: "마케팅",
      titleEN: "Marketing",
      titleKR: "마케팅",
      explain: "SNS 콘텐츠를 기획하고, 코딘을 대외적으로 알리기 위한 협력 및 홍보 활동을 진행해요",
      iconPATH: "/icons/recruitParts/developerIcon.png",
      link: "marketing",
    },
] as const;


export interface Requirement {
  link: string;
  skill: string;
  requirements: JSX.Element[];
}

export const COMMON_REQUIREMENTS : Requirement = {
  link: "",
  skill: "",
  requirements: [
    <span><span className="text-sub">코딘 활동에 </span>성실하게 참여<span className="text-sub">하실 분</span></span>,
    <span><span className="text-sub">매 주</span> 비대면 회의<span className="text-sub">에 참여 가능한 분</span></span>,
    <span><span className="text-sub">매 달 1회</span> 대면 회의<span className="text-sub">에 참여 가능한 분</span></span>,
    <span><span className="text-sub">지원하신 파트에 대한 경험이 있으신 분은 가산점이 부여돼요.</span></span>
  ],
}

export const JOINING_PROCESS : JSX.Element = <span className="text-sub">{"서류 지원 > 1차 합격 > 면접 진행 > 최종 합류 및 수습 기간"} </span>


export const PARTS_REQUIREMENTS : Requirement[] = [
  {
    link: "pm",
    skill: "Notion, figma, 파워포인트 등",
    requirements: [
      <span>서비스/기능 기획 <span className="text-sub">및</span> 사용자 흐름 설계<span className="text-sub">에 관심 있는 분</span></span>,
      <span>서비스 기획자<span className="text-sub">를 희망 진로로 삼는 분</span></span>,
      <span><span className="font-gradient">실제 출시된 서비스 경험이 있으면 좋아요</span></span>,
      <span>figma, notion 툴 사용 경험이 있으신 분<span className="text-sub">은 가산점이 부여돼요.</span></span>
    ],
  },
  {
    link: "designer",
    skill: "Figma, 포토샵, 일러스트레이터 등",
    requirements: [
      <span>UI/UX 디자인 프로젝트 경험 <span className="text-sub">이 있으신 분</span></span>,
      <span>UI/UX 디자이너를<span className="text-sub"> 희망 진로로 삼는 분</span></span>,
      <span><span className="font-gradient">Figma와 같은 디자인 툴 사용이 가능하신 분이면 가산점이 부여돼요.</span></span>,
    ],
  },
  {
    link: "frontend",
    skill: "Next.js, ReactNative, Tailwind, typescript 등",
    requirements: [
      <span>배우고자 하는 열정과 끈기<span className="text-sub">가 있으신 분</span></span>,
      <span>협업을 통해 성장하고자<span className="text-sub">하는 분</span></span>,
      <span >프론트엔드 파트는 <span className="text-sub font-gradient">매주 스터디</span>를 진행 할 예정이에요! </span>,
      <span >성실하게 참여하실 분이라면 <span className="font-gradient">개발 지식이 없더라도 지원하실 수 있어요!</span></span>,
    ],
  },
  {
    link: "backend",
    skill: "Spring, Redis, MongoDB, MySQL, Docker 등",
    requirements: [
      <span>Github를 활용한 협업<span className="text-sub">이 가능하신 분</span></span>,
      <span>Spring Boot 기반의<span className="text-sub"> 개발이 가능하신 분</span></span>,
      <span className="font-gradient">협업 프로젝트 경험이 있으신 분</span>,
    ],
  },
  {
    link: "marketing",
    skill: "Instagram, Facebook, Youtube 등",
    requirements: [
      <span>마케팅 전문가를<span className="text-sub"> 희망 진로로 삼는 분</span></span>,
      <span className="font-gradient">SNS 콘텐츠 제작 경험이 있으신 분<span className="text-sub">은 가산점이 부여돼요.</span></span>,
    ],
  },
];

