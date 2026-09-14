import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #fbf7f2 0%, #f3e6cc 55%, #e3b8ac 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.35)",
            display: "flex",
          }}
        />
        <span
          style={{
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#8a5b4a",
            display: "flex",
          }}
        >
          {siteConfig.business.shortName}
        </span>
        <span
          style={{
            marginTop: 22,
            fontSize: 72,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            color: "#2a2420",
            maxWidth: 900,
            display: "flex",
          }}
        >
          {siteConfig.business.slogan}
        </span>
        <span
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#4a413a",
            maxWidth: 800,
            display: "flex",
          }}
        >
          Tratamientos faciales, corporales y bienestar en {siteConfig.business.city}
        </span>
      </div>
    ),
    size
  );
}
