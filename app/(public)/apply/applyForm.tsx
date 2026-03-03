"use client";
import { RECUITMENT_PARTS } from "@/constants/recruitment";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const ApplyForm = () => {

    const router = useRouter();

    const searchParams = useSearchParams();
    const partParam = searchParams.get("part");

    useEffect(() => {
        if (partParam) {
        const matched = RECUITMENT_PARTS.find(p => p.titleKR === partParam);
        if (matched) {
            setFormData(prev => ({ ...prev, field: matched.titleKR }));
        }
        }
    }, [partParam]);

    const [formData, setFormData] = useState({
        field: "",
        name: "",
        phone: "",
        email: "",
        school: "",
        degree: "",
        major: "",
        portfolioLink: "",
        intro1: "",
        intro2: "",
        intro3: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        const { field, name, phone, email, school, degree, major, portfolioLink, intro1, intro2, intro3 } = formData;
        if (!field || !name || !phone || !email || !school || !degree || !intro1 || !intro2 || !intro3) {
        alert("필수 항목을 모두 입력해 주세요.");
        return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("올바른 이메일 형식을 입력해 주세요.");
            return;
        }

        setIsSubmitting(true);

        const formDataToSend = new FormData();
        formDataToSend.append("entry.394809328", field);
        formDataToSend.append("entry.150981278", name);
        formDataToSend.append("entry.671001125", phone);
        formDataToSend.append("entry.893830862", email);
        formDataToSend.append("entry.214807255", school);
        formDataToSend.append("entry.443179587", degree);
        formDataToSend.append("entry.71099981", major);
        formDataToSend.append("entry.1527243977", intro1);
        formDataToSend.append("entry.1367446607", intro2);
        formDataToSend.append("entry.1467220363", intro3);
        formDataToSend.append("entry.1673827273", portfolioLink);

        try {
        
        /* 구글 폼 제출 */
        await fetch("https://docs.google.com/forms/d/e/1FAIpQLSdEsxKvuU541xOZt003OyObTHAwTszeYQ3l801l-SJzo_ahwA/formResponse", {
            method: "POST",
            mode: "no-cors",
            body: formDataToSend,
        });

        /* 메일 보내기 */
        await fetch("/api/send-success-mail", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, major, portfolioLink, intro1, intro2, intro3 }),  
        });

        /* 제출 완료 */
        setIsSubmitting(false);
        router.push("/apply/success");
        
        } catch (error) {
        setIsSubmitting(false);
        console.error(error);
        alert("제출 실패. 다시 시도해주세요.");
        }
    };

    return (
        <div className="max-w-[720px] mx-auto py-20 px-6 text-white">
        <h1 className="text-4xl font-bold mb-16">지원서 작성</h1>

        {/* 지원 분야 */}
        <div className="mb-10">
            <label className="block font-semibold mb-3">
            지원 분야 <span className="text-sky-500">*</span>
            </label>
            <select name="field" value={formData.field} onChange={handleChange} className="appearance-none w-full bg-[#0a0a0a] border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3">
            <option value="">선택하세요</option>
            {RECUITMENT_PARTS.map((part, index) => (
                <option key={index}>{part.titleKR}</option>
            ))}
            </select>
        </div>

        {/* 성함 / 연락처 / 이메일 */}
        <div className="mb-10">
            <label className="block font-semibold mb-3">
            성함 / 연락처 / 이메일 <span className="text-sky-500">*</span>
            </label>
            <input name="name" type="text" placeholder="홍길동" value={formData.name} onChange={handleChange} className="appearance-none w-full bg-[#0a0a0a] border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 mb-3" />
            <input name="phone" type="text" placeholder="010-1234-5678" value={formData.phone} onChange={handleChange} className="appearance-none w-full bg-[#0a0a0a] border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 mb-3" />
            <input name="email" type="email" placeholder="example@inu.ac.kr" value={formData.email} onChange={handleChange} className="appearance-none w-full bg-[#0a0a0a] border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3" />
        </div>

        {/* 학교 / 최종 학력 */}
        <div className="mb-10">
            <label className="block font-semibold mb-3">
            학교 / 최종 학력 <span className="text-sky-500">*</span>
            </label>
            <input name="school" type="text" placeholder="코딩대학교" value={formData.school} onChange={handleChange} className="appearance-none w-full bg-[#0a0a0a] border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 mb-3" />
            <select name="degree" value={formData.degree} onChange={handleChange} className="appearance-none w-full bg-[#0a0a0a] border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 mb-3">
            <option value="">선택하세요</option>
            <option>재학 중이에요</option>
            <option>휴학 중이에요</option>
            <option>졸업 예정이에요</option>
            <option>이미 졸업했어요</option>
            </select>
        </div>

        {/* 전공명 */}
        <div className="mb-10">
            <label className="block font-semibold mb-3">전공명</label>
            <input name="major" type="text" placeholder="컴퓨터공학부" value={formData.major} onChange={handleChange} className="appearance-none w-full bg-[#0a0a0a] border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3" />
        </div>

        {/* 자기소개서 질문 3개 */}
        <div className="mb-10">
            <label className="block font-semibold mb-2">
            1. 학교 생활 중 가장 열정을 쏟았던 활동은 무엇이며, 어떤 역할을 맡았는지 서술해주세요.<span className="text-sky-500">*</span> <span className="text-sub">({formData.intro1.length? " "+formData.intro1.length+" / " : " "}300자 이내)</span>
            </label>
            <textarea name="intro1" value={formData.intro1} onChange={handleChange} maxLength={300} className="appearance-none w-full bg-[#0a0a0a] border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 h-40" />
        </div>

        <div className="mb-10">
            <label className="block font-semibold mb-2">
            2. 협업 과정에서, 갈등을 해결하기 위한 본인만의 방식이 있다면 서술해주세요.<span className="text-sky-500">*</span> <span className="text-sub">({formData.intro2.length? " "+formData.intro2.length+" / " : " "}300자 이내)</span>
            </label>
            <textarea name="intro2" value={formData.intro2} onChange={handleChange} maxLength={300} className="appearance-none w-full bg-[#0a0a0a] border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 h-40" />
        </div>

        <div className="mb-10">
            <label className="block font-semibold mb-2">
            3. 선택하신 분야에서, 역량을 높이기 위해 노력하신 경험이 있다면 서술해주세요.<span className="text-sky-500">*</span><span className="text-sub">({formData.intro3.length? " "+formData.intro3.length+" / " : " "}300자 이내)</span>
            </label>
            <textarea name="intro3" value={formData.intro3} onChange={handleChange} maxLength={300} className="appearance-none w-full bg-[#0a0a0a] border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3 h-40" />
        </div>

        {/* 포트폴리오 */}
        <div className="mb-16">
            <label className="block font-semibold mb-4">
            포트폴리오
            </label>
            <p className="text-sm mb-4">
            지원자 분의 경험이 드러나는 '링크'를 자유롭게 첨부해주세요<br/>
            <span className="text-gray-400 pt-2">여러 개 첨부 시 ( , )로 구분해주세요.  </span>
            </p>
            <input name="portfolioLink" type="url" placeholder="노션, 구글 드라이브, 깃허브, pdf파일 링크 ... " value={formData.portfolioLink} onChange={handleChange} className="appearance-none w-full bg-[#0a0a0a] border border-[rgba(224,241,254,0.5)] rounded-lg px-4 py-3" />
        </div>

        <button type="button" disabled={isSubmitting} onClick={handleSubmit} className="w-full py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-xl font-semibold hover:bg-sky-600 transition disabled:cursor-not-allowed disabled:opacity-50">
            {isSubmitting ? "제출 중입니다..." : "제출하기"}
        </button>
        
        </div>
    );
    };

export default ApplyForm;
