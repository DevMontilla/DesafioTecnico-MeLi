import "./globals.css";
import localFont from "next/font/local";

const proxima_nova = localFont({
  src: [
    {
      path: "../../public/fonts/proxima-nova-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/proxima-nova-400.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={proxima_nova.className}>{children}</body>
    </html>
  );
}
