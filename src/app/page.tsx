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
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState<string>();

  return (
    <main className="flex h-full flex-col">
      {/* Navbar */}
      <div className="min-h-16 flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="rounded py-1 text-sm font-extrabold capitalize opacity-40">
          Company Name
        </div>

        <div className="flex gap-4">
          <Icon icon="fe:commenting" className="h-4 w-4" />
          <Icon icon="fe:bell" className="h-4 w-4" />
          <Icon icon="fe:user" className="h-4 w-4" />
        </div>
      </div>

      <hr className="h-px w-full border-none bg-neutral-800" />

      {/* Body */}
      <div className="flex-1 overflow-y-hidden">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="flex h-full w-48 flex-col items-center gap-2 p-4">
            <div className="text-white/70">Partners</div>
            <div className="font-bold">Criteria</div>
            <div className="text-white/70">Account</div>
          </div>

          <div className="h-full w-px bg-neutral-800"></div>

          {/* Main */}
          <div className="max-h-full flex-1 overflow-y-auto">
            <div className="w-full p-4">
              <h3 className="text-center font-extrabold">Set your criteria</h3>
              <div className="py-2">
                <hr className="h-px w-full border-none bg-neutral-800" />
              </div>

              <div>
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
                            className="flex flex-col gap-4 rounded p-2 outline outline-1 outline-white/10"
                          >
                            <h6 className="font-bold">Brand name</h6>

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
                              <button className="rounded bg-emerald-900 p-2">
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
                <div className="pt-4">
                  <div className="font-bold">New Search (+)</div>
                  <div className="flex gap-2">
                    <input
                      placeholder="Placeholder query"
                      className="rounded-full px-4 text-black"
                      value={query}
                    />
                    <div className="rounded-full bg-red-900 p-2">
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
