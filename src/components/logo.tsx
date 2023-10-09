import companyLogo from "%/public/images/logo.png";
import Image from "next/image";

export function CompanyLogo() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={companyLogo}
        height={40}
        alt="Company Logo"
        className="drop-shadow"
      />
      <div>
        <div className="font-black uppercase text-blue-500 drop-shadow">
          Company
        </div>
        <hr className="h-px w-full border-none bg-blue-200" />
        <div className="text-justify text-xs uppercase text-blue-300">
          Tagline Text
        </div>
      </div>
    </div>
  );
}
