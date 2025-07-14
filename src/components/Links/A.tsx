import Link from "next/link";
import React from "react";

interface linkprops {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function A({ href, children, className }: linkprops) {
  return (
    <Link
      href={href}
      className={`rounded px-1 py-0.5 hover:bg-gray-200 ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
