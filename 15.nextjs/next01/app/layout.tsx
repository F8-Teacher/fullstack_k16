import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("root layout");

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
