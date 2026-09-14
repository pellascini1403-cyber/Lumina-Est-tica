import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { palette } from "@/config/theme";

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
          background: `linear-gradient(135deg, ${palette.warmWhite} 0%, ${palette.logoGradientFrom} 55%, ${palette.logoGradientVia} 100%)`,
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
            color: palette.accent,
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
            color: palette.ink,
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
            color: palette.inkSoft,
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
