import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f0f1a 0%, #19101d 52%, #251506 100%)",
          color: "#f5efe0",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 760,
            height: 760,
            border: "2px solid rgba(212, 175, 55, 0.18)",
            borderRadius: "50%",
            right: -190,
            top: -120,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            border: "1px solid rgba(212, 175, 55, 0.16)",
            borderRadius: "50%",
            left: -160,
            bottom: -160,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
          <div
            style={{
              width: 128,
              height: 128,
              borderRadius: 999,
              background: "#000",
              border: "3px solid rgba(212, 175, 55, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 54,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            AIS
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -2 }}>
            {siteConfig.name}
          </div>
          <div style={{ fontSize: 34, color: "#d4af37" }}>
            Association of Indian Students at USC
          </div>
          <div style={{ fontSize: 24, color: "rgba(245, 239, 224, 0.72)" }}>
            Where Culture Meets Community
          </div>
        </div>
      </div>
    ),
    size,
  )
}
