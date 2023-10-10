"use client";
export interface BrandResult {
  id: string;
  name: string;
  product: string;
  category: string;
  location: string;
  shopify_rating: number;
  match_score: number;
}

interface BrandsSearchResponse {
  count: number;
  results: BrandResult[];
}

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function searchBrands(q: string) {
  try {
    const data = await fetch(`${backendUrl}/search?q=${q}`);
    return (await data.json()) as BrandsSearchResponse;
  } catch (e) {
    throw e;
  }
}
