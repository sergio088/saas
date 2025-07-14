"use client";

import { signIn, useSession } from "next-auth/react";

export default function LoginGoogle() {
  const { data: session } = useSession();

  return (
    <div>
      <button
        type="button"
        className=" border w-full cursor-pointer border-gray-400 px-4 py-2 rounded-3xl shadow hover:bg-gray-50 "
        onClick={() =>
          signIn("google", {
            callbackUrl: "/Home",
          })
        }
      >
        <div className="flex items-center justify-center space-x-3">
          <img
            src="https://auth-cdn.oaistatic.com/assets/google-logo-NePEveMl.svg"
            width="16"
            height="16"
            alt="Logotipo do Google"
            className="_root_jbbqu_1"
          ></img>

          <span className="flex justify-center">Entrar com Google</span>
        </div>
      </button>
    </div>
  );
}
