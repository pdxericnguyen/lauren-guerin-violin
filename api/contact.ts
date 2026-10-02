import { Resend } from "resend";
import { api } from "../shared/routes";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const inputResult = api.contact.submit.input.safeParse(req.body);
  if (!inputResult.success) {
    const issue = inputResult.error.errors[0];
    return res.status(400).json({
      message: issue.message,
      field: issue.path.join("."),
    });
  }

  const resendApiKey = process.env.RESEND_API_KEY ?? process.env.RESEND_KEY ?? "";
  const resendFrom = process.env.RESEND_FROM ?? process.env.RESEND_FROM_EMAIL ?? "";
  const resendTo =
    process.env.RESEND_TO ??
    process.env.RESEND_TO_EMAIL ??
    process.env.CONTACT_TO_EMAIL ??
    "";

  const missing: string[] = [];
  if (!resendApiKey) missing.push("RESEND_API_KEY");
  if (!resendFrom) missing.push("RESEND_FROM");
  if (!resendTo) missing.push("RESEND_TO");

  if (missing.length > 0) {
    return res.status(500).json({
      message: "Email env vars not configured",
      missing,
    });
  }

  const resend = new Resend(resendApiKey);

  const { error } = await resend.emails.send({
    from: resendFrom,
    to: resendTo,
    reply_to: inputResult.data.email,
    subject: `New inquiry from ${inputResult.data.name}`,
    text: `Name: ${inputResult.data.name}\nEmail: ${inputResult.data.email}\n\nMessage:\n${inputResult.data.message}`,
  });

  if (error) {
    return res.status(500).json({ message: "Email failed", error: error.message });
  }

  return res.status(201).json({ ok: true });
}
