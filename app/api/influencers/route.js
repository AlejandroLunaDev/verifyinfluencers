import { NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import InfluencerModel from '../../../models/influencers';

// GET: Obtener todos los influencers
export async function GET() {
  await connectDB(); // Conectar a la base de datos

  try {
    const influencers = await InfluencerModel.find();
    return NextResponse.json(influencers);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: Crear un nuevo influencer
export async function POST(req) {
  await connectDB(); // Conectar a la base de datos

  try {
    const body = await req.json(); // Parsear el body del request
    const { name, category, followers, trustScore, claimsCount } = body;

    const newInfluencer = await InfluencerModel.create({
      name,
      category,
      followers,
      trustScore,
      claimsCount,
    });

    return NextResponse.json(newInfluencer, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
