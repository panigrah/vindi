import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const {searchParams } = new URL(request.url)
  const q = searchParams.get('q')
  if(!q) {
    return NextResponse.json([])
  } else {
    //console.log('*** q is', q)
    const { rows } = await sql`SELECT url,name,summary,detail,sale_price,src,vintage, image FROM wines where name ilike '%'||${q}||'%' limit 50`;
    return NextResponse.json(rows)
  }
}