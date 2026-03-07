import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM || !process.env.RESEND_TO) {
    return res.status(500).json({ message: "Email env vars not configured" });
  }

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM,
    to: process.env.RESEND_TO,
    reply_to: email,
    subject: `New inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    return res.status(500).json({ message: "Email failed", error: error.message });
  }

  return res.status(201).json({ ok: true });
}
