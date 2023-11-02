import { NextRequest, NextResponse } from "next/server";
import usersData from "../../../../contacts_file.json";

export function GET(request: NextRequest) {
  return NextResponse.json(usersData);
}
