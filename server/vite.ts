import type { Express } from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs/promises";

const projectRoot = process.cwd();
const clientRoot = path.resolve(projectRoot, "client");
const viteConfigFile = path.resolve(projectRoot, "vite.config.ts");

export async function setupVite(_httpServer: any, app: Express) {
  // Use the repo-level Vite config so aliases like "@" work in middleware mode.
  const vite = await createViteServer({
    configFile: viteConfigFile,
    root: clientRoot,
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  // Serve index.html for all non-API routes in development
  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;

      const indexPath = path.resolve(clientRoot, "index.html");
      let template = await fs.readFile(indexPath, "utf-8");

      template = await vite.transformIndexHtml(url, template);

      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e: any) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
