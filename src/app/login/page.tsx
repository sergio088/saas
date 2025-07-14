"use client";

import Emailinput from "@/components/login-cadastro/input";
import Title1e2 from "@/components/login-cadastro/title1e2";
import LoginGoogle from "@/components/login-cadastro/Loginbutton";
import { useState } from "react";
import Senha from "@/components/login-cadastro/senha";
import { useRouter } from "next/navigation";

export default function Login() {
  const [senha, setSenha] = useState("");
  const [email, setemail] = useState("");
  const router = useRouter();

  async function Continuar() {
    if (!email || !senha) {
      return;
    }
    const res = await fetch("/api/users/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    });
    if (res.status === 200) {
      router.push("/Home");
    }
    if (res.status === 400) {
    }
  }

  return (
    <div className="flex items-center justify-center px-5">
      <div className="lg:w-1/4 space-y-4">
        <Title1e2
          title1="Retome o controle aqui"
          title2="Faça login na sua conta do StockFlow"
        ></Title1e2>

        <LoginGoogle></LoginGoogle>

        <Emailinput onChange={(e) => setemail(e.target.value)}></Emailinput>
        <Senha onChange={(e) => setSenha(e.target.value)}></Senha>
        <button
          onClick={Continuar}
          type="button"
          className="bg-blue-500 p-2 text-white w-full rounded hover:bg-blue-600"
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
