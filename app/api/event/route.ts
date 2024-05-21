import { NextRequest, NextResponse } from 'next/server';
import supabase from '../../../config/supabaseClient';


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const gardenerId = searchParams.get('gardenerId');

  const { data: registrationData, error: registrationError } = await supabase
    .from('event_registration')
    .select('event_id')
    .eq('gardener_id', gardenerId);

  if (registrationError) {
    return NextResponse.json({ error: registrationError.message }, { status: 500 });
  }

  const eventIds = registrationData.map((registration: { event_id: number }) => registration.event_id);

  const { data: eventData, error: eventError } = await supabase
    .from('event')
    .select('*')
    .in('id', eventIds);

  if (eventError) {
    return NextResponse.json({ error: eventError.message }, { status: 500 });
  }

  return NextResponse.json(eventData, { status: 200 });
}