import { connectionStr } from "@/app/lib/db";
import { Portfolio } from "@/app/lib/model/form";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// Utility to connect to MongoDB
async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(connectionStr);
  }
}

// GET API - Fetch all data
export async function GET() {
  try {
    await dbConnect();
    const data = await Portfolio.find();
    return NextResponse.json({ success: true, result: data });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST API - Save data
export async function POST(request) {
  try {
    await dbConnect();
    const payload = await request.json();
    const userData = new Portfolio(payload);
    console.log("User dtaa is ", userData);
    
    const result = await userData.save();

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// CORS Support (For non-Next.js clients)
const allowedOrigin = 'https://create-portfolio-zeta.vercel.app';

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}



