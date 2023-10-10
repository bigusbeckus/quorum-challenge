"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { Icon } from "@iconify/react";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { CompanyLogo } from "@/components/logo";
import { BrandCard } from "@/components/brand-card";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { searchBrands } from "@/services/search-brands";
import { type BrandResult } from "@/services/search-brands";
import { LoadingSpinner } from "@/components/loading-spinner";

interface FetchedQuery {
  query: string;
  results: BrandResult[];
}

const queryClient = new QueryClient();

export default function Home() {
  const [q, setQ] = useState("");
  const [fetched, setFetched] = useState([] as FetchedQuery[]);
  // const [lastFetchedIndex, setLastFetched] = useState(-1);
  const [accordionValue, setAccordionValue] = useState("");
  const [loading, setLoading] = useState(false);

  function handleQueryChange(e: ChangeEvent<HTMLInputElement>) {
    setQ(e.target.value);
  }

  function handleAccordionValueChanged(value: string) {
    setAccordionValue(value);
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) {
      return;
    }

    if (q) {
      setLoading(true);
      try {
        search(q);
      } catch (err) {
        console.error(err);
      }
    }
  }

  async function search(query: string) {
    const res = await searchBrands(query);

    if (res) {
      setFetched((prev) => [...prev, { query, results: res.results }]);
      setAccordionValue(query);
      setQ("");
      setLoading(false);
    }
  }

  return (
    <main className="flex h-full flex-col">
      {/* Navbar */}
      <div className="min-h-16 flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <CompanyLogo />

        <div className="flex gap-6">
          <Icon icon="fe:commenting" className="h-6 w-6" />
          <Icon icon="fe:bell" className="h-6 w-6" />
          <Icon icon="fe:user" className="h-6 w-6" />
        </div>
      </div>

      <hr className="h-px w-full border-none bg-neutral-200" />

      {/* Body */}
      <div className="flex-1 overflow-y-hidden">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="flex h-full w-48 flex-col gap-1 divide-blue-100 overflow-auto p-4">
            <div className="rounded-md px-4 py-2 text-gray-800">Partners</div>
            <div className="rounded-md bg-blue-50 px-4 py-2 font-extrabold text-blue-500">
              Criteria
            </div>
            <div className="rounded-md px-4 py-2 text-gray-800">Account</div>
          </div>

          <div className="h-full w-px bg-neutral-200"></div>

          {/* Main */}
          <div className="max-h-full flex-1 overflow-y-auto">
            <div className="flex w-full flex-col gap-2 p-4">
              <h3 className="text-center text-3xl font-bold">
                Set your criteria
              </h3>

              <div className="flex flex-col gap-8">
                {fetched.length > 0 || loading ? (
                  <Accordion
                    value={accordionValue}
                    onValueChange={handleAccordionValueChanged}
                  >
                    {fetched.map((fetchedQuery, i) => (
                      <AccordionItem
                        key={fetchedQuery.query}
                        value={fetchedQuery.query}
                      >
                        <AccordionTrigger>
                          <div className="flex gap-4 font-semibold capitalize text-blue-500">
                            <div>{i + 1}.</div>
                            <div>{fetchedQuery.query}</div>
                          </div>
                        </AccordionTrigger>

                        <AccordionContent>
                          {fetchedQuery.results.length > 0 ? (
                            <div className="flex flex-wrap gap-4">
                              {fetchedQuery.results.map((result) => (
                                <BrandCard
                                  key={result.id}
                                  id={result.id}
                                  name={result.name}
                                  imageUrl="https://i.dummyjson.com/data/products/21/thumbnail.png"
                                  product={result.product}
                                  category={result.category}
                                  location={result.location}
                                  shopifyRating={result.shopify_rating}
                                  matchScore={result.match_score}
                                />
                              ))}
                            </div>
                          ) : (
                            <div className="text-center text-neutral-500">
                              No brands found
                            </div>
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ))}

                    {loading && (
                      <div className="flex items-center justify-center">
                        <LoadingSpinner />
                      </div>
                    )}
                  </Accordion>
                ) : (
                  <div className="py-16 text-center text-blue-400">
                    <h6 className="text-semibold text-2xl">No results found</h6>
                    <h6 className="text-gray-400">Try creating a new search</h6>
                  </div>
                )}
              </div>

              <div className="flex justify-center pt-8">
                <div className="flex flex-col gap-2">
                  <div className="font-bold">New Search (+)</div>
                  <form className="flex gap-2" onSubmit={handleFormSubmit}>
                    <input
                      placeholder="Placeholder query"
                      className="rounded px-4 outline outline-1 outline-gray-400"
                      value={q}
                      onChange={handleQueryChange}
                    />
                    <button
                      type="submit"
                      className="rounded-full bg-black p-2 text-white"
                      disabled={loading}
                    >
                      <Icon icon="fe:search" className="h-full w-full" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
