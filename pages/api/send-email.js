import nodemailer from "nodemailer";

export default async function handler(req, res) {
    const { email, captchaToken } = req.body;

    const secretKey = "6LfsXKQrAAAAAOCb60_dNr9AJWOfoIkyMVla7xPU";
    const captchaVerifyRes = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`,
        { method: "POST" }
    );
    const captchaData = await captchaVerifyRes.json();

    if (!captchaData.success) {
        return res.status(400).json({ message: "CAPTCHA verification failed" });
    }
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }


    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: "mail.zer0q.com",
            port: 465,
            secure: true,
            auth: {
                user: "info@zer0q.com",
                pass: "Techificent_123",
            },
        });

        const ip =
            req.headers["x-forwarded-for"] || req.connection.remoteAddress || "N/A";

        await transporter.sendMail({
            from: `"Website Contact" <info@zer0q.com>`,
            to: "info@zer0q.com",
            subject: "New Contact Form Submission",
            html: `
        <h2>New Contact Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>IP:</strong> ${ip}</p>
      `,
        });

        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to send email" });
    }
}
