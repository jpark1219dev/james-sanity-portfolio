import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const myFont = IBM_Plex_Sans({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata = {
  title: "James Park | Web Developer",
  description: "James Park's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
