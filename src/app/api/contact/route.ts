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
    const tableRows = `
      <tr><td style="padding:8px 0;color:#7C7263;width:160px;vertical-align:top">Name</td><td style="padding:8px 0;font-weight:500">${name}</td></tr>
      <tr><td style="padding:8px 0;color:#7C7263;vertical-align:top">Email</td><td style="padding:8px 0">${email}</td></tr>
      ${org ? `<tr><td style="padding:8px 0;color:#7C7263;vertical-align:top">Organization</td><td style="padding:8px 0">${org}</td></tr>` : ""}
      ${detail ? `<tr><td style="padding:8px 0;color:#7C7263;vertical-align:top">${isSupport ? "Priority" : "Nature"}</td><td style="padding:8px 0">${detail}</td></tr>` : ""}
      <tr><td style="padding:8px 0;color:#7C7263;vertical-align:top;border-top:1px solid #E4D9C2">${isSupport ? "Issue" : "Message"}</td><td style="padding:8px 0;border-top:1px solid #E4D9C2;white-space:pre-wrap">${message}</td></tr>
    `;

    // Notify the team
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
          <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6">${tableRows}</table>
        </div>
      `,
    });

    // Confirmation to sender
    await resend.emails.send({
      from: "Niora Systems <no-reply@info.niorasystems.com>",
      to: email,
      subject: `We received your ${isSupport ? "support request" : "inquiry"} — Niora Systems`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:580px;margin:0 auto;color:#2A2521">
          <h2 style="font-family:Georgia,serif;font-size:24px;font-weight:400;line-height:1.2;margin:0 0 14px;color:#28231E">
            Thank you, ${name.split(" ")[0]} — your ${isSupport ? "request" : "message"} is on its way.
          </h2>
          <p style="font-size:16px;line-height:1.6;color:#4C463D;margin:0 0 24px">
            ${isSupport
              ? "Our support team will review your request and reply to this address as soon as possible. For urgent issues, you can also reach us directly at <a href=\"mailto:support@niorasystems.com\" style=\"color:#8E6C2E\">support@niorasystems.com</a>."
              : "Our team will review your inquiry and reply to this address within two business days. If your matter is time-sensitive, you can reach us directly at <a href=\"mailto:operations@niorasystems.com\" style=\"color:#8E6C2E\">operations@niorasystems.com</a>."}
          </p>
          <div style="background:#F9F6EF;border-radius:10px;padding:20px 24px;margin:0 0 22px">
            <p style="font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#9A8E73;margin:0 0 14px">Your submission</p>
            <table style="width:100%;border-collapse:collapse;font-size:14.5px;line-height:1.6">${tableRows}</table>
          </div>
          <p style="font-size:13px;color:#9A8E73;border-top:1px solid #E4D9C2;padding-top:16px;margin:0">Niora Systems · Accra · Stanford</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
