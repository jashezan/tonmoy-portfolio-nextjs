import { personalities } from "@/data/idol";
import Image from "next/image";
function PersonalityCard({ personality }) {
  console.log(personality);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 mb-8">
      <div className="flex flex-row lg:flex-col items-center md:items-start gap-6 p-6">
        {/* Picture on the left */}
        <div className="flex-shrink-0">
          <Image
            src={personality?.pictures?.src}
            alt={personality?.pictures?.alt}
            width={400}
            height={400}
            objectFit="cover"
            className="rounded-lg md:w-auto"
            loading="lazy"
          />
        </div>

        {/* Information on the right */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">{personality.name}</h3>
          <p className="text-gray-600">{personality.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function IdolPersonalities() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Idol Personalities
      </h2>
      <div className="space-y-12">
        {personalities.map((personality) => (
          <PersonalityCard key={personality.id} personality={personality} />
        ))}
      </div>
    </div>
  );
}
