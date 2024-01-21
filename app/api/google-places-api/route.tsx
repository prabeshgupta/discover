import { NextResponse } from "next/server";

const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?"
const GOOGLE_PLACES_KEY = process.env.GOOGLE_PLACES_KEY;

export async function GET(request: any) {

    const { searchParams }: any = new URL(request.url);
    const q = searchParams.get('q');

    const res = await fetch(
        BASE_URL + "query=" + q + "&key=" + GOOGLE_PLACES_KEY,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    const resp = await res.json();

    return NextResponse.json({ resp });
}