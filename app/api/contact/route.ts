import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, email, message } = body;

        // Validate fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        const apiKey = process.env.RESEND_API_KEY;
        const contactEmail = process.env.CONTACT_EMAIL;

        console.log("Attempting to send email...");
        console.log("API Key present:", !!apiKey);
        console.log("Target Email:", contactEmail);
        console.log("From: Narmadha Fashion Home <onboarding@resend.dev>");

        if (!apiKey || !contactEmail) {
            console.error("Missing Environment Variables");
            return NextResponse.json(
                { message: "Server misconfiguration: Missing invalid env vars" },
                { status: 500 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "Narmadha Fashion Home <onboarding@resend.dev>",
            to: [contactEmail],
            replyTo: email,
            subject: `New Enquiry from ${name}`,
            html: `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return NextResponse.json({ success: false, error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Server Error:", error);
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
