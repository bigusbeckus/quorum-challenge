"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import shopifyIcon from "%/public/images/shopify-icon.png";
import { ChangeEvent, useState } from "react";
import { CompanyLogo } from "@/components/logo";

export default function Home() {
  const [query, setQuery] = useState<string>();

  function handleQueryChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
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
              <h3 className="text-center text-2xl font-bold">
                Set your criteria
              </h3>

              <div className="flex flex-col gap-8">
                <Accordion defaultValue="something">
                  <AccordionItem value="something">
                    <AccordionTrigger>
                      1. Top food brands in Miami
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-4">
                        {new Array(9).fill(0).map((_, i) => (
                          <div
                            key={i}
                            className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow outline outline-1 outline-neutral-200"
                          >
                            <h6 className="text-lg font-bold">Brand name</h6>

                            <div className="flex gap-4">
                              <div>
                                <div className="flex h-32 w-32 items-center justify-center bg-red-900">
                                  Image
                                </div>
                                <div>
                                  <div className="font-bold">Product(s):</div>
                                  <div className="font-light italic">
                                    (Margin)
                                  </div>
                                </div>
                              </div>

                              <div>
                                <div>Match Score:</div>
                                <div>97%</div>
                                <div>
                                  <Image
                                    src={shopifyIcon}
                                    alt="shopify icon"
                                    width={32}
                                    height={32}
                                  />
                                  <div>4.5/5</div>
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-center">
                              <button className="rounded bg-emerald-300 px-8 py-2 font-bold shadow">
                                View
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="something2">
                    <AccordionTrigger>
                      2. Top toy brands in New York
                    </AccordionTrigger>
                    <AccordionContent>
                      2 content goes here lorem ipsum
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="something3">
                    <AccordionTrigger>
                      3. Top coffee brands in Los Angeles
                    </AccordionTrigger>
                    <AccordionContent>
                      3 content goes here lorem ipsum
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex flex-col gap-2">
                  <div className="font-bold">New Search (+)</div>
                  <div className="flex gap-2">
                    <input
                      placeholder="Placeholder query"
                      className="rounded px-4 outline outline-1 outline-gray-400"
                      value={query}
                      onChange={handleQueryChange}
                    />
                    <div className="rounded-full bg-black p-2 text-white">
                      <Icon icon="fe:search" className="h-full w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
