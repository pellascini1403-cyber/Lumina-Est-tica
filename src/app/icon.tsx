import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { palette } from "@/config/theme";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${palette.logoGradientFrom} 0%, ${palette.logoGradientTo} 100%)`,
          borderRadius: 18,
        }}
      >
        <span
          style={{
            fontSize: 34,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            color: palette.ink,
          }}
        >
          {siteConfig.business.monogram}
        </span>
      </div>
    ),
    size
  );
}
