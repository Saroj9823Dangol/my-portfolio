import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email to yourself
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || "hello@sarojdangol012.com.np",
      to: process.env.CONTACT_EMAIL_TO || "mail.sarojdangol@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #667eea;
                margin-bottom: 5px;
              }
              .value {
                background: white;
                padding: 15px;
                border-radius: 5px;
                border-left: 3px solid #667eea;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                color: #6b7280;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🚀 New Contact Form Submission</h1>
              <p>Someone reached out through your portfolio!</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">From:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
            </div>
            <div class="footer">
              <p>Sent from your Solar System Portfolio Contact Form</p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Send confirmation email to the person who contacted you
    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || "hello@sarojdangol012.com.np",
      to: email,
      subject: "Thanks for reaching out! - Saroj Dangol",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                color: #6b7280;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>👋 Message Received!</h1>
            </div>
            <div class="content">
              <p>Hi ${name},</p>
              <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
              <p>In the meantime, feel free to check out my:</p>
              <ul>
                <li><a href="https://github.com/Saroj9823Dangol">GitHub Profile</a></li>
                <li><a href="https://linkedin.com/in/er-saroj-dangol-9492bb216">LinkedIn</a></li>
                <li><a href="https://www.upwork.com/freelancers/~01a78d9a0751fb1801">Upwork Profile</a></li>
              </ul>
              <p>Best regards,<br><strong>Saroj Dangol</strong><br>Fullstack Developer</p>
            </div>
            <div class="footer">
              <p>This is an automated confirmation from sarojdangol012.com.np</p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
