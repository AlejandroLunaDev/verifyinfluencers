import { NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import ClaimModel from '../../../models/claim';

// GET: Obtener todas las claims
export async function GET() {
  await connectDB();

  try {
    const claims = await ClaimModel.find().populate('influencerId'); // Relación con influencers
    return NextResponse.json(claims);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: Crear una nueva claim
export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();
    const { influencerId, text, category, status, confidence, sources } = body;

    const newClaim = await ClaimModel.create({
      influencerId,
      text,
      category,
      status,
      confidence,
      sources,
    });

    return NextResponse.json(newClaim, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
