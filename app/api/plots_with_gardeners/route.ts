import { NextRequest, NextResponse } from 'next/server';
import supabase from '../../../config/supabaseClient';


export async function GET(request: NextRequest) {
  const { data, error } = await supabase
    .from('plot')
    .select(`
      number,
      gardener_id,
      gardener:gardener_id (
        id,
        firstname,
        lastname,
        mail,
        tel,
        caution,
        cotisation,
        assurance
      )
    `);

if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 200 });
}