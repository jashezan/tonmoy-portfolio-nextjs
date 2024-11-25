"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function ImageGrid({ sampleData }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // In a real application, you might fetch this data from an API
    setImages(sampleData);
  }, [sampleData]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 xl:grid-cols-1 gap-4">
        {images.map((item) =>
          item.link ? (
            <Link href={item.link || ""} key={item.id} className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
                <Image
                  src={item.src}
                  alt={item.heading}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <h3 className="text-center py-2 text-sm font-semibold text-gray-800 group-hover:text-indigo-600">
                  {item.heading}
                </h3>
              </div>
            </Link>
          ) : (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <Image
                src={item.src}
                alt={item.heading}
                width={300}
                height={200}
                className="w-full h-48 object-cover cursor-pointer"
                loading="lazy"
              />
              <h3 className="text-center py-2 text-sm font-semibold text-gray-800">
                {item.heading}
              </h3>
            </div>
          )
        )}
      </div>
    </div>
  );
}
