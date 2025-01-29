import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { ReelCarousel } from '@/components/carousel';
import { AnimatedSection } from '@/components/ui/animated';
import { CountdownTimer } from '@/components/CountdownTimer';

export default function Home() {
  const packs = [
    { theme: "Viagem", color: "bg-blue-100", price: "97,00" },
    { theme: "Luxury", color: "bg-yellow-100", price: "147,00" },
    { theme: "Boss Babe", color: "bg-purple-100", price: "127,00" },
    { theme: "Pink Aesthetic", color: "bg-pink-100", price: "117,00" },
  ];

  const benefits = [
    {
      title: "Economia de Tempo",
      description: "Pare de perder horas pesquisando imagens e trilhas - tudo pronto para uso imediato"
    },
    {
      title: "Qualidade Profissional",
      description: "Edições premium com transições suaves e efeitos impactantes"
    },
    {
      title: "Customização Fácil",
      description: "Adicione seu logo e cores em minutos com nossos templates editáveis"
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Hero Section Structure */}
      <div className="relative h-[100vh] md:h-[80vh] w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay at bottom of hero */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Alert Banner */}
          <div className="bg-red-500 text-white py-3 text-center text-sm font-medium">
            <div>
              🚀 OFERTA RELÂMPAGO: 50% DE DESCONTO - Últimas 
              <span className="inline-block bg-white text-[#c5a030] px-2 py-1 rounded-full text-sm font-semibold mx-2">
                12 horas
              </span>
            </div>
            <div className="mt-2">
              <span className="text-sm">Tempo restante:</span>
              <CountdownTimer />
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="flex-1 flex items-center justify-center pt-4">
            <AnimatedSection>
              <section className="container mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#c5a030] to-[#a88420] bg-clip-text text-transparent tracking-tighter font-heading">
                  Eleve suas redes sociais com reels prontos e profissionais!
                </h1>
                
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto text-[#ffffff] font-body">
                  Packs completos para temas como Viagem, Luxury, Boss Babe e muito mais - 
                  <span className="font-semibold"> Tudo 100% editado e com trilhas exclusivas!</span>
                </p>

                {/* Carousel inside Hero Section */}
                <div className="relative aspect-[9/16] w-full max-w-[300px] md:max-w-md mx-auto pb-8">
                  <ReelCarousel />
                </div>
              </section>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Packs Section */}
      <div className="bg-black relative z-20 pt-16 transition-opacity duration-300">
        <AnimatedSection>
          <section id="comprar" className="animate-fade-in-up delay-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-20 text-white tracking-wide text-[#c5a030] font-subtitle">
                Escolha Seu Tema
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {packs.map((pack) => (
                  <div 
                    key={pack.theme}
                    className={`border-2 ${pack.color.replace('bg', 'border')}/30 bg-black/30 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-[0_20px_50px_rgba(197,160,48,0.3)] transition-all hover:${pack.color.replace('bg', 'border')}/50`}
                  >
                    <div className="bg-white/10 w-full aspect-square rounded-lg mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-white">{pack.theme}</h3>
                    <div className="text-4xl font-bold text-[#c5a030] mb-6">
                      R$ {pack.price}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {[1, 2, 3].map((i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="text-green-500" size={20} />
                          <span className="text-white">10 Reels prontos</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#"
                      className="w-full bg-[#c5a030] text-white py-4 rounded-lg font-medium hover:bg-[#d4af37] transition-colors flex items-center justify-center gap-2"
                    >
                      Comprar Agora <ArrowRight size={18} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Benefits Section */}
        <AnimatedSection>
          <section className="py-20 bg-black animate-fade-in-up delay-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16 text-[#c5a030] font-subtitle">
                Vantagens Exclusivas
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-gradient-to-br from-black/80 to-[#1a1a1a] rounded-xl shadow-xl flex items-start gap-4 border border-[#c5a030]/20"
                  >
                    <CheckCircle className="flex-shrink-0 text-[#c5a030]" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#c5a030] font-subtitle">
                        {benefit.title}
                      </h3>
                      <p className="text-[#f5e6d3] font-body">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Final CTA */}
        <AnimatedSection>
          <section className="bg-black/60 backdrop-blur-lg py-20 animate-fade-in-up delay-100">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6 text-[#c5a030]">
                Comece a impressionar seu público hoje mesmo!
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-[#f5e6d3]">
                Escolha seu pack favorito e receba tudo pronto para usar em menos de 2 minutos.
              </p>
              <Link
                href="#comprar"
                className="inline-block bg-[#c5a030] text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-[#d4af37] transition-colors animate-pulse-hover"
              >
                Quero Meu Pack Agora
              </Link>
            </div>
          </section>
        </AnimatedSection>

        <footer className="bg-black/60 border-t border-white/20 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white">© 2025 Reels Prontos. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
