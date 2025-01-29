import React from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  rating: number;
}

export function TestimonialCard({ name, role, rating }: TestimonialCardProps) {
  return (
    <div className="p-6 border rounded-xl animate-fade-in hover:bg-white/5 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-100" />
        <div className="text-left">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-300">{role}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} animate-sparkle`}
          />
        ))}
      </div>
      <p className="text-white/80 text-left">
        &ldquo;Os reels prontos mudaram completamente minha produtividade!
        Agora consigo postar conteúdo profissional diariamente.&rdquo;
      </p>
    </div>
  );
} 