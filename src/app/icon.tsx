import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#080c14",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00d2ff",
          fontWeight: 800,
          fontFamily: "monospace",
          borderRadius: 8,
          border: "2px solid #00d2ff",
        }}
      >
        AV
      </div>
    ),
    {
      ...size,
    }
  );
}
