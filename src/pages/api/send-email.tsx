// pages/api/send-email.js

import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    let transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    try {
      let info = await transporter.sendMail({
        from: `"Yogesh Kumar" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `Contact Request from ${name}`,
        text: `${message} \n\n\n From: ${email}`,
      });

      console.log("Message sent: %s", info.messageId);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email: ", error);
      res
        .status(500)
        .json({ success: false, message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
