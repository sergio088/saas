"use client";

import A from "../Links/A";
import Link from "next/link";
import { useState, useEffect } from "react";
import StockFlow from "../Links/StockFlow";
import SideBar from "../login-cadastro/Siderbar";
import { useRef } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const menuref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function outsideclick(event: MouseEvent) {
      if (menuref.current && !menuref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("click", outsideclick);
    }

    return () => document.removeEventListener("click", outsideclick);
  });

  return (
    <div className="right-0">
      <header className="flex justify-between p-3 lg:p-6">
        <StockFlow></StockFlow>

        <div className="flex items-center space-x-3">
          <nav className="flex  space-x-3">
            <div className="flex space-x-3  items-center ">
              <div className="hidden lg:flex">
                <A href="/Funcionalidades">Funcionalidades</A>
                <A href="/Precos">Preços</A>
                <A href="/login">Fazer login</A>
              </div>

              <Link
                href="/cadastro"
                className="bg-blue-600 px-1 py-1 text-white rounded hover:bg-blue-700"
              >
                Usar StockFlow de graça
              </Link>
            </div>
          </nav>
          <div onClick={() => setOpen(!isOpen)} className="lg:hidden">
            <div className="border border-gray-200 p-[10px] rounded-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
      {isOpen && <SideBar ref={menuref} />}
    </div>
  );
}
