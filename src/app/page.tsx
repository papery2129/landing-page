// src/app/page.tsx

import { landingData } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Code, Server, Cpu } from "lucide-react";

// Importamos nuestra nueva sección
import { TechStack } from "@/components/sections/TechStack";

const renderIcon = (iconName: string) => {
  const iconProps = { className: "w-10 h-10 mb-4 text-primary" };
  switch (iconName) {
    case "Code": return <Code {...iconProps} />;
    case "Server": return <Server {...iconProps} />;
    case "Cpu": return <Cpu {...iconProps} />;
    default: return <Code {...iconProps} />;
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 pb-16 bg-background text-foreground overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      {/* ... (tu código del hero se queda intacto) */}
      <section className="text-center max-w-4xl px-6 mb-24">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance">
          {landingData.hero.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
          {landingData.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-md">
            {landingData.hero.primaryCTA}
          </Button>
          <Button size="lg" variant="outline" className="text-md">
            {landingData.hero.secondaryCTA}
          </Button>
        </div>
      </section>

      {/* --- SERVICES SECTION (CARROUSEL) --- */}
      {/* ... (tu código del carrusel se queda intacto) */}
      <section id="servicios" className="w-full max-w-6xl px-12 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Nuestros Servicios</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluciones técnicas de alto nivel diseñadas para escalar y adaptarse a las necesidades de tu infraestructura.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {landingData.services.map((service) => (
                <CarouselItem key={service.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader>
                        {renderIcon(service.icon)}
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* --- TECH STACK SECTION --- */}
      <TechStack />

    </main>
  );
}