"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Homestay } from "@/data/homestays";

interface HomestayCardProps {
  homestay: Homestay;
}

export default function HomestayCard({ homestay }: HomestayCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl ${
        isHovered ? "transform -translate-y-3 rotate-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full">
        <Image
          src={homestay.image || "/placeholder.svg"}
          alt={homestay.name}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : ""
          }`}
        />
      </div>
      <div className="p-6 bg-gray-900">
        <h3 className="text-xl font-bold text-white mb-3">{homestay.name}</h3>

        <div className="space-y-1 mb-4 text-gray-300">
          <p>{homestay.capacity}</p>
          <p>{homestay.meals}</p>
          <p>{homestay.refundPolicy}</p>
        </div>

        <div className="mb-4">
          <p className="text-xl font-bold text-indigo-400">
            {homestay.pricePerNight}
          </p>
          <p className="text-sm text-gray-400">
            {homestay.baseFee} + {homestay.taxes}
          </p>
        </div>

        <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white rounded-full hover:scale-105 transition-all duration-300">
          BOOK THIS NOW
        </Button>
      </div>
    </Card>
  );
}
