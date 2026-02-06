import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    const url = new URL(req.url);
    const pathParts = url.pathname.split('/').filter(Boolean);
    const repairId = pathParts[pathParts.length - 1];

    switch (req.method) {
      case "GET": {
        if (repairId && repairId !== 'repairs') {
          const { data, error } = await supabaseClient
            .from('repairs')
            .select('*, bookings(*), employees(*)')
            .eq('id', repairId)
            .maybeSingle();

          if (error) throw error;
          if (!data) {
            return new Response(JSON.stringify({ error: 'Repair not found' }), {
              status: 404,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
          }

          return new Response(JSON.stringify(data), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }

        const { data, error } = await supabaseClient
          .from('repairs')
          .select('*, bookings(*), employees(*)')
          .order('created_at', { ascending: false });

        if (error) throw error;

        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case "POST": {
        const body = await req.json();
        const { data, error } = await supabaseClient
          .from('repairs')
          .insert(body)
          .select('*, bookings(*), employees(*)')
          .single();

        if (error) throw error;

        return new Response(JSON.stringify(data), {
          status: 201,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case "PUT": {
        if (!repairId || repairId === 'repairs') {
          return new Response(JSON.stringify({ error: 'Repair ID required' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }

        const body = await req.json();
        const { data, error } = await supabaseClient
          .from('repairs')
          .update(body)
          .eq('id', repairId)
          .select('*, bookings(*), employees(*)')
          .single();

        if (error) throw error;

        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      case "DELETE": {
        if (!repairId || repairId === 'repairs') {
          return new Response(JSON.stringify({ error: 'Repair ID required' }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          });
        }

        const { error } = await supabaseClient
          .from('repairs')
          .delete()
          .eq('id', repairId);

        if (error) throw error;

        return new Response(JSON.stringify({ message: 'Repair deleted' }), {
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
