import Image from "next/image";
import shopifyIcon from "%/public/images/shopify-icon.png";
import { Icon } from "@iconify/react";

interface BrandCardProps {
  id: string;
  name: string;
  imageUrl: string;
  product: string;
  category: string;
  location: string;
  shopifyRating: number;
  matchScore: number;
}

export const BrandCard: React.FC<BrandCardProps> = (props) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow outline outline-1 outline-neutral-200">
      <div className="flex items-center justify-between">
        <h6 className="font-bold">{props.name}</h6>
        <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-light uppercase">
          {props.category}
        </div>
      </div>

      <hr className="border-neutral-200" />

      <div className="flex gap-8">
        <div className="flex flex-col gap-2">
          <Image
            className="outline outline-1 outline-neutral-200"
            src={props.imageUrl}
            alt={props.name}
            width={128}
            height={128}
          />
          <div>
            <div className="font-bold">Product(s):</div>
            <div className="font-light italic">{props.product}</div>
          </div>
        </div>

        <div className="flex flex-col items-end justify-between">
          <div>
            <div className="font-bold">Match Score:</div>
            <div className="text-end font-light">
              {toPercent(props.matchScore)}%
            </div>
          </div>

          <div>
            <Image src={shopifyIcon} alt="shopify icon" height={64} />
            <div className="text-center font-bold">{props.shopifyRating}/5</div>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <Icon icon="fe:location" className="h-6 w-6" />
            <div className="capitalize">{props.location}</div>
          </div>
        </div>
      </div>

      <button className="w-full rounded px-8 py-2 font-semibold text-blue-500 outline outline-1 outline-blue-500 transition-colors hover:bg-blue-100 active:bg-blue-200">
        View
      </button>
    </div>
  );
};

function toPercent(decimal: number) {
  return Math.round(decimal * 100);
}
