"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Ticket, ArrowRight } from "lucide-react";
import type { Temple } from "@/data/temples";

interface TempleCardProps {
  temple: Temple;
}

export default function TempleCard({ temple }: TempleCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`overflow-hidden border-0 border-gray-800 bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl ${
        isHovered ? "transform -translate-y-3 rotate-1" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 w-full">
        <Image
          src={temple.image || "/placeholder.svg"}
          alt={temple.name}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : ""
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white">{temple.name}</h3>
            <div className="flex items-center gap-1 text-white/80 mt-1">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{temple.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gray-900">
        <p className="text-gray-300 mb-4">{temple.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <Clock className="h-4 w-4 text-indigo-400" />
            </div>
            <span className="text-sm text-gray-300">
              Timings: {temple.timings}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <Ticket className="h-4 w-4 text-indigo-400" />
            </div>
            <span className="text-sm text-gray-300">
              Entry: {temple.entryFee}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
              <MapPin className="h-4 w-4 text-indigo-400" />
            </div>
            <span className="text-sm text-gray-300">
              Distance: {temple.distance}
            </span>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white rounded-full hover:scale-105 transition-all duration-300">
          Book Temple Tour
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
