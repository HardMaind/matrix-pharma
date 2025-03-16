import nodemailer from "nodemailer";
import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/uploads";
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: "Error parsing form data" });
    }

    const { name, location, email, phone } = fields;
    const cvFile = files.cv;

    // Configure Nodemailer
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Add this in .env.local
        pass: process.env.EMAIL_PASS, // Add this in .env.local
      },
    });

    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: "your-email@example.com",
      subject: "New Career Form Submission",
      text: `Name: ${name}\nLocation: ${location}\nEmail: ${email}\nPhone: ${phone}`,
      attachments: [
        {
          filename: cvFile.originalFilename,
          content: fs.createReadStream(cvFile.filepath),
        },
      ],
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Application submitted successfully!" });
    } catch (error) {
      return res.status(500).json({ message: "Failed to send email" });
    }
  });
}
