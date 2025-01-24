import connectDB from '../../../lib/mongodb';
import ClaimModel from '../../../models/claim';
import { NextResponse } from 'next/server';

// Manejo de solicitudes GET y POST
export async function GET() {
  await connectDB(); // Conecta a la base de datos

  try {
    const claims = await ClaimModel.find(); // Obtiene todas las claims
    return NextResponse.json(claims);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  await connectDB(); // Conecta a la base de datos

  try {
    const body = await req.json();
    const { influencerId, content, verified, score } = body; // Datos recibidos del cliente

    const newClaim = await ClaimModel.create({ influencerId, content, verified, score });
    return NextResponse.json(newClaim, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
