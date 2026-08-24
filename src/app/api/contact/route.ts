import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { purpose, name, email, org, detail, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const isSupport = purpose === "support";
  const toAddress = isSupport ? "support@niorasystems.com" : "operations@niorasystems.com";
  const subjectPrefix = isSupport ? "Support request" : "General inquiry";
  const fromName = isSupport ? "Niora Support" : "Niora Contact";

  try {
    await resend.emails.send({
      from: `${fromName} <no-reply@info.niorasystems.com>`,
      to: toAddress,
      replyTo: email,
      subject: `${subjectPrefix}: ${name} — ${org || "no org"}`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;color:#2A2521">
          <h2 style="font-size:22px;font-weight:600;margin:0 0 20px;border-bottom:1px solid #E4D9C2;padding-bottom:14px">
            ${isSupport ? "New support request" : "New contact inquiry"}
          </h2>
          <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6">
            <tr><td style="padding:8px 0;color:#7C7263;width:160px;vertical-align:top">Name</td><td style="padding:8px 0;font-weight:500">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#7C7263;vertical-align:top">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#8E6C2E">${email}</a></td></tr>
            ${org ? `<tr><td style="padding:8px 0;color:#7C7263;vertical-align:top">Organization</td><td style="padding:8px 0">${org}</td></tr>` : ""}
            ${detail ? `<tr><td style="padding:8px 0;color:#7C7263;vertical-align:top">${isSupport ? "Priority" : "Nature"}</td><td style="padding:8px 0">${detail}</td></tr>` : ""}
            <tr><td style="padding:8px 0;color:#7C7263;vertical-align:top;border-top:1px solid #E4D9C2">${isSupport ? "Issue" : "Message"}</td><td style="padding:8px 0;border-top:1px solid #E4D9C2;white-space:pre-wrap">${message}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
