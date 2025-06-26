let visitorCount = 0; // Temporary counter (use a database for persistence)

export async function GET(req) {
    return new Response(JSON.stringify({ count: visitorCount }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}

export async function POST(req) {
    visitorCount++; // Increment count
    return new Response(JSON.stringify({ count: visitorCount }), {
        headers: { "Content-Type": "application/json" },
        status: 200,
    });
}
