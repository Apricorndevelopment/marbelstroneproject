import Image from "next/image";
import Link from "next/link";

interface MarbleCardProps {
    id: string; 
  imageUrl: string;
  title: string;
  additionalName: string;
  countryFlag: string;
  countryName: string;
  type: string;
}

export function MarbleCard({
    id,
  imageUrl,
  title,
  additionalName,
  countryFlag,
  countryName,
  type,
}: MarbleCardProps) {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden">
    
      <div className="relative w-full h-48">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>

        <p className="text-gray-600 text-sm">
          <span className="font-semibold">Additional Names:</span> {additionalName}
        </p>

        <div className="flex items-center gap-2 mt-2">
          <Image src={countryFlag} alt={countryName} width={20} height={15} />
          <span className="text-gray-700 text-sm">{countryName} - {type}</span>
        </div>

        <button className="mt-3 flex items-center gap-2 text-blue-600 hover:underline">
          <i className="bi bi-pencil-square"></i> Post Request
        </button>
        <button className="mt-3 rounded text-white p-2 bg-blue-600 hover:underline">
           <Link href={`/products/${id}`}> View Details → </Link>
          </button>
      </div>
    </div>
  );
}
