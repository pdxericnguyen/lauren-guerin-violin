import { Resend } from "resend";
import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);

      // Send email (Resend)
      const from = process.env.RESEND_FROM;
      const to = process.env.RESEND_TO;

      if (!from || !to || !process.env.RESEND_API_KEY) {
        return res.status(500).json({ error: "Email env vars not configured" });
      }

      await resend.emails.send({
        from,
        to,
        replyTo: input.email,
        subject: `New inquiry from ${input.name}`,
        text: `Name: ${input.name}\nEmail: ${input.email}\n\nMessage:\n${input.message}`,
      });

      // Try to store message (non-blocking if DB is off)
      try {
        await storage.createMessage(input);
      } catch (err) {
        console.warn("Message not stored (DB disabled):", err);
      }

      return res.status(201).json({ ok: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
