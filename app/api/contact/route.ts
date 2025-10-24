import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Configurar o transporte do nodemailer usando Gmail
    // NOTA: Para usar Gmail, você precisa:
    // 1. Ativar "Verificação em duas etapas" na sua conta Google
    // 2. Gerar uma "Senha de app" em https://myaccount.google.com/apppasswords
    // 3. Criar um arquivo .env.local com as variáveis SMTP_USER e SMTP_PASS

    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Enviar o email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "azevedo.joao1995@gmail.com",
      subject: `Contato do Portfolio - ${name}`,
      html: `
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
