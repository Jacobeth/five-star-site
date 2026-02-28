import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuoteRequestSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/quote-requests", async (req, res) => {
    const parsed = insertQuoteRequestSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: fromError(parsed.error).toString() });
    }
    const result = await storage.createQuoteRequest(parsed.data);
    return res.status(201).json(result);
  });

  return httpServer;
}
