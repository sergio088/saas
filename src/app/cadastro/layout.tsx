import React from "react";
import StockFlow from "@/components/Links/StockFlow";
import { AuthProviders } from "../providers/SessionProviders";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="p-[15px]">
          <header>
            <StockFlow></StockFlow>
          </header>
          <div className=" ">
            <AuthProviders>{children}</AuthProviders>
          </div>
        </div>
      </body>
    </html>
  );
}
