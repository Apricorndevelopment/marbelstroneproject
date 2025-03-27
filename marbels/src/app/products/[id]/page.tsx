"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface Marb {
  id: string;
  name: string;
  origin: string;
  materialType: string;
  color: string;
  usage: string;
  image: string;
}

const marbleData: Marb[] = [
  {
    id: "dallas-white",
    name: "Dallas White Granite",
    origin: "Brazil",
    materialType: "Granite",
    color: "White",
    usage: "Countertops, flooring, wall cladding",
    image: "/mar_pics/marbel1.jpg",
  },
  {
    id: "bianco-carrara",
    name: "Bianco Carrara Marble",
    origin: "Italy",
    materialType: "Marble",
    color: "White",
    usage: "Countertops, flooring, sculptures",
    image: "/mar_pics/marbel4.jpg",
  },
  {
    id: "bianco-romano",
    name: "Bianco Romano Granite",
    origin: "Brazil",
    materialType: "Granite",
    color: "White",
    usage: "Countertops, flooring, sculptures",
    image: "/mar_pics/marbel3.jpg",
  },
  {
    id: "dallas-romano",
    name: "Copenhagen Granite",
    origin: "Brazil",
    materialType: "Granite",
    color: "White",
    usage: "Countertops, flooring, sculptures",
    image: "/mar_pics/marbel2.jpg",
  },
];

export default function MarbleDetailPage() {
  const { id } = useParams();
  const [marble, setMarble] = useState<Marb | null>(null);

  useEffect(() => {
    if (id) {
      const foundMarble = marbleData.find((item) => item.id === id);
      setMarble(foundMarble || null);
    }
  }, [id]);

  if (!marble) {
    return <div className="text-center p-4">Product not found</div>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold m-8">{marble.name}</h1>
      <div className="p-8 flex gap-14">
        <div className="w-72 h-48">
          <Image
            src={marble.image}
            alt={marble.name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p>
            <strong>Origin:</strong> {marble.origin}
          </p>
          <p>
            <strong>Material:</strong> {marble.materialType}
          </p>
          <p>
            <strong>Primary Color:</strong> {marble.color}
          </p>
          <p>
            <strong>Recommended Usage:</strong> {marble.usage}
          </p>
          <button className="bg-gray-600 text-white p-2 mt-8 cursor-pointer">
            Enquire Now
          </button>
        </div>
      </div>
    </>
  );
}
