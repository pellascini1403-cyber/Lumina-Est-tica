import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f3e6cc 0%, #dfaa9a 100%)",
          borderRadius: 40,
        }}
      >
        <span
          style={{
            fontSize: 96,
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            color: "#2a2420",
          }}
        >
          L
        </span>
      </div>
    ),
    size
  );
}
