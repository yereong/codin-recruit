import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { MAILS } from "@/constants/mails"; 

export async function POST(req: Request) {
  try {
    const data = await req.json(); // 보내는 데이터 받기
    const { field, name, email, major, portfolioLink, intro1, intro2, intro3 } = data;

    // 메일 서버 세팅 
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS, 
      },
    });

    // 메일 내용
    await transporter.sendMail({
      from: `"코딘(Codin) 지원 담당자" <${process.env.GMAIL_USER}>`,
      to: email,  // 지원자가 쓴 이메일
      subject: "지원이 정상적으로 접수되었습니다!",
      text: `${name}님, 지원해주셔서 감사합니다.\n 되도록 빠른 시일 내, 메일과 문자를 통해 연락드릴게요. \n\n문의사항은 인스타그램 @codin_inu로 DM 부탁드립니다!`,
      html: `<br/> <img src="https://codin.inu.ac.kr/images/logo.png" style="width:130px;"/> <br/> <br/><p style="color:black"><strong>${name}</strong>님, 지원해주셔서 감사합니다. <br/> <span style="color:black"> 되도록 빠른 시일 내, 메일과 문자를 통해 연락드릴게요</span> <br/><br/> <span style="color:#3E83F9;">문의 사항, 인스타그램 @codin_inu </span> </p>`,
    });

    // 지원자 알림 메일 발송
    await transporter.sendMail({
      from: `"코딘(Codin) 지원 알림" <${process.env.GMAIL_USER}>`,
      bcc: MAILS.join(","), 
      subject: `[알림] 새로운 지원자 접수: ${name}`,
      text: `새로운 지원자가 접수되었습니다.\n지원파트: ${field}\n이름: ${name}\n이메일: ${email}\n학과/전공: ${major}\n포트폴리오: ${portfolioLink}\n\n문항1: ${intro1}\n문항2: ${intro2}\n문항3: ${intro3}`,
      html: `
        <div style="max-width:640px;margin:0 auto;padding:24px;
                    background:#222222;color:#f3f4f6;
                    border-radius:14px;font-family:'Segoe UI',Arial,sans-serif;">
          <h2 style="color:#EBF0F7;margin-bottom:16px;">
            📥 새로운 지원자가 접수되었습니다
          </h2>

          <table style="width:100%;border-collapse:collapse;
                        margin-top:12px;font-size:14px;">
            <tr style="background:#111827;">
              <td style="padding:10px;font-weight:bold;color:#9ca3af;">지원파트</td>
              <td style="padding:10px;color:#f3f4f6;">${field}</td>
            </tr>
            <tr style="background:#1f2937;">
              <td style="padding:10px;font-weight:bold;color:#9ca3af;width:120px;">이름</td>
              <td style="padding:10px;color:#f3f4f6;">${name}</td>
            </tr>
            <tr style="background:#111827;">
              <td style="padding:10px;font-weight:bold;color:#9ca3af;">이메일</td>
              <td style="padding:10px;color:#f3f4f6;">${email}</td>
            </tr>
            <tr style="background:#1f2937;">
              <td style="padding:10px;font-weight:bold;color:#9ca3af;">학과/전공</td>
              <td style="padding:10px;color:#f3f4f6;">${major || "-"}</td>
            </tr>
            <tr style="background:#111827;">
              <td style="padding:10px;font-weight:bold;color:#9ca3af;">포트폴리오</td>
              <td style="padding:10px;">
                ${
                  portfolioLink
                    ? `<a href="${portfolioLink}" target="_blank"
                          style="color:#0D99FF;text-decoration:none;">
                          ${portfolioLink}
                      </a>`
                    : "-"
                }
              </td>
            </tr>
          </table>

          <h3 style="margin-top:24px;color:#bbbbbb;">✍️ 자기소개 문항</h3>
          <ol style="padding-left:20px;line-height:1.6;color:#f3f4f6;font-size:14px;">
            <li><strong style="color:#9ca3af;">문항 1:</strong> ${intro1 || "-"}</li>
            <li><strong style="color:#9ca3af;">문항 2:</strong> ${intro2 || "-"}</li>
            <li><strong style="color:#9ca3af;">문항 3:</strong> ${intro3 || "-"}</li>
          </ol>

          <div style="margin-top:24px;padding:12px;border-top:1px solid #1f2937;
                      font-size:12px;color:#9ca3af;text-align:center;">
            Codin 운영진 전용 알림 메일
          </div>
        </div>
      `,
    });



    console.log("메일 전송 성공", email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("메일 전송 실패:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
