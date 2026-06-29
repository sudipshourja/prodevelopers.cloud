import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, needs, projectId } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Load environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const senderEmail = process.env.SENDER_EMAIL || "system@prodevelopers.cloud";
    const recipientEmail = process.env.RECIPIENT_EMAIL || "sales@prodevelopers.tech";

    // 1. Console Log the lead data for local development visibility
    console.log("=========================================");
    console.log("📥 NEW GATED DEMO LEAD CAPTURED");
    console.log(`👤 Name:      ${name}`);
    console.log(`📧 Email:     ${email}`);
    console.log(`📞 Phone:     ${phone || "None specified"}`);
    console.log(`🏢 Company:   ${company || "None specified"}`);
    console.log(`🛠️ Project:   ${projectId || "General"}`);
    console.log(`📝 Needs:     ${needs || "None specified"}`);
    console.log("=========================================");

    // 2. If credentials are missing, fail gracefully with console log fallback
    if (!gmailUser || !gmailAppPassword) {
      console.warn("⚠️ GMAIL_USER or GMAIL_APP_PASSWORD is not configured in .env. Falling back to local logging.");
      return NextResponse.json({ 
        success: true, 
        message: "Lead captured successfully (local logging fallback)." 
      });
    }

    // 3. Create SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL/TLS
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // 4. Construct a beautiful, responsive HTML email body
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New prodevelopers Lead</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            background-color: #0a0a0a;
            color: #e5e5e5;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #121212;
            border: 1px solid #1f1f1f;
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          }
          .header {
            background: linear-gradient(135deg, #1e1b4b 0%, #311042 100%);
            padding: 30px 40px;
            border-bottom: 1px solid #1f1f1f;
          }
          .header-title {
            margin: 0;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            color: #a855f7;
            font-family: monospace;
            font-weight: 600;
          }
          .header-headline {
            margin: 10px 0 0 0;
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: -0.02em;
          }
          .content {
            padding: 40px;
          }
          .grid {
            display: grid;
            grid-template-cols: 1fr;
            gap: 20px;
            margin-bottom: 30px;
          }
          .grid-item {
            border-bottom: 1px solid #1a1a1a;
            padding-bottom: 15px;
          }
          .grid-item:last-child {
            border-bottom: none;
          }
          .label {
            font-family: monospace;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #525252;
            margin-bottom: 5px;
            display: block;
          }
          .value {
            font-size: 15px;
            color: #fafafa;
            font-weight: 500;
          }
          .value a {
            color: #a855f7;
            text-decoration: none;
          }
          .value a:hover {
            text-decoration: underline;
          }
          .needs-box {
            background-color: #0d0d0d;
            border-left: 3px solid #a855f7;
            padding: 20px;
            border-radius: 2px;
            margin-top: 10px;
          }
          .needs-text {
            margin: 0;
            font-size: 14px;
            color: #d4d4d4;
            white-space: pre-wrap;
            font-style: italic;
          }
          .footer {
            background-color: #090909;
            padding: 20px 40px;
            border-top: 1px solid #111111;
            text-align: center;
          }
          .footer-text {
            font-family: monospace;
            font-size: 9px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: #404040;
            margin: 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="header-title">prodevelopers.cloud gateway</span>
            <h1 class="header-headline">New Lead: Demo Unlocked</h1>
          </div>
          <div class="content">
            <div class="grid">
              <div class="grid-item">
                <span class="label">Project Demo</span>
                <span class="value" style="color: #a855f7;">${projectId || "CCTV Cloud VMS"}</span>
              </div>
              <div class="grid-item">
                <span class="label">Contact Name</span>
                <span class="value">${name}</span>
              </div>
              <div class="grid-item">
                <span class="label">Email Address</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="grid-item">
                <span class="label">Phone Number</span>
                <span class="value">${phone ? phone : "Not provided"}</span>
              </div>
              <div class="grid-item">
                <span class="label">Company / Organization</span>
                <span class="value">${company ? company : "Not provided"}</span>
              </div>
            </div>
            
            <span class="label">Custom Modifications & Needs</span>
            <div class="needs-box">
              <p class="needs-text">${needs ? needs : "No specific custom needs or modifications requested."}</p>
            </div>
          </div>
          <div class="footer">
            <p class="footer-text">© 2026 prodevelopers — automated secure lead dispatch</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // 5. Send Mail
    await transporter.sendMail({
      from: `prodevelopers Portal <${senderEmail}>`,
      to: recipientEmail,
      subject: `🔥 New Lead: Demo Unlocked by ${name}${company ? ` (${company})` : ""}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("❌ API Route Error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
