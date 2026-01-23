import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {  email, phone, message,name } = data;

    // --- GODADDY PROFESSIONAL EMAIL CONFIGURATION ---
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",  // The correct host for GoDaddy Webmail
      port: 465,
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Subject line changes based on which form was used
  
    const subjectTitle =  `Contact enquiry`;

    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: process.env.EMAIL_USER,   
      replyTo: email,
      subject: subjectTitle,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2563eb;">${subjectTitle}</h2>
          
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            
           
         
          </div>

          <div style="margin-top: 20px;">
            <strong>Message:</strong><br/>
            <p style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin-top: 5px;">
              ${message}
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}