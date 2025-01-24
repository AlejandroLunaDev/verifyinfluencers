import connectDB from '../../../lib/mongodb';
import ResearchTaskModel from '../../../models/researchTask';
import { NextResponse } from 'next/server';

// GET: Obtener todas las tareas de investigación
export async function GET() {
  await connectDB();

  try {
    const tasks = await ResearchTaskModel.find();
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST: Crear una nueva tarea de investigación
export async function POST(req) {
  await connectDB();

  try {
    const body = await req.json();
    const {
      influencerName,
      timeRange,
      maxClaims,
      selectedJournals,
      includeRevenueAnalysis,
    } = body;

    const newTask = await ResearchTaskModel.create({
      influencerName,
      timeRange,
      maxClaims,
      selectedJournals,
      includeRevenueAnalysis,
    });

    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
