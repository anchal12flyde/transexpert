import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html >
      
     <head>
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;700&display=swap" rel="stylesheet" />

      </head>
      <body
        >
        {children}
      </body>
    </html>
  );
}
