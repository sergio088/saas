import { Html } from "next/document";
import React from "react";

export default function layoutEstoque({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
