import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    const url = new URL(req.url);
    const pathParts = url.pathname.split('/').filter(Boolean);
    const bookingId = pathParts[pathParts.length - 1];

    switch (req.method) {
      case "GET": {
        if (bookingId && bookingId !== 'bookings') {
          const { data, error } = await supabaseClient
            .from('bookings')
            .select('*, clients(*), services(*)')
            .eq('id', bookingId)
            .maybeSingle();

          if (error) throw error;
          if (!data) {
            return new Response(JSON.stringify({ error: 'Booking not found' }), {
              status: 404,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
          }

          return new Response(JSON.stringify(data), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }

        const { data, error } = await supabaseClient
          .from('bookings')
          .select('*, clients(*), services(*)')
          .order('created_at', { ascending: false });

        if (error) throw error;

        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case "POST": {
        const body = await req.json();

        let clientId = body.client_id;
        if (!clientId && body.client) {
          const { data: client, error: clientError } = await supabaseClient
            .from('clients')
            .insert(body.client)
            .select()
            .single();

          if (clientError) throw clientError;
          clientId = client.id;
        }

        const bookingData = {
          client_id: clientId,
          service_id: body.service_id,
          device_type: body.device_type,
          problem_description: body.problem_description,
          preferred_date: body.preferred_date,
          status: 'pending'
        };

        const { data, error } = await supabaseClient
          .from('bookings')
          .insert(bookingData)
          .select('*, clients(*), services(*)')
          .single();

        if (error) throw error;

        return new Response(JSON.stringify(data), {
          status: 201,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case "PUT": {
        if (!bookingId || bookingId === 'bookings') {
          return new Response(JSON.stringify({ error: 'Booking ID required' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }

        const body = await req.json();
        const { data, error } = await supabaseClient
          .from('bookings')
          .update(body)
          .eq('id', bookingId)
          .select('*, clients(*), services(*)')
          .single();

        if (error) throw error;

        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case "DELETE": {
        if (!bookingId || bookingId === 'bookings') {
          return new Response(JSON.stringify({ error: 'Booking ID required' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }

        const { error } = await supabaseClient
          .from('bookings')
          .delete()
          .eq('id', bookingId);

        if (error) throw error;

        return new Response(JSON.stringify({ message: 'Booking deleted' }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      default:
        return new Response(JSON.stringify({ error: 'Method not allowed' }), {
          status: 405,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
