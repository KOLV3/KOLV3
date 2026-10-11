import { ImageResponse } from "next/og";

export const alt = "KOLVE: Digital Service Provider";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#FDFCF3",
          padding: "80px",
          fontFamily: "sans-serif",
          border: "16px solid #245C45",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "10px",
              backgroundColor: "#245C45",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 800,
            }}
          >
            K
          </div>
          <span
            style={{
              fontSize: "36px",
              fontWeight: 800,
              letterSpacing: "4px",
              color: "#252820",
            }}
          >
            KOLVE
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "60px",
              fontWeight: 800,
              color: "#252820",
              lineHeight: 1.15,
              maxWidth: "960px",
            }}
          >
            Real problems. Practical solutions. Built with purpose.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#55594F",
              fontWeight: 500,
            }}
          >
            Digital Service Provider • Sunsari, Nepal
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "2px solid #E6E2D7",
            paddingTop: "24px",
          }}
        >
          <div style={{ fontSize: "20px", color: "#55594F" }}>
            kolve.com • kolvedsp@gmail.com
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#245C45",
              fontWeight: 700,
              backgroundColor: "#FFFAF0",
              padding: "8px 16px",
              borderRadius: "6px",
              border: "1px solid #E6E2D7",
            }}
          >
            Web Apps • UI/UX Design • Custom Solutions
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
