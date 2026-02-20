import { NextRequest } from "next/server";
import { getStateData } from "src/app/api/repo/repository";

export async function GET(request: NextRequest) {  
  return new Response(
    
    await getStateData(),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
}