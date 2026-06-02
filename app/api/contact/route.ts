import nodemailer from "nodemailer";
import type { NextRequest } from "next/server";

const TO_EMAIL = "achung@bridge.edu.hk";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, message, requestDemo, demoDate1, demoDate2 } = body as any;

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return new Response(JSON.stringify({ error: "SMTP not configured. Set SMTP_HOST/SMTP_USER/SMTP_PASS." }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `Website contact from ${firstName || ""} ${lastName || ""}`;

    const html = `<div>
      <h3>New contact submission</h3>
      <p><strong>Name:</strong> ${firstName || ""} ${lastName || ""}</p>
      <p><strong>Email:</strong> ${email || ""}</p>
      <p><strong>Company:</strong> ${company || ""}</p>
      <p><strong>Request Demo:</strong> ${requestDemo ? "Yes" : "No"}</p>
      <p><strong>Preferred Dates:</strong> ${demoDate1 || ""} ${demoDate2 || ""}</p>
      <p><strong>Message:</strong><br/>${(message || "").replace(/\n/g, "<br/>")}</p>
    </div>`;

    await transporter.sendMail({
      from: smtpUser,
      to: TO_EMAIL,
      subject,
      html,
      replyTo: email || undefined,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: err?.message || "Server error" }), { status: 500 });
  }
}
