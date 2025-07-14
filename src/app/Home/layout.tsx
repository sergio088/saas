import React from "react";

import Headerdash from "@/components/Home/HeaderHome";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="">
        <div className="bg-gray-200 h-screen">
          <Headerdash />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
