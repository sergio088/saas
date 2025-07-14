import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, senha } = body;

  try {
    const login = await prisma.User.findFirst({
      where: {
        email,
        senha,
      },
    });
    if (login) {
      return NextResponse.json({ message: "Erro" }, { status: 200 });
    }
    return NextResponse.json({ message: "Erro" }, { status: 400 });
  } catch {
    return NextResponse.json({ message: "Erro no servidor" }, { status: 500 });
  }
}
