import "../styles/globals.css";

export const metadata = {
  title: "Matrix Pharma Corp",
  description:
    "Matrix Pharma Corp’s journey is defined by groundbreaking innovation, transformative partnerships, and an unwavering commitment to excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>{children}</body>
    </html>
  );
}
