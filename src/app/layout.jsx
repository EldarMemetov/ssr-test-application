import React from "react";
import "./globals.css";
import Header from "./components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
