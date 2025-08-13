import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html >
      
     <head><link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
<link href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap" rel="stylesheet"/>

      </head>
      <body>{children}</body>
    </html>
  );
}
