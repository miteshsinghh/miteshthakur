import { UMAMI_ORIGIN } from "@/lib/umami";

const ok = () => new Response(null, { status: 204 });

export async function POST(req: Request) {
  const allowedOrigin = process.env.NEXT_PUBLIC_DEPLOY_ANALYTICS_ORIGIN;
  if (!allowedOrigin || !UMAMI_ORIGIN) return ok();

  let host: string;
  try {
    const raw = await req.text();
    if (raw.length > 512) return ok();
    host = String(JSON.parse(raw)?.host ?? "")
      .toLowerCase()
      .slice(0, 253);
  } catch {
    return ok();
  }

  if (!/^[a-z0-9.-]+\.[a-z]{2,}$/.test(host)) return ok();

  const origin = req.headers.get("origin") ?? "";
  if (origin && origin !== allowedOrigin) return ok();

  const websiteId = process.env.UMAMI_DEPLOY_SITE_ID;
  if (websiteId) {
    try {
      await fetch(`${UMAMI_ORIGIN}/api/send`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "user-agent": req.headers.get("user-agent") ?? "collect",
        },
        body: JSON.stringify({
          type: "event",
          payload: {
            website: websiteId,
            hostname: host,
            url: "/",
            name: "deploy",
          },
        }),
      });
    } catch {
      /* best-effort */
    }
  }

  return ok();
}
