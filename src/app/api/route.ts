
export async function GET(request: Request) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL!);
  const data = await res.json();
  return new Response(JSON.stringify(data));
}