import { ImageResponse } from "next/og";
import { SITE, accent } from "@/lib/site";

export const dynamic = "force-static";
export const alt = SITE.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 72,
        background:
          `linear-gradient(135deg, ${accent()} 0%, #04201d 55%, #000000 100%)`,
        color: "white",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 22,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          opacity: 0.85,
          marginBottom: 16,
        }}
      >
        Student chip design team
      </div>
      <div
        style={{
          fontSize: 72,
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          maxWidth: 900,
        }}
      >
        {SITE.name}
      </div>
      <div
        style={{
          fontSize: 32,
          marginTop: 20,
          opacity: 0.9,
          maxWidth: 720,
          lineHeight: 1.3,
        }}
      >
        Chips, designed at Texas.
      </div>
    </div>,
    { ...size },
  );
}
