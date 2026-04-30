// src/components/layout/Navbar.tsx
"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, TerminalSquare } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita errores de hidratación asegurando que el componente esté montado
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <TerminalSquare className="w-6 h-6 text-primary" />
          <span>DevStudio</span>
        </div>

        {/* Enlaces de navegación (Ocultos en móvil por ahora para mantenerlo simple) */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
          <a href="#stack" className="hover:text-foreground transition-colors">Tecnologías</a>
          <a href="#proyectos" className="hover:text-foreground transition-colors">Proyectos</a>
        </nav>

        {/* Acciones: Contacto y Dark Mode */}
        <div className="flex items-center gap-4">
          <Button variant="default" size="sm" className="hidden sm:flex">
            Contactar
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Cambiar tema"
          >
            {/* Renderizado condicional del ícono */}
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}