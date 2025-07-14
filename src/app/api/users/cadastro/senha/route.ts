import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, senha } = body;
  const name = "";

  console.log(email, senha);
  try {
    await prisma.User.create({
      data: {
        name,
        email,
        senha,
      },
    });
    return NextResponse.json({ message: "Conta criada" }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Erro no Servidor" }, { status: 500 });
  }
}
