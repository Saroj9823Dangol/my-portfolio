import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const from = searchParams.get("from") || "USD";
  const to = searchParams.get("to") || "NPR";

  try {
    const res = await fetch(`https://api.budjet.org/fiat/${from}/${to}/100`);
    
    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: "API request failed" },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch rate" },
      { status: 500 }
    );
  }
}