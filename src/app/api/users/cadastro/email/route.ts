import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

function GenerateCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  const code = GenerateCode();
  const expiresAt = new Date(Date.now() + 10);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Seu codigo de verificação",
    text: `Seu código de verificaçao é: ${code}. Ele expira em 10 minutos`,
  };

  try {
    await transporter.sendMail(mailOptions);

    await prisma.VerificationCode.upsert({
      where: { email },
      update: {},
      create: {
        email,
        code,
        expiresAt,
      },
    });

    return NextResponse.json({ success: true, code });
  } catch (error) {
    console.error("Erro ao salvar código no banco:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
