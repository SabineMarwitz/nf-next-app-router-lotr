import { volumes } from "@/app/lib/data";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { aslug } = await params;
  const volume = volumes.find((volume) => volume.slug === aslug);
  return NextResponse.json(volume);
}

export async function DELETE(request, { params }) {
  const { aslug } = await params;

  const indexToDelete = volumes.findIndex((volume) => volume.slug === aslug);
  if (indexToDelete === -1) {
    return NextResponse.json({ error: "Volume not found" }, { status: 404 });
  }
  volumes.splice(indexToDelete, 1);
  return NextResponse.json({ success: true });
}

export async function PUT(request, { params }) {
  const { aslug, title } = await request.json();
  const indexToUpdate = volumes.findIndex((volume) => volume.slug === aslug);
  if (indexToUpdate === -1) {
    return NextResponse.json({ error: "Volume not found" }, { status: 404 });
  }
  volumes[indexToUpdate].title = title;
  
  return NextResponse.json({ success: true });
}