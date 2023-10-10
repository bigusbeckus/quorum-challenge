import Image from "next/image";
import shopifyIcon from "%/public/images/shopify-icon.png";
import { Brand } from "@/services/get-brands";

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
      <h6 className="text-lg font-bold">{props.name}</h6>

      <div className="flex gap-4">
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
        </div>
      </div>

      <div className="flex justify-center">
        <button className="rounded bg-emerald-300 px-8 py-2 font-bold shadow">
          View
        </button>
      </div>
    </div>
  );
};

function toPercent(decimal: number) {
  return Math.round(decimal * 100);
}