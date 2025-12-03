// import { Cinzel_Decorative } from "next/font/google";
// import { Tasa_Explorer } from "next/font/google";
import "./globals.css";

// const cinzel = Cinzel_Decorative({
//   variable: "--font-cinzel",
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// const tasa = Tasa_Explorer({
//   variable: "--font-tasa",
//   subsets: ["latin"],
//   weight: ["400", "500", "700", "800"],
// });

export const metadata = {
  title: "My Site",
  description: "Site meant to accompany my CV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=TASA+Explorer:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
