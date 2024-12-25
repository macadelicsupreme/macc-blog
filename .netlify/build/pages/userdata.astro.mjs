import { a as supabase } from '../chunks/supabase_klfyvS1Y.mjs';
export { renderers } from '../renderers.mjs';

const GET = async () => {
  const { data, error } = await supabase.from("users").select("*").order("created_at", { ascending: true });
  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message
      }),
      { status: 500 }
    );
  }
  return new Response(JSON.stringify(data));
};
const POST = async ({ request }) => {
  const { username, password } = await request.json();
  const { data, error } = await supabase.from("user").insert({ username, password }).select();
  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message
      }),
      { status: 500 }
    );
  }
  return new Response(JSON.stringify(data));
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
