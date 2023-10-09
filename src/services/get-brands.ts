export interface Brand {
  id: number;
  name: string;
  image: string;
  matchScore: number;
  shopifyScore: number;
  margin: number;
}

interface DummyJsonProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface DummyJsonResponse {
  total: number;
  skip: number;
  limit: number;
  products: DummyJsonProduct[];
}

const MIN_ITEMS = 0;
const MAX_ITEMS = 20;

const MIN_SKIP = 0;
const MAX_SKIP = 20;

/*
 * Commandeer dummyjson.com's product data to mock fetched brands
 * Also uses randomized limits and includes some nasty hacks to make it seem real
 *
 * @param {string} query - The search query
 */
export async function searchBrands(query: string) {
  const { limit, skip } = getQueryParams();

  if (limit === 0) {
    return [] as Brand[];
  }

  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );
  const data = (await res.json()) as DummyJsonResponse;

  const brands = data.products.map(productToBrand);
  return brands;
}

function getQueryParams() {
  const limit = randomFromInterval(MIN_ITEMS, MAX_ITEMS);
  const skip = randomFromInterval(MIN_SKIP, MAX_SKIP);

  return { limit, skip };
}

/* Hack to create fake brand data from dummyjson.com's product data */
function productToBrand(product: DummyJsonProduct): Brand {
  return {
    id: product.id,
    name: product.brand,
    image: product.thumbnail,
    matchScore: 100 - product.discountPercentage,
    shopifyScore: product.rating,
    margin: Math.floor(Math.random() * 100) + 1,
  };
}

function randomFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
