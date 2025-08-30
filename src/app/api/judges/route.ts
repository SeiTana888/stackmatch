import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { id: "1", name: "Alice", stacks: ["React", "Node", "AWS"] },
    { id: "2", name: "Bob",   stacks: ["Go", "gRPC", "GCP"] },
  ]);
}
