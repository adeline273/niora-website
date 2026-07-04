import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, org, orgType, role, country, orgSize, useCase, referral } = body;

  const required = { name, email, org, orgType, role, country, orgSize, useCase };
  for (const [key, val] of Object.entries(required)) {
    if (!val || !String(val).trim()) {
      return NextResponse.json({ error: `Missing field: ${key}` }, { status: 400 });
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  try {
    // Notify operations team
    await resend.emails.send({
      from: "Niora Access Requests <no-reply@niorasystems.com>",
      to: "operations@niorasystems.com",
      replyTo: email,
      subject: `Access request: ${name} — ${org}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;color:#2A2521">
          <h2 style="font-size:22px;font-weight:600;margin:0 0 20px;border-bottom:1px solid #E4D9C2;padding-bottom:14px">New platform access request</h2>
          <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6">
            <tr><td style="padding:8px 0;color:#7C7263;width:160px;vertical-align:top">Full name</td><td style="padding:8px 0;font-weight:500">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#7C7263;vertical-align:top">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#8E6C2E">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#7C7263;vertical-align:top">Organization</td><td style="padding:8px 0">${org}</td></tr>
            <tr><td style="padding:8px 0;color:#7C7263;vertical-align:top">Org type</td><td style="padding:8px 0">${orgType}</td></tr>
            <tr><td style="padding:8px 0;color:#7C7263;vertical-align:top">Role / title</td><td style="padding:8px 0">${role}</td></tr>
            <tr><td style="padding:8px 0;color:#7C7263;vertical-align:top">City &amp; country</td><td style="padding:8px 0">${country}</td></tr>
            <tr><td style="padding:8px 0;color:#7C7263;vertical-align:top">People served</td><td style="padding:8px 0">${orgSize}</td></tr>
            <tr><td style="padding:8px 0;color:#7C7263;vertical-align:top;border-top:1px solid #E4D9C2">Use case</td><td style="padding:8px 0;border-top:1px solid #E4D9C2;white-space:pre-wrap">${useCase}</td></tr>
            ${referral ? `<tr><td style="padding:8px 0;color:#7C7263;vertical-align:top">Referral</td><td style="padding:8px 0">${referral}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    // Confirmation to applicant
    await resend.emails.send({
      from: "Niora Systems <no-reply@niorasystems.com>",
      to: email,
      subject: "We received your access request — Niora Systems",
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;color:#2A2521">
          <h2 style="font-family:Georgia,serif;font-size:24px;font-weight:400;line-height:1.2;margin:0 0 18px;color:#28231E">Your request has been received, ${name.split(" ")[0]}.</h2>
          <p style="font-size:16px;line-height:1.6;color:#4C463D;margin:0 0 16px">Thank you for applying for access to the Niora platform. Our team will review your organization's eligibility and reply to this address within two business days.</p>
          <p style="font-size:16px;line-height:1.6;color:#4C463D;margin:0 0 24px">If your request is time-sensitive, you can reach our operations team directly at <a href="mailto:operations@niorasystems.com" style="color:#8E6C2E">operations@niorasystems.com</a>.</p>
          <p style="font-size:14px;color:#9A8E73;border-top:1px solid #E4D9C2;padding-top:16px;margin:0">Niora Systems · Accra · San Francisco</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
