import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali | Software Engineer | Building Modern Web Applications",
  description: "Portfolio website for myself",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
