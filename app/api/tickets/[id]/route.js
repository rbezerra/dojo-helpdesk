import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(_, { params }) {
  const res = await fetch(`http://localhost:4000/tickets/${params.id}`);

  if (!res.ok)
    return NextResponse.json(
      { error: "Cannot find the ticket" },
      { status: 404 }
    );

  const ticket = await res.json();
  return NextResponse.json(ticket, { status: 200 });
}

kNlLqT1XWsh5KbTn