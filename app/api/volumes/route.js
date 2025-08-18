import { volumes } from "@/app/lib/data";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function GET() {
  return NextResponse.json(volumes);
}

export async function POST(request, { params }) {
  const { title } = await request.json();
  const slug = slugify(title);
  const newVolume = { slug, title};
  volumes.push(newVolume);
  return NextResponse.json(volumes);
}